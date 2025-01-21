"use client";

import { getMovieDeatail } from "@/data/get-movie";
import { delay } from "@/lib/utils";
import { useEffect, useState } from "react";

const _getData = async () => {
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

type Movie = {
  id: number;
  title: string;
  overview: string;
};

export default function MoviesPage() {
  const [data, setData] = useState<Movie | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDeatail(200)
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.overview}</p>
        </div>
      )}
    </div>
  );
}
