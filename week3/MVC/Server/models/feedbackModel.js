let feedbacks = [];
let nextId = 1;

function getAll() {
  return feedbacks;
}

function findById(id) {
  return feedbacks.find((f) => f.id === id);
}

function addOne({ sender, message, rating, platform }) {
  const newFeedback = {
    id: nextId++,
    sender,“
    message,
    rating: rating ?? null,
    platform: platform ?? null,
  };

  feedbacks.push(newFeedback);
  return newFeedback;
}

function removeById(id) {
  const index = feedbacks.findIndex((f) => f.id === id);
  if (index === -1) return null;

  const [deleted] = feedbacks.splice(index, 1);
  return deleted;
}

module.exports = {
  getAll,
  findById,
  addOne,
  removeById,
};
