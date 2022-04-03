import React from "react";
import { Link } from "react-router-dom";

export const Main: React.FC = () => {
  return (
    <div>
      <h3>Welcome</h3>
      <Link to="/prints/1">Prints</Link>
    </div>
  );
};
