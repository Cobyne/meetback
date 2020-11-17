module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/react',
  ],
  plugins: ['babel-plugin-styled-components', ['import', { libraryName: 'ramda', libraryDirectory: 'src' }, 'ramda']],
  env: {
    development: {
      plugins: ['react-refresh/babel', 'react-hot-loader/babel'],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react',
      ],
      plugins: ['react-hot-loader/babel', 'babel-plugin-styled-components'],
    },
  },
}
