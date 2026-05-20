import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { useStorybookState } from 'storybook/manager-api';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const GITHUB_REPO = 'justeattakeaway/pie-aperture';
const GITHUB_BRANCH = 'main';

interface ApertureApp {
    label: string;
    baseUrl: string;
    language: string;
    getSourcePath: (name: string) => string;
}

const APERTURE_APPS: ApertureApp[] = [
    {
        label: 'Next.js 14 (React)',
        baseUrl: 'https://aperture-nextjs-v14.pie.design/components',
        language: 'tsx',
        getSourcePath: (name) => `nextjs-app-v14/src/app/components/${name}/${name}.tsx`,
    },
    {
        label: 'Next.js 15 (React)',
        baseUrl: 'https://aperture-nextjs-v15.pie.design/components',
        language: 'tsx',
        getSourcePath: (name) => `nextjs-app-v15/src/app/components/${name}/${name}.tsx`,
    },
    {
        label: 'Nuxt 3 (Vue)',
        baseUrl: 'https://aperture-nuxt.pie.design/components',
        language: 'html',
        getSourcePath: (name) => `nuxt-app/pages/components/${name}.vue`,
    },
    {
        label: 'Vanilla JS',
        baseUrl: 'https://aperture-vanilla.pie.design/components',
        language: 'javascript',
        getSourcePath: (name) => `vanilla-app/js/${name}.js`,
    },
];

/**
 * Extracts the component name from a Storybook story title.
 * e.g. "Components/Button" -> "button"
 */
function getComponentName (storyTitle: string): string | null {
    const match = storyTitle.match(/^Components\/(.+)/i);
    if (!match) return null;

    // Convert "Button" -> "button", "Text Input" -> "text-input"
    return match[1].toLowerCase().replace(/\s+/g, '-');
}

function getRawGitHubUrl (sourcePath: string): string {
    return `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${sourcePath}`;
}

function getGitHubUrl (sourcePath: string): string {
    return `https://github.com/${GITHUB_REPO}/blob/${GITHUB_BRANCH}/${sourcePath}`;
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontFamily: 'inherit',
    },
    tabBar: {
        display: 'flex',
        gap: '0',
        borderBottom: '1px solid #e0e0e0',
        padding: '0 16px',
        flexShrink: 0,
        backgroundColor: '#fafafa',
    },
    tab: {
        padding: '10px 16px',
        fontSize: '13px',
        fontWeight: 500,
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: '#666',
        borderBottom: '2px solid transparent',
        marginBottom: '-1px',
        transition: 'color 0.15s, border-color 0.15s',
    },
    tabActive: {
        color: '#f36d00',
        borderBottomColor: '#f36d00',
    },
    splitView: {
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
    },
    previewPane: {
        flex: 1,
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
    },
    previewHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
        fontSize: '12px',
        color: '#666',
        flexShrink: 0,
    },
    iframe: {
        flex: 1,
        border: 'none',
        width: '100%',
    },
    codePane: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    codeHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        backgroundColor: '#1e1e1e',
        borderBottom: '1px solid #333',
        fontSize: '12px',
        color: '#999',
        flexShrink: 0,
    },
    codeContent: {
        flex: 1,
        overflow: 'auto',
        margin: 0,
    },
    githubLink: {
        color: '#58a6ff',
        textDecoration: 'none',
        fontSize: '12px',
    },
    openLink: {
        color: '#58a6ff',
        textDecoration: 'none',
        fontSize: '12px',
    },
    loading: {
        padding: '24px',
        color: '#999',
        fontSize: '13px',
    },
    error: {
        padding: '16px',
        color: '#999',
        fontSize: '13px',
    },
    empty: {
        padding: '24px',
        fontSize: '14px',
        color: '#999',
    },
};

export function CodeExamplesPanel () {
    const state = useStorybookState();
    const { storyId } = state;
    const story = state.index?.[storyId];
    const storyTitle = story && 'title' in story ? story.title : '';

    const componentName = getComponentName(storyTitle);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [code, setCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleIframeLoad = useCallback(() => {
        // Delay slightly to allow fonts and styles to settle
        setTimeout(() => setIframeLoaded(true), 500);
    }, []);

    const selectedApp = APERTURE_APPS[selectedIndex];
    const sourcePath = componentName ? selectedApp.getSourcePath(componentName) : '';

    useEffect(() => {
        if (!componentName) return;

        setLoading(true);
        setFetchError(false);
        setCode(null);
        setIframeLoaded(false);

        fetch(getRawGitHubUrl(sourcePath))
            .then((res) => {
                if (!res.ok) throw new Error(`${res.status}`);
                return res.text();
            })
            .then((text) => {
                setCode(text);
                setLoading(false);
            })
            .catch(() => {
                setFetchError(true);
                setLoading(false);
            });
    }, [componentName, selectedIndex, sourcePath]);

    if (!componentName) {
        return (
            <div style={styles.empty}>
                Code examples are only available for component stories.
            </div>
        );
    }

    return (
        <div style={styles.container}>
            {/* Framework tabs */}
            <div style={styles.tabBar}>
                {APERTURE_APPS.map((app, index) => (
                    <button
                        key={app.label}
                        style={{
                            ...styles.tab,
                            ...(index === selectedIndex ? styles.tabActive : {}),
                        }}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {app.label}
                    </button>
                ))}
            </div>

            {/* Split view: live preview + code */}
            <div style={styles.splitView}>
                {/* Left: Live preview */}
                <div style={styles.previewPane}>
                    <div style={styles.previewHeader}>
                        <span>Live Preview</span>
                        <a
                            href={`${selectedApp.baseUrl}/${componentName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.openLink}
                        >
                            Open in new tab &#8599;
                        </a>
                    </div>
                    {!iframeLoaded && (
                        <div style={{ ...styles.loading, flex: 1 }}>Loading preview...</div>
                    )}
                    <iframe
                        ref={iframeRef}
                        src={`${selectedApp.baseUrl}/${componentName}`}
                        style={{
                            ...styles.iframe,
                            opacity: iframeLoaded ? 1 : 0,
                            flex: iframeLoaded ? 1 : 0,
                        }}
                        title={`${selectedApp.label} - ${componentName}`}
                        onLoad={handleIframeLoad}
                    />
                </div>

                {/* Right: Source code */}
                <div style={styles.codePane}>
                    <div style={styles.codeHeader}>
                        <span>{sourcePath.split('/').pop()}</span>
                        <a
                            href={getGitHubUrl(sourcePath)}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.githubLink}
                        >
                            View on GitHub &#8599;
                        </a>
                    </div>
                    <div style={styles.codeContent}>
                        {loading && (
                            <div style={styles.loading}>Loading source code...</div>
                        )}
                        {fetchError && (
                            <div style={styles.error}>
                                Could not load source code.{' '}
                                <a
                                    href={getGitHubUrl(sourcePath)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.githubLink}
                                >
                                    View on GitHub &#8599;
                                </a>
                            </div>
                        )}
                        {code && (
                            <SyntaxHighlighter
                                language={selectedApp.language}
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    borderRadius: 0,
                                    height: '100%',
                                    fontSize: '13px',
                                }}
                                showLineNumbers
                            >
                                {code}
                            </SyntaxHighlighter>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
