import "./b4.css";
import Post from "./Post";

export default function Feed() {
  const posts = [
    "Học ReactJS có khó không?",
    "Props và State là gì?",
    "Lập trình web có vui không?",
  ];

  return (
    <section className="section">
      <h2>Bài 4: Like/Dislike Post</h2>

      <div className="b4-feed">
        {posts.map((t, i) => (
          <Post key={i} text={t} />
        ))}
      </div>
    </section>
  );
}
