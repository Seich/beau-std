const fs = require('fs');

class FileSystem {
    constructor(registry) {
        registry.defineDynamicValue('createReadStream', fs.createReadStream);
    }
}

module.exports = FileSystem;
