import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import image1 from '../../../assets/squaireblogimg1.jpg';
import image2 from '../../../assets/squaireblogimg2.jpg';

const articles = [
  {
    type: 'News',
    date: '30 March 2024',
    title: 'Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024',
    image: image1,
  },
  {
    type: 'Blog',
    date: '30 March 2024',
    title: 'How To Avoid The Top Six Most Common Job Interview Mistakes',
    image: image2, 
  },
];

function NewsInfoBlock() {
  return (
    <div className="py-20 px-6 md:px-16 lg:px-20 bg-white">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">News and Blog</h2>
        <a href="#" className="text-teal-600 font-semibold underline underline-offset-4 hover:text-teal-700">
          View all
        </a>
      </div>

      <p className="text-gray-600 max-w-xl mb-10">
        Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor
      </p>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {articles.map((article, index) => (
          <div key={index}>
            {/* Image with badge */}
            <div className="relative rounded-2xl overflow-hidden h-100 shadow-md">
              <img src={article.image} alt="blog" className="w-full object-cover" />
              <span className="absolute top-4 left-4 bg-teal-600 text-white text-sm px-3 py-1 rounded-full">
                {article.type}
              </span>
            </div>

            {/* Content */}
            <p className="text-gray-500 text-sm mt-4">{article.date}</p>
            <h3 className="text-lg font-bold mt-2 leading-snug">{article.title}</h3>
            <a
              href="#"
              className="mt-3 inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
            >
              Read more <FiArrowRight className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsInfoBlock;
