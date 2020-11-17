module.exports = {
  input: ['src/**/*.{ts,tsx}'],
  output: 'src/locale',
  options: {
    func: {
      list: ['t'],
      extensions: ['.ts', '.tsx'],
    },
    trans: false,
    lngs: ['en'],
    ns: ['common'],
    defaultLng: 'en',
    defaultNs: 'common',
    defaultValue: (lng, ns, key) => `missing - ${lng}.${ns}.${key}`,
    resource: {
      loadPath: './src/locale/{{lng}}/{{ns}}.json',
      savePath: '{{lng}}/{{ns}}.json',
      jsonIndent: 1,
      lineEnding: '\n',
    },
    nsSeparator: ':',
    keySeparator: '.',
  },
}
