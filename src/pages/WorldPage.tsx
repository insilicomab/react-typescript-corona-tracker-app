import { FC, memo } from "react";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { CardType } from "../type/card";

export const WorldPage: FC<CardType> = memo(({ allCountriesData }) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
});
