const fs = require('fs');

module.exports = registry =>
	registry.defineDynamicValue('createReadStream', fs.createReadStream);
