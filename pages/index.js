import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) {
    return <h1>ERROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <main>
      <h2>
        {data.firstName} {data.lastName}
      </h2>
      <p>
        {data.age} {data.gender}
      </p>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{data.twitter}</a>
      <span>Geohash: {data.geohash}</span>
    </main>
  );
}
