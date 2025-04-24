export const getBooks = async (query) => {
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&key=${apiKey}`
  );

  if (!response.ok) {
    if (!response.ok) {
      console.log(`'Rut Roh! Something went wrong.' Reponse: ${response.status}`);
    }
  }

  const data = await response.json();
  console.log(data);

  return data.items || [];
};
