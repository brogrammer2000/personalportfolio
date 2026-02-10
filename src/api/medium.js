import Parser from "rss-parser";

const parser = new Parser();

export default async function handler(req, res) {
  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/@arorasatyam1112"
    );

    const articles = feed.items.slice(0, 6).map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.contentSnippet,
      thumbnail: item.content?.match(/<img.*?src="(.*?)"/)?.[1] || null,
    }));

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Medium posts" });
  }
}
