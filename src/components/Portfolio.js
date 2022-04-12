import React, { useState } from 'react';
import Category from './Category';
import PortfolioItem from './PortfolioItem';
import { portfolios } from '../Data/Data';
const allCategories = ['all', ...new Set(portfolios.map((item) => item.category))];

const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState(portfolios);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setPortfolioItems(portfolios);
            return;
        }
        const newItems = portfolios.filter((item) => item.category === category);
        setPortfolioItems(newItems);
    };
    return (
        <section className="py-20" id="portfolios">
                <h1 data-aos="fade-right" data-aos-duration="1000"  className="title">Latest Projects</h1>
                <p data-aos="fade-left" data-aos-duration="1000" className="text-sm text-gray text-center lg:w-1/3 md:w-1/2 w-5/6 m-auto my-8">In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.</p>

            <div className="container">
                <Category filterItems={filterItems} categories={categories} />
                <PortfolioItem portfolios={portfolioItems} />
            </div>
        </section>
    );
};

export default Portfolio;