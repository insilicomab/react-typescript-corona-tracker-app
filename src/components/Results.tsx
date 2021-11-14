import { FC, memo } from "react";
import { Loading } from "../components/Loading";
import { CountryDataType } from "../type/countryData";

type Props = {
  loading: boolean;
  countryData: CountryDataType;
};

export const Results: FC<Props> = memo((props) => {
  const { loading, countryData } = props;

  return (
    <div className="results-container">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <p>
            日付: <span>{countryData.date.slice(0, 10)}</span>
          </p>
          <p>
            新規感染者: <span>{countryData.newConfirmed.toLocaleString()}</span>
          </p>
          <p>
            感染者総数:{" "}
            <span>{countryData.totalConfirmed.toLocaleString()}</span>
          </p>
          <p>
            新規回復者: <span>{countryData.newRecovered.toLocaleString()}</span>
          </p>
          <p>
            回復者総数:{" "}
            <span>{countryData.totalRecovered.toLocaleString()}</span>
          </p>
        </div>
      )}
    </div>
  );
});
