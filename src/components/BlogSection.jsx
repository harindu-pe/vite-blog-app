import React, { useEffect, useState } from "react";
import BlogCard from "./cards/BlogCard";
import { getPosts } from "../sanity";
import { parseISO, format } from "date-fns";

export default function BlogSection() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <section>
      {posts && <div>{console.log(posts)}</div>}
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Blog Cards --> */}

          {posts &&
            posts.map((post, index) => {
              {
                if (!post.featured) {
                  return (
                    <BlogCard
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
