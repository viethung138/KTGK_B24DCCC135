import React from "react";

export default function Question({ q, selectedIdx, onChoose }) {
  const locked = selectedIdx !== null && selectedIdx !== undefined;

  return (
    <div className="b5-question">
      <p className="b5-qtext">{q.text}</p>

      <div className="b5-answers">
        {q.options.map((opt, idx) => {
          const isSelected = selectedIdx === idx;
          // Nếu đã chọn: tô màu xanh nếu đúng, đỏ nếu sai
          const stateClass =
            locked && isSelected
              ? opt.correct
                ? "ok"
                : "bad"
              : "";

          return (
            <button
              key={idx}
              type="button"
              className={`b5-btn ${stateClass}`}
              onClick={() => !locked && onChoose(idx)}
              disabled={locked}
              title={
                locked && isSelected
                  ? opt.correct
                    ? "Đúng"
                    : "Sai"
                  : ""
              }
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
