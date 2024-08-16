import React from 'react';
import '../App.css';
import { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8 } from '../assets/index';

const BlogComponent = () => {
  const blogs = [
    {
      imageSrc: blog1,
      title: 'Income Tax Slabs 2024-2025',
      description: 'The government of Pakistan has finalized tax slabs for salaried individuals for the fiscal...',
      link: '/blog/income-tax-slabs',
    },
    {
      imageSrc: blog2,
      title: 'IMF Proposes 45% Tax Rate on ...',
      description: 'As Pakistan struggles with its economic challenges, the International Monetary Fund...',
      link: '/blog/imf-tax-rate',
    },
    {
      imageSrc: blog3,
      title: 'Budget 2024-25 and Its Impact...',
      description: 'The Finance Bill 2024-2025, presented in the National Assembly on June 12, 2024, was...',
      link: '/blog/budget-2024',
    },
    {
      imageSrc: blog4,
      title: 'Key Highlights from Federal...',
      description: 'The much-anticipated annual federal budget for Pakistan fiscal year 2024-2025 was...',
      link: '/blog/federal-budget-highlights',
    },
    {
      imageSrc: blog5,
      title: 'Business Licenses and permits...',
      description: 'The Pakistani government has introduced new regulations aimed at streamlining e...',
      link: '/blog/e-commerce-regulations',
    },
    {
      imageSrc: blog6,
      title: 'Tax season is coming, Are You...',
      description: 'Recent fluctuations in the Pakistani Rupee have had significant impacts on...',
      link: '/blog/currency-fluctuations',
    },
    {
      imageSrc: blog7,
      title: 'How to maintain your Tradem...',
      description: 'Explore the latest government initiatives designed to support and grow small...',
      link: '/blog/small-business-initiatives',
    },
    {
      imageSrc: blog8,
      title: 'Some Key Factors to consider...',
      description: 'Recent advancements and developments in the technology sector in Pakistan...',
      link: '/blog/technology-sector-developments',
    },
  ];

  return (
    <div className="blog-section">
      <h2 className="blog-section-title">Recent Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card cursor-pointer">
            <img src={blog.imageSrc} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
