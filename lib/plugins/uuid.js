const uuid = require('uuid/v4');

module.exports = registry => registry.defineDynamicValue('uuid', uuid);
