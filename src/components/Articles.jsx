import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch(
                    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jagadishtripathy"
                );
                const data = await res.json();

                // Transform the RSS data
                const formattedArticles = data.items.slice(0, 4).map((item) => ({
                    title: item.title,
                    // Create a snippet from the content (strip HTML)
                    description: item.description.replace(/<[^>]*>/g, "").slice(0, 150) + "...",
                    url: item.link,
                    date: new Date(item.pubDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }),
                    tags: item.categories.slice(0, 3) // Take up to 3 tags
                }));

                setArticles(formattedArticles);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Medium articles:", error);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <section id="articles" className="py-20 max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center dark:text-white text-black mb-4">
                    Latest Articles
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl">
                    Sharing knowledge and technical walkthroughs from my recent investigations and CTF challenges.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col justify-between rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:shadow-lg transition-shadow"
                        >
                            <div>
                                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                                    <BookOpen className="w-4 h-4" />
                                    <span>Medium</span>
                                    <span className="mx-1">•</span>
                                    <Clock className="w-4 h-4" />
                                    <span>{article.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                                    {article.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {article.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full gap-2 mt-auto"
                                onClick={() => window.open(article.url, "_blank")}
                            >
                                Read Article <ArrowUpRight className="w-4 h-4" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            )}

            <div className="flex justify-center mt-10">
                <Button
                    className="gap-2"
                    onClick={() => window.open("https://medium.com/@jagadishtripathy", "_blank")}
                >
                    View All on Medium <ArrowUpRight className="w-4 h-4" />
                </Button>
            </div>
        </section>
    );
}
