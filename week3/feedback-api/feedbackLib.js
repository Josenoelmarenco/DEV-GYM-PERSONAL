let feedbacks = [];
//esta es la fn que devolverá la lista feedback
function getAll() {
  return feedbacks;
}
//fn addOne
function addOne(sender, message, rating, platform) {
  const newFeedback = {
    id: feedbacks.length + 1,
    sender,
    message,
    rating,
    platform,
  };
  feedbacks.push(newFeedback);
  return newFeedback;
}

function findById(id) {
  return feedbacks.find(“);
}

module.exports = { getAll, addOne };

/*Como aún no tenemos la base de datos completa, simulamos todo
con este bloque para probar las funciones sin Express*/
if (require.main === module) {
  let result = addOne(
    'John Smith',
    'Great session on React components! I found the examples very helpful.',
    5,
    'mobile',
  );
  console.log(result);
  console.log('getAll called:', getAll());
  console.log('findById called:', findById(1));
  // rest of the tests here
}
