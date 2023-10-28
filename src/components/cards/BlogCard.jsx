import React from "react";
import { NavLink } from "react-router-dom";

export default function BlogCard({
  title,
  image,
  imageAlt,
  description,
  author,
  authorImage,
  authorImageAlt,
  date,
  blogLink,
}) {
  return (
    <NavLink
      to={`post/${blogLink}`}
      className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
    >
      <div className="group-hover:scale-105 transition duration-300">
        <img
          className="w-full object-cover rounded-xl h-52"
          src={image}
          alt={imageAlt}
        />
      </div>
      <div className="my-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
          {title}
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex items-center gap-x-3">
        <img
          className="w-8 h-8 rounded-full"
          src={authorImage}
          alt={authorImageAlt}
        />
        <div className="text-sm text-gray-600 dark:text-gray-200 flex  items-center gap-2 w-full">
          <h4>{author}</h4>
          <div>•</div>
          <span className="text-sm">{date}</span>
        </div>
      </div>
    </NavLink>
  );
}
