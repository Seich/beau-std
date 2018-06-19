const date = require('./plugins/date');
const fileSystem = require('./plugins/fileSystem');
const uuid = require('./plugins/uuid');

class STD {
    constructor(registry, settings) {
        const defaults = { date: { format: 'YYYY-MM-DDTHH:mm:ss.SSSZ' } };
        settings = Object.assign({}, defaults, settings);

        [date, fileSystem, uuid].forEach(plugin => plugin(registry, settings));
    }
}

module.exports = STD;
