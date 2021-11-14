import { FC, memo } from "react";
import { CountriesJsonType } from "../type/countryJson";

type Props = {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countriesJson: CountriesJsonType;
  getCountryData: () => void;
};

export const Selector: FC<Props> = memo((props) => {
  const { setCountry, countriesJson, getCountryData } = props;

  return (
    <div className="selector-container">
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Select A Country</option>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </div>
  );
});
