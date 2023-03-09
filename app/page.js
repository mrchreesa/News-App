import React from "react";
import Hero from "../components/Hero";

const apiKey = process.env.NEWS_API_KEY;

// Data fetching from News API
async function getData() {
  const [aiNewsRes, teslaNewsRes, cryptoNewsRes] = await Promise.all([
    await fetch(
      `https://newsapi.org/v2/everything?q=AI&from=2023-02-08&to=2023-03-08&pageSize=10&apiKey=${apiKey}`
    ),
    await fetch(
      `https://newsapi.org/v2/everything?q=Tesla&from=2023-02-08&to=2023-03-08&pageSize=10&apiKey=${apiKey}`
    ),
    await fetch(
      `https://newsapi.org/v2/everything?q=Crypto&from=2023-02-08&to=2023-03-08&pageSize=10&apiKey=${apiKey}`
    ),
  ]);
  const [aiNews, teslaNews, cryptoNews] = await Promise.all([
    aiNewsRes.json(),
    teslaNewsRes.json(),
    cryptoNewsRes.json(),
  ]);
  if (!aiNewsRes.ok || !teslaNewsRes.ok || !cryptoNewsRes.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return [aiNews, teslaNews, cryptoNews];
}

const Home = async () => {
  const data = await getData();
  return (
    <div className="w-full">
      <Hero data={data} />
    </div>
  );
};

export default Home;
