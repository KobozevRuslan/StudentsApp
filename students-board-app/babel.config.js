module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ['@babel/preset-react'],
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};

// module.exports = {
//   env: {
//     test: {
//       presets: [
//         [
//           '@babel/preset-env',
//           {
//             modules: 'commonjs',
//             debug: false,
//           },
//         ],
//         '@babel/preset-flow',
//         '@babel/preset-react',
//       ],
//       plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties'],
//     },
//     production: {
//       presets: [
//         ['@babel/preset-env', { modules: false }],
//         '@babel/preset-flow',
//         '@babel/preset-react',
//       ],
//       plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties'],
//     },
//     development: {
//       presets: [
//         ['@babel/preset-env', { modules: false }],
//         '@babel/preset-flow',
//         '@babel/preset-react',
//       ],
//       plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties'],
//     },
//   },
// };
