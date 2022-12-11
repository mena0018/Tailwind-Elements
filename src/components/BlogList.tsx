import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <div className="pt-16 pb-20 px-4 max-w-7-xl mx-auto sm:px-6 lg:pb-28 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-5xl">
        Explore the Front-End World
      </h2>
      <p className="text-slate-500 text-center text-xl mt-3 sm:mt-4">
        Here are the latest articles
      </p>

      <ul className="mt-10 max-w-lg mx-auto">
        <BlogItem
          title="How to create a curtain menu ?"
          date={1}
          tags={["#javascript", "#css"]}
          background="bg-gradient-to-r from-indigo-700 to-purple-800"
        />
        <BlogItem
          title="How to use the .map method ?"
          date={1}
          tags={["#javascript"]}
          background="bg-gradient-to-r from-cyan-600 to-blue-600"
        />
        <BlogItem
          title="10 Flexbox tricks"
          date={1}
          tags={["#css"]}
          background="bg-gradient-to-r from-purple-600 to-indigo-700"
        />
        <BlogItem
          title="What a React props ?"
          date={1}
          tags={["#react"]}
          background="bg-gradient-to-r from-blue-600 to-cyan-500"
        />
        <BlogItem
          title="What is CSS Grid ?"
          date={1}
          tags={["#css"]}
          background="bg-blue-500"
        />
      </ul>
    </div>
  );
};

export default BlogList;
