const fs = require("fs");
const path = require("path");
const os = require("os");

const dir = path.join(os.homedir(), ".achievements");
const file = path.join(dir, "data.json");

function setupPath() {
    const templateFile = path.join(process.cwd(), "statsTemplate.json");

    // 1. Ensure folder exists
    if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    }

    // 2. Ensure file exists
    if (!fs.existsSync(file)) {
    fs.copyFileSync(templateFile, file);
    }
}

function loadData() {
    setupPath();
    const raw = fs.readFileSync(file, "utf-8");
    return JSON.parse(raw || "{}");
}

function saveData(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

module.exports = () => {
    const data = loadData(); 

    return {
        data,
        save: () => saveData(data)
    };
};