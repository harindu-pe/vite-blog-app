import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanity";
import { parseISO, format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { pTcomponents } from "../config/portableTextComponents";

export default function SinglePost() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getSinglePost(id).then((res) => {
      setPost(res);
    });
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-8 sm:p-16 flex flex-col lg:flex-row items-center">
        <div className="">
          <div className="w-full flex flex-col lg:justify-center lg:flex-row gap-5 pb-5 items-center">
            {/* <!-- Title --> */}
            <h1 className="font-bold text-xl">{post && post.title}</h1>
            {/* <!-- Avatar --> */}
            <div className="flex items-center">
              <div className="">
                <img
                  className="h-[2.875rem] w-[2.875rem] border-2 rounded-full"
                  src={post && post.author.image.asset.url}
                  alt={post && post.author.imageAlt}
                />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold ">{post && post.author.name}</h4>
                <p className="text-xs ">
                  {post && format(parseISO(post.publishedAt), "PPP")}
                </p>
              </div>
            </div>
          </div>

          <img
            className="rounded-md max-w-xl"
            src={post && post.mainImage.asset.url}
            alt={post && post.imageAlt}
          />
        </div>

        <div className="p-6 h-full max-w-xl pt-20 self-start">
          {post && <PortableText value={post.body} components={pTcomponents} />}
        </div>
      </div>
    </div>
  );
}

const getSinglePost = async (slug) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
    title,
    description,
    featured,
    slug,
    author->{name, image{
      asset->{
      _id,
      url
    }}, imageAlt},
    mainImage{
      asset->{
      _id,
      url
    },
  },
  categories,
  publishedAt,
  body
}`;

  const post = await client.fetch(query);

  return post;
};
