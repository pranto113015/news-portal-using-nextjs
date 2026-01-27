"use client";
import fetchNews from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";
import NewsCard from "../shared/NewsCard";

function NewsList() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const getNews = async () => {
      // Fetch news based on category and search
      const data = await fetchNews(category, search);
      setNews(data);
    };
    getNews();
  }, [category, search]);

  return (
    <div>
      {/* news cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
        {news.map((item) => (
          <NewsCard key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
