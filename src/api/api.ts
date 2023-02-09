import axios from 'axios';

type Post = {
  id: number;
  title: string;
  body: string;
};

export const getPostById = async (id: number): Promise<Post> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};
