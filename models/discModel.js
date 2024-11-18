const fs = require('fs');
const path = require('path');

const discsFilePath = path.join(__dirname, '../data/discs.json');

function getAllDiscs() {
    const data = fs.readFileSync(discsFilePath, 'utf-8');
    return JSON.parse(data);
}

function addDisc(disc) {
    const discs = getAllDiscs();
    discs.push(disc);
    fs.writeFileSync(discsFilePath, JSON.stringify(discs, null, 2));
}

module.exports = {
    getAllDiscs,
    addDisc
};
