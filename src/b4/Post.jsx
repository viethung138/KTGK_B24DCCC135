import { useState } from "react";

export default function Post({ text, initLike = 0, initDislike = 0 }) {
  const [like, setLike] = useState(initLike);
  const [dislike, setDislike] = useState(initDislike);

  return (
    <article className="b4-post">
      <p className="b4-text">{text}</p>

      <div className="b4-actions">
        <button
          type="button"
          className="b4-btn"
          onClick={() => setLike((n) => n + 1)}
        >
          <span role="img" aria-label="Like">👍</span>
          <span className="b4-count">{like}</span>
        </button>

        <button
          type="button"
          className="b4-btn"
          onClick={() => setDislike((n) => n + 1)}
        >
          <span role="img" aria-label="Dislike">👎</span>
          <span className="b4-count">{dislike}</span>
        </button>
      </div>
    </article>
  );
}
