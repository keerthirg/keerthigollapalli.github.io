// // module.exports = {
// //   reactStrictMode: true,
// // }
// // const withMdxEnhanced = require('next-mdx-enhanced')

// // module.exports = withMdxEnhanced({
// //   layoutPath: 'layouts',
// //   fileExtensions: ['md'],
// //   rehypePlugins: [require('rehype-slug'), require('rehype-autolink-headings')],
// //   extendFrontMatter: {
// //     process: (mdxContent, frontMatter) => {},
// //     phase: 'prebuild|loader|both',
// //   },
// // })(/* your normal nextjs config */)
// // This file is not going through babel transformation.
// // So, we write it in vanilla JS
// // (But you could use ES2015 features supported by your Node.js version)

// const debug = process.env.NODE_ENV !== "production";

// module.exports = {
//   exportPathMap: function () { // /Next-React-Components
//     return {
//       "/": { page: "/" },
//     //   "/ap-grid-layout": { page: "/ap-grid-layout" },
//     //   "/ap-highlight": { page: "/ap-highlight" },
//     }
//   },
//   // assetPrefix: !debug ? 'https://gsahadevan.github.io/gsahadevan.github.io/' : '',
//   /* webpack: (config, { dev }) => {
//     // Perform customizations to webpack config
//     // console.log('webpack');
//     // console.log(config.module.rules, dev);
//     // Important: return the modified config
//     return config
//   },
//   webpackDevMiddleware: (config) => {
//     // Perform customizations to webpack dev middleware config
//     // console.log('webpackDevMiddleware');
//     // console.log(config);
//     // Important: return the modified config
//     return config
//   }, */
// }

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    exportPathMap: function () {
        return {
            '/': {page: '/'}
        };
    },
	assetPrefix: isProd ? '/' : ''
};
