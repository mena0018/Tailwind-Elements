import { Blog } from "../../types/Blog";

const BlogItem = ({ title, tags, date, background }: Blog) => {
  const slug = title.toLowerCase().replace("?", "").replace(/\W/g, "-");

  return (
    <li
      className={`${background} relative text-slate-100 mt-5 p-6 rounded shadow-md 
                transition-transform hover:-translate-y-1 will-change-transform`}
    >
      <a
        href={`#${slug}`}
        className="absolute inset-0 w-full h-full"
        aria-label="Read more about the article"
      ></a>

      <h3 className="flex justify-between items-center">
        <span className="font-extrabold text-xl">{title}</span>
        <span className="text-sm pl-4">{date}d ago</span>
      </h3>

      {tags.map((tag, index) => (
        <a href={tag} className="relative z-10 mr-3" key={index}>
          {tag}
        </a>
      ))}
    </li>
  );
};

export default BlogItem;
