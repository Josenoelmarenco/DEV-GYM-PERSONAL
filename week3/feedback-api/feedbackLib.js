let feedbacks = [];

function getAll() {
  return feedbacks;
}

module.exports = { getAll };

if (require.main === module) {
  console.log('getAll. called:', getAll());
}
