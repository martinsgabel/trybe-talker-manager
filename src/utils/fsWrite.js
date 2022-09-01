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

const changeList = async (post, id) => {
  // reading
  const talkerList = await fs.readFile(join(__dirname, filename), 'utf-8');
  const talkerListJSON = JSON.parse(talkerList);
  // update
  let changedList;
  for (let i = 0; i < talkerListJSON.length; i += 1) {
    if (talkerListJSON[i].id === Number(id)) {
      talkerListJSON[i].name = post.name;
      talkerListJSON[i].age = post.age;
      talkerListJSON[i].talk = post.talk;
      talkerListJSON[i].talk.watchedAt = post.talk.watchedAt;
      talkerListJSON[i].talk.rate = post.talk.rate;
      changedList = talkerListJSON[i];
    }
  }

  await fs.writeFile(join(__dirname, filename), JSON.stringify(talkerListJSON));
  return changedList;
};

const deleteTalker = async (id) => {
  // reading
  const talkerList = await fs.readFile(join(__dirname, filename), 'utf-8');
  const talkerListJSON = JSON.parse(talkerList);

  // inserting
  const selectedTalker = talkerListJSON.findIndex((talker) => talker.id === Number(id));
  talkerListJSON.splice(selectedTalker, 1);
  fs.writeFile(join(__dirname, filename), JSON.stringify(talkerListJSON));
};

module.exports = {
  insertTalker,
  changeList,
  deleteTalker,
};