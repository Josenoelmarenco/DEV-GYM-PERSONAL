let feedbacks = [];
let nextId = 1;

function getAll() {
  return feedbacks;
}

function addOne(sender, message, rating, platform) {
  const newFeedback = {
    id: nextId,
    sender,
    message,
    rating,
    platform,
  };

  nextId += 1;
  feedbacks.push(newFeedback);

  return newFeedback;
}

module.exports = {
  getAll,
  addOne,
};

if (require.main === module) {
  const created = addOne(
    'John Smith',
    'Great session on React components! I found the examples very helpful.',
    5,
    'mobile',
  );

  console.log('created:', created);
  console.log('getAll called:', getAll());
}

// rest of the tests here
