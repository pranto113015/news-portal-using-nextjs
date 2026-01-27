const fetchNews = async (category: string = "", search: string = "") => {
  try {
    // news API endpoint
    const response = await fetch(
      `https://demo-news-api.vercel.app/api/news?category=${category}&search=${search}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
export default fetchNews;
