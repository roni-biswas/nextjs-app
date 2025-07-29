export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-4 gap-4 grid-flow-row ">
      {posts.map((post) => {
        return (
          <div key={post.id} className="p-4 border rounded-lg shadow-md h-78">
            <p>{post.id}</p>
            <p className="text-xl font-bold">{post.title}</p>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
