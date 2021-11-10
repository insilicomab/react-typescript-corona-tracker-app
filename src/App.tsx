import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useCountryCoronaData } from "./hooks/useCountryCoronaData";
import countriesJson from "./countries.json";
import { TopPage } from "../src/pages/TopPage";
import { WorldPage } from "./pages/WorldPage";
import { CountriesEntity } from "./type/api/allCountriesData";
import { AllCountriesDataType } from "./type/api/allCountriesData";
import "./App.css";

export default function App() {
  const { setCountry, getCountryData, countryData, loading } =
    useCountryCoronaData();

  const [allCountriesData, setAllCountriesData] = useState<
    Array<CountriesEntity>
  >([]);

  useEffect(() => {
    axios
      .get<AllCountriesDataType>(
        "https://reactbook-corona-tracker-api.herokuapp.com/summary"
      )
      .then((res) => setAllCountriesData(res.data.Countries))
      .catch((error) =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TopPage
              countriesJson={countriesJson}
              setCountry={setCountry}
              getCountryData={getCountryData}
              countryData={countryData}
              loading={loading}
            />
          }
        />
        <Route
          path="/world"
          element={<WorldPage allCountriesData={allCountriesData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
