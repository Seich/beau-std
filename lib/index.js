class STD {
    constructor(registry) {
        const FileSystem = require('./plugins/fileSystem.js');
        new FileSystem(registry);
    }
}

module.exports = STD;
