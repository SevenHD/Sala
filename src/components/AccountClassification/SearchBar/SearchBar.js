/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { myContext } from "../Reducer/reducer";
import { getData, getACList, getTSList, getFYList } from "../Actions/GetData";
import { createFilter } from "../Functions/Filter";
import { FilterData, ACSearchData, TSSearchData } from "./Data";
import "./searchBar.css";

export default function SearchBar(props) {
  const { state, dispatch } = useContext(myContext);
  const BtnStatu =
    state.filter.value === "" || state.filter.fiscal_year === "" ? true : false;

  /* Load second filter list depend on first filter dropdown(treasurySymbol or appropriationCod) changes */
  useEffect(() => {
    if (state.filter.by === "treasurySymbol") {
      getTSList(dispatch);
    } else if (state.filter.by === "appropriationCode") {
      getACList(dispatch);
    }
  }, [state.filter.by]);

  /* Load Fiscal Year list depend on second filter dropdown(treasurySymbol or appropriationCod) changes */
  useEffect(() => {
    if (state.filter.value !== "") {
      getFYList(state.filter, dispatch);
    }
  }, [state.filter.value]);

  /* Reload Data when search button clicked */
  const handleSearch = () => {
    const filter = createFilter(state.filter);
    getData(filter, dispatch);
    dispatch({ type: "SET_DATA", data: [] });
    props.history.push("/view");
  };

  return (
    <>
      <div className="filter_by_wrapper">
        {FilterData.map((filter) => (
          <label htmlFor={`${filter.value}_radio`} key={filter.key}>
            <input
              type="radio"
              id={`${filter.value}_radio`}
              className="filter"
              value={filter.value}
              checked={state.filter.by === filter.value}
              onChange={() => {
                dispatch({ type: "SET_FILTER_BY", by: filter.value });
                dispatch({ type: "SET_FILTER_FY", value: "" });
              }}
            />
            <span>{`By ${filter.label}`}</span>
          </label>
        ))}
      </div>
      {state.filter.by === "appropriationCode" && (
        <div className="filter_value_wrapper">
          {ACSearchData.map((item) => (
            <label key={item.key}>
              {`${item.label}:`}
              <select
                id={`${item.value}_select`}
                value={state.filter[item.value]}
                className="value_select"
                onChange={(e) =>
                  dispatch({
                    type: `SET_FILTER_${item.type}`,
                    value: e.target.value,
                  })
                }
              >
                <option value="">Please Select..</option>
                {state.filter[item.list].map((opt) => (
                  <option value={opt} key={`option_${opt}`}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button
            className="search_button"
            disabled={BtnStatu}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      )}
      {state.filter.by === "treasurySymbol" && (
        <div className="filter_value_wrapper">
          {TSSearchData.map((item) => (
            <label key={item.key}>
              {`${item.label}:`}
              <select
                id={`${item.value}_select`}
                value={state.filter[item.value]}
                className="value_select"
                onChange={(e) =>
                  dispatch({
                    type: `SET_FILTER_${item.type}`,
                    value: e.target.value,
                  })
                }
              >
                <option value="">Please Select..</option>
                {state.filter[item.list].map((opt) => (
                  <option value={opt} key={`option_${opt}`}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
          ))}

          <button
            className="search_button"
            disabled={BtnStatu}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      )}
    </>
  );
}
