const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: '@alifd/next',
        libraryDirectory: 'lib',
        customName: (name) => {
          return `@alifd/next/lib/${name}/mobile/`;
        }
    })
);
