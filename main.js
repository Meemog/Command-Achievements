const extractData = require('./methods/extractData');
const incriment = require('./methods/increment');
const stats = require('./methods/stats');
const specific = require('./methods/specific');

const data = extractData(process.argv);

const toSubmit = []

// Incriment values and check values against achievements (total number of commands run, times this specific command was run)
toSubmit.push(incriment(data));

// Store stats of command (length, arguments, etc) and check against achievements
toSubmit.push(stats(data));

// Check command against specific achievement conditions
toSubmit.push(specific(data));