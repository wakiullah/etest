'use client';
import ArticleCard from "@/components/UI/ArticleCard";

const articles = [
    {
        title: 'How Modern Schools Are Shaping the Future',
        description:
            'Explore how cutting-edge technologies and forward-thinking teaching methods are preparing students for the future job market',
        image: 'https://wenr.wes.org/wp-content/uploads/2019/09/iStock-1142918319_WENR_Ranking_740_430.jpg',
    },
    {
        title: 'Fostering Creativity Modern Approaches to Education',
        description:
            'Discuss the importance of creativity in the curriculum and how schools are integrating arts and innovative thinking into everyday',
        image: 'https://wenr.wes.org/wp-content/uploads/2019/09/iStock-1142918319_WENR_Ranking_740_430.jpg',
    },
    {
        title: 'Preparing Students for a Learning Globalized World',
        description:
            'Highlight the importance of global awareness in education, and how modern schools are incorporating programs',
        image: 'https://wenr.wes.org/wp-content/uploads/2019/09/iStock-1142918319_WENR_Ranking_740_430.jpg',
    },
];

export default function LatestUpdates() {
    return (
        <section className="py-12 p-6    container mx-auto">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-green-600 uppercase text-sm font-semibold">News & Insights</h3>
                <h2 className="text-3xl font-bold text-gray-800 my-2">Latest Updates</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto mt-8">
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </section>
    );
}