const date = require('./plugins/date');
const fileSystem = require('./plugins/fileSystem.js');

class STD {
	constructor(
		registry,
		settings = { date: { format: 'YYYY-MM-DDTHH:mm:ss.SSSZ' } }
	) {
		[date, fileSystem].forEach(plugin => plugin(registry, settings));
	}
}

module.exports = STD;
