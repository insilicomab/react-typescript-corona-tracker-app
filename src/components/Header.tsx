import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">国ごとの感染状況</Link>
      <Link to="/world">世界の感染状況</Link>
    </div>
  );
};
