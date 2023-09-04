import Link from "next/link";

function PostsList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <h2>
            {post.id} {post.title}
          </h2>
        </Link>
      ))}
    </>
  );
}

export default PostsList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 5),
    },
  };
}
