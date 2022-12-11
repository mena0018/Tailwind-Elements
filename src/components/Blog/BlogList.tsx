import BlogItem from "./BlogItem";
import Heading from "./Heading";
import LoadBtn from "./LoadBtn";
import { blogData } from "../../data/blog";
import { Blog } from "../../types/Blog";

const BlogList = () => {
  const listBlog = blogData.map((blog: Blog) => (
    <BlogItem
      key={blog.id}
      title={blog.title}
      date={blog.date}
      tags={blog.tags}
      background={blog.background}
    />
  ));

  return (
    <div className="pt-16 pb-20 px-4 max-w-7-xl mx-auto sm:px-6 lg:pb-28 lg:px-8">
      <Heading />
      <ul className="mt-10 max-w-lg mx-auto">{listBlog}</ul>
      <LoadBtn />
    </div>
  );
};

export default BlogList;
