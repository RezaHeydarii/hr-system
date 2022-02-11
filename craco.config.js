const path = require("path");
const CracoAlias = require("craco-alias");

module.exports = {
  webpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@stores": path.resolve(__dirname, "./src/stores"),
        "@types": path.resolve(__dirname, "./src/types"),
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        /* tsConfigPath should point to the file where "baseUrl" and "paths" 
          are specified*/
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ]
};
