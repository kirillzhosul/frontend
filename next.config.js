const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      "kirillzhosul.site",
      "github-readme-stats.vercel.app",
      "avatars.githubusercontent.com",
    ],
  },
});
