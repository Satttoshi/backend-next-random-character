import styled from "styled-components";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) {
    return <h1>ERROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <StyledMain>
      <h2>
        {data.firstName}, {data.lastName}
      </h2>
      <p>
        Age: {data.age}, Gender: {data.gender}
      </p>
      <span>
        Twitter:{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{data.twitter}</a>
      </span>

      <span>Geohash: {data.geohash}</span>
    </StyledMain>
  );
}
