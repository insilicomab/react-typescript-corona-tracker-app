import { Route, Routes, BrowserRouter } from "react-router-dom";

import { useCountryCoronaData } from "./hooks/useCountryCoronaData";
import { useAllCountriesCoronaData } from "./hooks/useAllCountriesCoronaData";
import countriesJson from "./countries.json";
import { TopPage } from "../src/pages/TopPage";
import { WorldPage } from "./pages/WorldPage";
import "./App.css";

export default function App() {
  const { setCountry, getCountryData, countryData, loading } =
    useCountryCoronaData();

  const { allCountriesData } = useAllCountriesCoronaData();

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
