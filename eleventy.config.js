import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Tag-Collection
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet].sort();
  });

  // date 
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // array limit
  eleventyConfig.addFilter("limit", (array, n) => {
    return array.slice(0, n);
  });

  // Prev/Next Navigation für Posts
  eleventyConfig.addCollection("posts", function (collectionApi) {
    const posts = collectionApi.getFilteredByTag("post")
    .filter(post => !post.data.draft)
    .reverse();
    posts.forEach((post, index) => {
      post.data.previousPost = posts[index + 1] || null;
      post.data.nextPost = posts[index - 1] || null;
    });
    return posts;
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data",
      layouts: "_includes/layouts"
    },
    markdownTemplateEngine: "njk"
  };

};