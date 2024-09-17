import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

export default function BlogPage() {
  const posts = [
    {
      id: 1234,
      img: "/about.png",
      createdAt: "2024-03-02 15:05:55",
      title: "Post 1",
      body: "Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1"
    },
    {
      id: 1235,
      img: "/about.png",
      createdAt: "2024-03-02 15:05:55",
      title: "Post 2",
      body: "Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1"
    },
    {
      id: 1236,
      img: "/about.png",
      createdAt: "2024-03-02 15:05:55",
      title: "Post 3",
      body: "Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1"
    },
    {
      id: 1237,
      img: "/about.png",
      createdAt: "2024-03-02 15:05:55",
      title: "Post 4",
      body: "Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1 Lorem blablabla 1"
    }
  ];

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
