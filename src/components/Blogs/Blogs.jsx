import React from 'react';
import blog1 from "../../assets/blog-1.png"; // Example image path
import blog2 from "../../assets/blog-2.png"; // Example image path

const Blogs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      

      {/* Blogs Section */}
      <div className="py-12">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">Stay Updated with our <span className="text-orange-500">Latest Articles</span></h2>
        <p className="text-center text-lg text-gray-700 mb-12">
          Explore our most recent articles and blog posts to stay informed about the latest trends, strategies, and insights in digital marketing. Our expert team shares valuable knowledge to help you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog1} alt="Blog 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500">June 7, 2024</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovations & Strategies for Engaging Audiences in 2024</h3>
              <p className="text-gray-600 mb-4">Digital marketing encompasses a broad spectrum of strategies aimed...</p>
              <a href="#" className="text-orange-500 font-semibold">Read More →</a>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog2} alt="Blog 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500">June 7, 2024</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Opportunities and Challenges for Brands in Virtual Environments</h3>
              <p className="text-gray-600 mb-4">Digital marketing encompasses a broad spectrum of strategies aimed...</p>
              <a href="#" className="text-orange-500 font-semibold">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
