const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@constants": path.resolve(__dirname, "../src/constants"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@layouts": path.resolve(__dirname, "../src/layouts"),
      "@services": path.resolve(__dirname, "../src/services"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@stores": path.resolve(__dirname, "../src/stores"),
      "@types": path.resolve(__dirname, "../src/types"),
    };
    return config;
  },
}