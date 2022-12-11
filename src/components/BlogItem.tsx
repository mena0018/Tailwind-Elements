type BlogItemProps = {
  title: string;
  tags: string[];
  date: number;
  background: string;
};

const BlogItem = ({ title, tags, date, background }: BlogItemProps) => {
  const slug = title.replace(" ", "-");

  return (
    <li
      className={`${background} relative text-slate-200 mt-5 p-6 rounded shadow-md 
                transition-transform hover:-translate-y-1 will-change-transform`}
    >
      <a href={slug} className="absolute inset-0 w-full h-full"></a>
      <h3 className="flex justify-between items-center">
        <span className="font-extrabold text-xl">{title}</span>
        <span className="text-sm pl-4">{date}d ago</span>
      </h3>
      <p className="text-md">{tags.map((tag) => `${tag} `)}</p>
    </li>
  );
};

export default BlogItem;
