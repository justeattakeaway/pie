/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const findMonorepoRoot = require('../utils/find-monorepo-root.js');

/**
 * Identifies packages that need to be published to the CDN
 * @param {Array} publishedPackages - Array of published packages from changesets
 * @returns {Array} - Array of packages that need CDN publishing
 */
async function identifyCdnPackages(publishedPackages) {
  // Get workspace info to locate package directories
  const monorepoRoot = findMonorepoRoot();
  const workspaceOutput = execSync('yarn workspaces list --json', { cwd: monorepoRoot }).toString();
  const workspaces = workspaceOutput.trim().split('\n').map(line => JSON.parse(line));
  
  // Find packages that need CDN publishing
  const cdnPackages = [];
  
  for (const pkg of publishedPackages) {
    // Find workspace location for this package
    const workspace = workspaces.find(ws => ws.name === pkg.name);
    if (!workspace) continue;
    
    // Read package.json to check for CDN configuration
    try {
      const packageJsonPath = path.join(monorepoRoot, workspace.location, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Validate required CDN configuration
      if (packageJson.pieMetadata && packageJson.pieMetadata.cdnPublish === true) {
        // Validate all required CDN properties are present
        if (!packageJson.pieMetadata.cdnSourceFolder) {
          console.error(`Missing required cdnSourceFolder for ${pkg.name}. Skipping CDN publishing.`);
          continue;
        }
        
        if (!packageJson.pieMetadata.cdnContentType) {
          console.error(`Missing required cdnContentType for ${pkg.name}. Skipping CDN publishing.`);
          continue;
        }
        
        cdnPackages.push({
          name: pkg.name,
          version: pkg.version,
          location: path.join(monorepoRoot, workspace.location),
          cdnSourceFolder: packageJson.pieMetadata.cdnSourceFolder,
          cdnContentType: packageJson.pieMetadata.cdnContentType
        });
      }
    } catch (error) {
      console.error(`Error processing ${pkg.name}:`, error);
    }
  }
  
  return cdnPackages;
}

/**
 * Publishes packages to the CDN
 * @param {Array} cdnPackages - Array of packages to publish to the CDN
 */
async function publishToCdn(cdnPackages) {
  console.log('Publishing packages to CDN:', cdnPackages);
  
  for (const pkg of cdnPackages) {
    try {
      // Get package name
      const packageName = pkg.name.replace('@justeattakeaway/', '');
      
      // Build the path to the source folder
      const sourcePath = path.join(pkg.location, pkg.cdnSourceFolder);
      
      // Check if the source folder exists
      if (!fs.existsSync(sourcePath)) {
        console.log(`Source directory '${pkg.cdnSourceFolder}' not found for ${pkg.name}, skipping upload`);
        continue;
      }
      
      console.log(`Uploading ${pkg.name} to S3 from ${sourcePath}...`);
      execSync(
        `aws s3 sync ${sourcePath}/ s3://$PIE_CDN_BUCKET_NAME/${packageName}/v${pkg.version}/ --region $AWS_REGION --content-type "${pkg.cdnContentType}"`,
        { stdio: 'inherit' }
      );
      
      console.log(`Successfully published ${pkg.name}@${pkg.version} to CDN`);
    } catch (error) {
      console.error(`Error processing ${pkg.name}:`, error);
      throw error;
    }
  }
}

/**
 * @param {Object} options - Options object
 * @param {Array} options.publishedPackages - Array of published packages from changesets
 */
module.exports = async ({ publishedPackages }) => {
  try {
    // Identify packages for CDN publishing
    const cdnPackages = await identifyCdnPackages(publishedPackages);
    
    if (cdnPackages.length === 0) {
      console.log('No packages need CDN publishing');
      return;
    }

    await publishToCdn(cdnPackages);
    
  } catch (error) {
    console.error('Error publishing to CDN:', error);
    throw error;
  }
}; 