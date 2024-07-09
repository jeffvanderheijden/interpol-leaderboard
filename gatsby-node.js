const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: [/react-globe.gl/],
            use: loaders.null(),
          },
        ],
      },
    })
  }
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.m?js$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
    resolve: {
      alias: {
        three$: 'three/build/three.module.js',
      },
    },
  });
};