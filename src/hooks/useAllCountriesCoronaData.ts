import { useState, useEffect } from "react";
import axios from "axios";

import { CountriesEntity } from "../type/api/allCountriesData";
import { AllCountriesDataType } from "../type/api/allCountriesData";

export const useAllCountriesCoronaData = () => {
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

  return { allCountriesData };
};
