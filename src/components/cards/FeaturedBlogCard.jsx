import React from "react";
import { NavLink } from "react-router-dom";

export default function FeaturedBlogCard({
  title,
  description,
  image,
  imageAlt,
  author,
  authorImage,
  authorImageAlt,
  date,
  blogLink,
}) {
  return (
    <NavLink
      className="group relative block hover:scale-105 transition duration-300"
      to={`post/${blogLink}`}
    >
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          src={image}
          alt={imageAlt}
        />
      </div>

      <div className="absolute top-0 inset-x-0 z-10">
        <div className="p-4 flex flex-col h-full sm:p-6">
          {/* <!-- Avatar --> */}
          <div className="flex items-center">
            <div className="">
              <img
                className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                src={authorImage}
                alt={authorImageAlt}
              />
            </div>
            <div className="ml-2.5 sm:ml-4">
              <h4 className="font-semibold text-white">{author}</h4>
              <p className="text-xs text-white/[.8]">{date}</p>
            </div>
          </div>
          {/* <!-- End Avatar --> */}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            {title}
          </h3>
          <p className="mt-2 text-white/[.8]">{description}</p>
        </div>
      </div>
    </NavLink>
  );
}
