import "./App.css";
import TodoApp from "./b1/TodoApp";
import ChangeColor from "./b2/ChangeColor";
import Shop from "./b3/Shop";
import Feed from "./b4/Feed";
import QuizApp from "./b5/QuizApp";

export default function App() {
  return (
    <main className="container">
      <TodoApp />
      <ChangeColor />
      <Shop />
      <Feed />
      <QuizApp />
    </main>
  );
}
