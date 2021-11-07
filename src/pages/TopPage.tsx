import { FC } from "react";

import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Selector } from "../components/Selector";
import { Results } from "../components/Results";
import { CountryDataType } from "../type/countryData";
import { CountriesJsonType } from "../types/coutryJson";

type Props = {
  countriesJson: CountriesJsonType;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  getCountryData: () => void;
  countryData: CountryDataType;
  loading: boolean;
};

export const TopPage: FC<Props> = (props) => {
  const { countriesJson, setCountry, getCountryData, countryData, loading } =
    props;

  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector
          countriesJson={countriesJson}
          setCountry={setCountry}
          getCountryData={getCountryData}
        />
        <Results countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};
