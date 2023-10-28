import React, { useEffect, useState } from "react";
import FeaturedBlogCard from "./cards/FeaturedBlogCard";
import { getPosts } from "../sanity";
import { parseISO, format } from "date-fns";

export default function FeaturedSection() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  const data = [
    {
      title: "This is a sample featured title",
      description: "Facebook launched the Watch platform in August",
      image:
        "https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80",
      imageAlt: "Image Description",
      author: "Jane Doe",
      authorImage:
        "https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      authorImageAlt: "Image Description",
      date: "October 25, 2022",
      blogLink: "/",
    },
  ];

  return (
    <section>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-2 gap-6">
          {posts &&
            posts.map((post, index) => {
              {
                if (post.featured) {
                  return (
                    <FeaturedBlogCard
                      key={index}
                      title={post.title}
                      image={post.mainImage.asset.url}
                      imageAlt={post.imageAlt}
                      description={post.description}
                      author={post.author.name}
                      authorImage={post.author.image.asset.url}
                      authorImageAlt={post.author.imageAlt}
                      date={format(parseISO(post.publishedAt), "PPP")}
                      blogLink={post.slug.current}
                    />
                  );
                }
              }
            })}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </section>
  );
}
