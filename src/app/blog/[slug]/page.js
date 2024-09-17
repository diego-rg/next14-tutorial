import Image from "next/image";
import styles from "./singlePost.module.css";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

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

  const post = posts.filter((p) => p.id === slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

export default function SinglePostPage({ params }) {
  const { slug } = params;

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

  const post = posts.filter((p) => p.id === slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};