import { useEffect, useState } from "react";
import QuestionMark from "./QuestionMark";

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Background: React.FC = () => {
  const [questionMarks, setQuestionMarks] = useState<number[]>([]);

  useEffect(() => {
    const marks = Array.from({ length: 20 }, (_, i) => i);
    setQuestionMarks(marks);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {questionMarks.map((index) => (
        <QuestionMark
          key={index}
          style={{
            top: `${random(0, 100)}%`,
            left: `${random(0, 100)}%`,
            transform: `rotate(${random(0, 360)}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
