const milestones = [1, 5, 10, 25, 50, 100];

module.exports = async (data) => {
    const achievements = await require('./achievements')();
    const earned = [];

    achievements.data.commandsRun++;
    const timesRun = achievements.data.commandsRun;

    if (milestones.includes(timesRun)) {
        earned.push({
            name: `RunX${timesRun}`,
            description: `You have run ${timesRun} command${(timesRun > 1) ? 's' : ''}`,
            type: "Achievement"
        })
    }


    const key = data.command.split(/\s+/)[0];
    achievements.data.commands[key] = (achievements.data.commands[key] ?? 0) + 1;
    const timesKeyRun = achievements.data.commands[key];

    if (milestones.includes(timesKeyRun)) {
        earned.push({
            name: `${key} RunX${timesKeyRun}`,
            description: `You have run ${key} ${timesKeyRun} time${(timesKeyRun > 1) ? 's' : ''}`,
            type: "Achievement"
        })
    }
    await achievements.save()

    return earned;
}