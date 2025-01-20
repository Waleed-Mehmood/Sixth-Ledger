import React from "react";
import blogimag1 from "../assets/austin-distel-744oGeqpxPQ-unsplash.jpg";
import blogimag2 from "../assets/firmbee-com-jrh5lAq-mIs-unsplash.jpg";
import blogimag3 from "../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "What services does your business provide?",
      description:
        "Providing technical support, network setup, software installation.",
      image: blogimag1,
      author: "admin",
      comments: "3 comments",
    },
    {
      id: 2,
      title: "What services does your business provide?",
      description:
        "Providing technical support, network setup, software installation.",
      image: blogimag2,
      author: "admin",
      comments: "3 comments",
    },
    {
      id: 3,
      title: "What services does your business provide?",
      description:
        "Providing technical support, network setup, software installation.",
      image: blogimag3,
      author: "admin",
      comments: "3 comments",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="text-center mb-12 py-8">
        <p className="text-orange-500 font-semibold">Find Tha Blogs</p>
        <h2 className="text-2xl md:text-4xl font-bold">
          Find Out Latest News and Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <p className="mr-4">By {blog.author}</p>
                <p>{blog.comments}</p>
              </div>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <button className="text-orange-500 font-semibold flex items-center">
                Read More <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
