import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Card } from "../components/Card";

export const WorldPage = (props) => {
  const { allCountriesData } = props;

  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
};
