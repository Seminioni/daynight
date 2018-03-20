let plugins = [
  // require('stylelint')({}),
  // require("postcss-reporter")({ clearReportedMessages: true }),
  require("postcss-flexbugs-fixes")({}),
  require("postcss-normalize")({
    allowDuplicates: true
  }),
  require("postcss-cssnext")({}),
  require("postcss-clearfix")({}),
  require("postcss-font-magician")({
    custom: {
      HelveticaNeue: {
        variants: {
          normal: {
            300: {
              url: {
                woff2: "../fonts/helveticaCyr/HelveticaNeue-Light.woff2",
                woff: "../fonts/helveticaCyr/HelveticaNeue-Light.woff",
                ttf: "../fonts/helveticaCyr/HelveticaNeue-Light.ttf"
              }
            },
            400: {
              url: {
                woff2: "../fonts/helveticaCyr/HelveticaNeue-Regular.woff2",
                woff: "../fonts/helveticaCyr/HelveticaNeue-Regular.woff",
                ttf: "../fonts/helveticaCyr/HelveticaNeue-Regular.ttf"
              }
            },
            700: {
              url: {
                woff2: "../fonts/helveticaCyr/HelveticaNeue-Bold.woff2",
                woff: "../fonts/helveticaCyr/HelveticaNeue-Bold.woff",
                ttf: "../fonts/helveticaCyr/HelveticaNeue-Bold.ttf"
              }
            }
          },
          italic: {
            300: {
              url: {
                woff2: "../fonts/helveticaCyr/HelveticaNeue-Light-Italic.woff2",
                woff: "../fonts/helveticaCyr/HelveticaNeue-Light-Italic.woff",
                ttf: "../fonts/helveticaCyr/HelveticaNeue-Light-Italic.ttf"
              }
            },
            500: {
              url: {
                woff2:
                  "../fonts/helveticaCyr/HelveticaNeue-Regular-Italic.woff2",
                woff: "../fonts/helveticaCyr/HelveticaNeue-Regular-Italic.woff",
                ttf: "../fonts/helveticaCyr/HelveticaNeue-Regular-Italic.ttf"
              }
            },
            700: {
              url: {
                woff2: "../fonts/helveticaCyr/HelveticaNeue-Bold-Italic.woff2",
                woff: "../fonts/helveticaCyr/HelveticaNeue-Bold-Italic.woff",
                ttf: "../fonts/helveticaCyr/HelveticaNeue-Bold-Italic.ttf"
              }
            }
          }
        }
      }
    },
    formats: "woff2 woff ttf"
  })
];

if (global.production) {
  plugins.push(require("css-mqpacker")());
}

module.exports = {
  plugins: plugins
};
