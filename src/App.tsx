import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { useCountryCoronaData } from "./hooks/useCountryCoronaData";
import countriesJson from "./countries.json";
import { TopPage } from "../src/pages/TopPage";
import { WorldPage } from "./pages/WorldPage";
import { CountryDataType } from "./type/countryData";
import "./App.css";

export default function App() {
  const { setCountry, getCountryData, countryData, loading } =
    useCountryCoronaData();

  const [allCountriesData, setAllCountriesData] = useState<CountryDataType>([
    {
      Country: "",
      NewConfirmed: 0,
      TotalConfirmed: 0,
    },
  ]);

  useEffect(() => {
    fetch("https://reactbook-corona-tracker-api.herokuapp.com/summary")
      .then((res) => res.json())
      .then((data) => setAllCountriesData(data.Countries))
      .catch((error) =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <TopPage
            countriesJson={countriesJson}
            setCountry={setCountry}
            getCountryData={getCountryData}
            countryData={countryData}
            loading={loading}
          />
        </Route>
        <Route exact path="/world">
          <WorldPage allCountriesData={allCountriesData} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
