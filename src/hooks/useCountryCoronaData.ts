import { useState } from "react";
import axios from "axios";

import { CountryDataType } from "../type/countryData";
import { Covid19ApiType } from "../type/api/covid19Api";

export const useCountryCoronaData = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [country, setCountry] = useState<string>("");

  const [countryData, setCountryData] = useState<CountryDataType>({
    date: "",
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0,
  });

  const getCountryData = () => {
    setLoading(true);
    axios
      .get<Array<Covid19ApiType>>(
        `https://api.covid19api.com/country/${country}`
      )
      .then((res) => {
        setCountryData({
          date: res.data[res.data.length - 1].Date,
          newConfirmed:
            res.data[res.data.length - 1].Confirmed -
            res.data[res.data.length - 2].Confirmed,
          totalConfirmed: res.data[res.data.length - 1].Confirmed,
          newRecovered:
            res.data[res.data.length - 1].Recovered -
            res.data[res.data.length - 2].Recovered,
          totalRecovered: res.data[res.data.length - 1].Recovered,
        });
        setLoading(false);
      })
      .catch((error) =>
        alert(
          "エラーが発生しました。ページをリロードして、もう一度トライしてください。"
        )
      );
  };

  return { setCountry, getCountryData, countryData, loading };
};
