export type Blog = {
  id: number;
  title: string;
  tags: string[];
  date: number;
  background: string;
};

export type BlogProps = Omit<Blog, "id">;
