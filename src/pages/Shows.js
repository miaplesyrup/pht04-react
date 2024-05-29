import React, { useEffect, useState } from 'react'

const Shows = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://api.tvmaze.com/shows')
    // .then(res => res.json())
    // .then(data => setData(data))
    // fetch('https://api.tvmaze.com/search/shows?q=batman')

    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows/1/episodes");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>TV Series</h1>
      <div>{data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}</div>
    </div>
  )
}

export default Shows