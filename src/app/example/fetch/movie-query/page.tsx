"use client";

import { getMovieDeatail } from "@/data/get-movie";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movie", 550],
    queryFn: () => getMovieDeatail(550),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || data == null) {
    return (
      <div>
        <p>Failed to load</p>
        <pre>{error?.message ?? "DATA NOT FOUND"}</pre>
      </div>
    );
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
