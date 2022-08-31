const fs = require('fs').promises;
const { join } = require('path');

const filename = '../talker.json';

const fsRead = async () => {
console.log('Chegou');
  try {
    const talkerFile = await fs.readFile(join(__dirname, filename), 'utf-8');
    const jsonFile = JSON.parse(talkerFile);
    return jsonFile; 
  } catch (error) {
    return null;
  }
};

module.exports = { fsRead };
