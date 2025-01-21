"use server";

import { delay } from "@/lib/utils";

type Movie = {
  id: number;
  title: string;
  overview: string;
};

export const getMovieDeatail = async (id = 550) => {
  await delay(1000);
  try {
    const API_KEY = process.env.TMBD_API_KEY;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data as Movie;
  } catch (error) {
    console.error(error);
    return null;
  }
};
