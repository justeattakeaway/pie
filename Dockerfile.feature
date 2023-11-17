# Dockerfile for a dynamic branch (Dockerfile.feature)
FROM node:20

# Set the working directory
WORKDIR /app

# Argument for specifying the branch name, with a default value
ARG BRANCH_NAME=feature

# Clone the specific branch
RUN git clone --single-branch --branch ${BRANCH_NAME} --depth 1 https://github.com/justeattakeaway/pie/ .

# Install dependencies
RUN yarn install --frozen-lockfile

# Expose a different port for the Storybook server
EXPOSE 6007

# Command to run the Storybook server on a different port
CMD ["yarn", "dev", "--filter=pie-docs", "--", "--port=6007"]
