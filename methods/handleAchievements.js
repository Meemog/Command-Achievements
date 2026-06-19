module.exports = async (achievements) => {
    // Get user ID

    // Post achievement for each achievement
    for (const achievement of achievements) {

        // Check to see if it's an achievement or personal best

        if (achievement.type === "Achievement") {
            console.log({
                title: achievement.name,
                description: achievement.description
            })
        }
    }
}