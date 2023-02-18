import { FaQuestion } from "react-icons/fa";

type QuestionMarkProps = {
  style?: React.CSSProperties;
};

const QuestionMark: React.FC<QuestionMarkProps> = ({ style }) => {
  return <FaQuestion style={style} className="text-gray-500" />;
};

export default QuestionMark;
