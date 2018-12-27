const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { 
            libraryName: '@alifd/next', 
            libraryDirectory: 'lib', 
            style: true }
        ],
        config,
    );
    return config;
};