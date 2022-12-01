export default async function requestApi() {
  const url = 'https://sample-posts.coderockr.com/api/posts';
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
