export const postsData = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  if (!res.ok) {
    return null; // or throw new Error("Post not found")
  }
  const data = await res.json();
  return data;
};

const PostDetails = async ({ params }) => {
  const { id } = params;
  const post = await postsData(id);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl mb-4 font-bold">Post Details</h1>
      {post ? (
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="mb-4">{post.body}</p>
          <p className="text-sm text-gray-500">Post ID: {post.id}</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto p-4">
          <p className="text-red-500">Post not found.</p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
