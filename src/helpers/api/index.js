async function requestApi() {
  const url = 'https://sample-posts.coderockr.com/api/posts/';
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
async function requestApiById(id) {
  const url = `https://sample-posts.coderockr.com/api/posts/${id}`;
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
module.exports = { requestApi, requestApiById };
