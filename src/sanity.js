// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "xhm4kdkv",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch(`*[_type == "post"]{
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
}`);
  return posts;
}
