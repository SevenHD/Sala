export const createFilter = (filter) => {
  return {
    appropriationCode: filter.by === "appropriationCode" ? filter.value : null,
    treasurySymbol: filter.by === "treasurySymbol" ? filter.value : null,
    agency: "FSA",
    fiscalYear: filter.fiscal_year === "" ? null : filter.fiscal_year,
  };
};
