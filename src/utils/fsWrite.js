const fs = require('fs/promises');
const { join } = require('path');

const filename = '../talker.json';

const insertTalker = async (post) => {
  // reading
  const talkerList = await fs.readFile(join(__dirname, filename), 'utf-8');
  const talkerListJSON = JSON.parse(talkerList);

  // inserting
  let newPost = post;
  newPost = {
    id: talkerListJSON.length + 1,
    ...post,
  };
  talkerListJSON.push(newPost);

  fs.writeFile(join(__dirname, filename), JSON.stringify(talkerListJSON));

  return newPost;
};

module.exports = insertTalker;