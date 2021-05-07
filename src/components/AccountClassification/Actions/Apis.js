//Mock server APIs
// export const api_ac_list =
//   "https://28deab72-3387-4108-aa1b-1a53b9119bdd.mock.pstmn.io/sala/ac";
// export const api_ts_list =
//   "https://28deab72-3387-4108-aa1b-1a53b9119bdd.mock.pstmn.io/sala/ts";
// export const api_fy_list =
//   "https://28deab72-3387-4108-aa1b-1a53b9119bdd.mock.pstmn.io/sala/fy";
// export const api_data_list =
//   "https://28deab72-3387-4108-aa1b-1a53b9119bdd.mock.pstmn.io/sala/data";

export const api_ac_list =
  "http://localhost:8080/SalaMicroServices-0.0.1-SNAPSHOT/salaservices/getAppropriationCodes/FSA";
export const api_ts_list =
  "http://localhost:8080/SalaMicroServices-0.0.1-SNAPSHOT/salaservices/getTreasurySymbols/FSA";
export const api_fy_list = (filter) =>
  `http://localhost:8080/SalaMicroServices-0.0.1-SNAPSHOT/salaservices/getFiscalYearByAgencyAnd${
    filter.by === "treasurySymbol" ? "TresurySymbol" : ""
  }${filter.by === "appropriationCode" ? "AppCode" : ""}/FSA/${filter.value}`;
export const api_data_list =
  "http://localhost:8080/SalaMicroServices-0.0.1-SNAPSHOT/salaservices/getAccountclassifications";
