import { delay } from "@/lib/utils";

const getData = async () => {
  await delay(1000);
  try {
    const API_KEY = process.env.NEXT_PUBLIC_TMBD_API_KEY;
    console.log({ API_KEY });
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log({ data, API_KEY });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function MoviesServerPage() {
  const data = await getData();

  if (data == null) {
    return <p>Failed to load</p>;
  }

  return (
    <div>
      <h1>Movies</h1>
      <div>
        <h2>{data.title}</h2>
        <p>{data.overview}</p>
      </div>
    </div>
  );
}
