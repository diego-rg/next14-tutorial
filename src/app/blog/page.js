import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};



export default async function BlogPage() {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};