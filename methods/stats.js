const achievements = require('./achievements')();

module.exports = (data) => {
    const earned = [];

    const commandLength = data.command.length;
    const numArguments = data.command.split(/\s+/).length - 1;
    
    if (commandLength > achievements.data.longestCommand) {
        achievements.data.longestCommand = commandLength;
        earned.push(`That's a new longest command! ${commandLength} characters!`)
    }

    if (numArguments > achievements.data.mostArguments) {
        achievements.data.mostArguments = numArguments;
        earned.push(`Thats a new best for number of arguments! ${numArguments} arguments!`)
    }

    achievements.save();
    return earned;
}