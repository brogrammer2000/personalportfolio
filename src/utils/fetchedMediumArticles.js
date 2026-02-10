import Parser from "rss-parser";

export async function fetchMediumArticles() {
  const parser = new Parser();
  const CORS_PROXY = "https://api.allorigins.win/raw?url=";
  const mediumFeed = `https://medium.com/feed/@arorasatyam1112`;

  const feed = await parser.parseURL(CORS_PROXY + mediumFeed);

  return feed.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    contentSnippet: item.contentSnippet,
    thumbnail: item.content?.match(/<img.*?src="(.*?)"/)?.[1] ?? "",
  }));
}
