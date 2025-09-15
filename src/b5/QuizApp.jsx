import React, { useState } from "react";
import "./b5.css";
import Question from "./Question";

const QUESTIONS = [
  {
    id: 1,
    text: "ReactJS dùng để làm gì?",
    options: [
      { label: "Mobile App", correct: false },
      { label: "Web UI", correct: true },
      { label: "Hệ điều hành", correct: false },
      { label: "Cơ sở dữ liệu", correct: false },
    ],
  },
  {
    id: 2,
    text: "State trong React là gì?",
    options: [
      {
        label: "Dữ liệu thay đổi theo thời gian trong component",
        correct: true,
      },
      { label: "Kiểu dữ liệu tĩnh", correct: false },
      { label: "Công cụ quản lý route", correct: false },
      { label: "Thư viện CSS", correct: false },
    ],
  },
  {
    id: 3,
    text: "Props là gì?",
    options: [
      { label: "Tham số truyền từ cha xuống con", correct: true },
      { label: "Biến cục bộ trong hàm", correct: false },
      { label: "Một Hook của React", correct: false },
      { label: "Trình duyệt web", correct: false },
    ],
  },
];

export default function QuizApp() {
  // Lưu đáp án đã chọn: { [qid]: index }
  const [answers, setAnswers] = useState({});

  const handleChoose = (qid, idx) => {
    setAnswers((prev) => (prev[qid] !== undefined ? prev : { ...prev, [qid]: idx }));
  };

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const score = allAnswered
    ? QUESTIONS.reduce((sum, q) => {
        const chosen = answers[q.id];
        return sum + (q.options[chosen]?.correct ? 1 : 0);
      }, 0)
    : 0;

  const reset = () => setAnswers({});

  return (
    <section className="section">
      <h2>Bài 5: Quiz App</h2>

      <div className="b5-quiz">
        {QUESTIONS.map((q) => (
          <div key={q.id} className="b5-card">
            <Question
              q={q}
              selectedIdx={answers[q.id]}
              onChoose={(idx) => handleChoose(q.id, idx)}
            />
          </div>
        ))}
      </div>

      <div className="b5-footer">
        {allAnswered ? (
          <>
            <span>
              Kết quả: <strong>{score}/{QUESTIONS.length}</strong>
            </span>
            <button className="b5-btn" onClick={reset}>Làm lại</button>
          </>
        ) : (
          <span>Đã trả lời: {answeredCount}/{QUESTIONS.length}</span>
        )}
      </div>
    </section>
  );
}
