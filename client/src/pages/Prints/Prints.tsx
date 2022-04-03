import { useParams } from "react-router-dom";

export const Prints: React.FC = () => {
  let { id } = useParams();
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
};
