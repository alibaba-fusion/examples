const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: '@alifd/next',
        libraryDirectory: 'es'
    })
);
