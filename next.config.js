const actionsRepository = process.env.GITHUB_ACTIONS_REPOSITORY;
module.exports = {
  reactStrictMode: true,
  output: "standalone",

  assetPrefix: actionsRepository ? `/${actionsRepository}` : "",
  basePath: actionsRepository ? `/${actionsRepository}` : "",

  images: {
    domains: ["kirillzhosul.github.io"],
  },
};
