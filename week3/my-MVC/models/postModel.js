//models/postModel.js
let posts = [
  {
    id: 1,
    title: 'El poema azúl',
    content: 'Aquí tenemos un contenido muy bonito y actualizado 😌.',
  },
];

let nextId = posts.length + 1;

function getAll() {
  return posts;
}
//fn para agregar un post
function addOne({ title, content }) {
  const newPost = {
    id: nextId,
    title,
    content,
  };
  posts.push(newPost);
  nextId++;
  return newPost;
}
//fn para encontrar un id
function findById(id) {
  const numericId = Number(id);
  return posts.find((p) => p.id === numericId);
}

//fn para delete un post por Id
function deleteById(id) {
  const item = findById(id);
  if (!item) return false;

  const initialLength = posts.length;
  posts = posts.filter((p) => p.id !== Number(id));

  return posts.length < initialLength;
}

//fn para reemplazo total (PUT)
function putPostById(id, data) {
  const index = posts.findIndex((p) => p.id === Number(id));

  if (index === -1) return false; //regresa falso si no encuentra

  const updatedPost = {
    id: id,
    title: data.title, // Accediendo correctamente al objeto data
    content: data.content,
  };

  posts[index] = updatedPost;
  return updatedPost;
}

//fn updtate by patch method by id
function patchPostById(id, data) {
  const index = posts.findIndex((p) => p.id === Number(id));

  if (index === -1) return false;

  // const postOriginal = posts[index];

  const updatedPostPatch = { ...posts[index], ...data };

  posts[index] = updatedPostPatch;
  return updatedPostPatch;
}

module.exports = {
  getAll,
  addOne,
  findById,
  deleteById,
  putPostById,
  patchPostById,
};
