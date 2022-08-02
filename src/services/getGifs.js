const apiKey = "di26qe8yZr1NPdxrfwzWslHVUkqwcRv0&q";

export default function getGifs({ keyword = "gatitos" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=100&offset=5&rating=g&lang=es`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((data) => {
          const { images, title, id } = data;
          const { url } = data.images.downsized_medium;
          return { title, id, url };
        });
        return gifs;
      }
    })
    .catch((e) => console.log(e));
}
