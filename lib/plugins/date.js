const format = require('date-fns/format');

module.exports = (registry, settings) => {
    registry.defineDynamicValue('now', (fmt = settings.date.format) =>
        format(Date.now(), fmt)
    );

    registry.defineDynamicValue(
        'date',
        (year, month, day, fmt = settings.date.format) =>
            format(new Date(year, month - 1, day), fmt)
    );
};
