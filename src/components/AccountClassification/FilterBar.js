import React, { useContext, useEffect } from "react";
import { myContext } from "./Reducer/reducer";
import { getData, getACList, getTSList, getFYList } from "./Actions/GetData";
import { createFilter } from "./Functions/Filter";

export default function FilterBar() {
  const { state, dispatch } = useContext(myContext);

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
  };

  return (
    <>
      <table id="filter_bar">
        <thead>
          <tr>
            <th>Account Classification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="15">
              By:
              <select
                id="select_by"
                value={state.filter.by}
                onChange={(e) => {
                  dispatch({ type: "SET_FILTER_BY", by: e.target.value });
                }}
              >
                <option value="default">Select...</option>
                <option value="appropriationCode">Appropriation Code</option>
                <option value="treasurySymbol">Treasury Symbol</option>
              </select>
              {state.filter.by === "appropriationCode" && (
                <>
                  Appropriation Code:
                  <select
                    id="ac_filter"
                    value={state.filter.value}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_FILTER_VALUE",
                        value: e.target.value,
                      })
                    }
                  >
                    <option value="">All</option>
                    {state.filter.list.map((ac) => (
                      <option value={ac}>{ac}</option>
                    ))}
                  </select>
                </>
              )}
              {state.filter.by === "treasurySymbol" && (
                <>
                  Treasury Symbol:
                  <select
                    id="ts_filter"
                    value={state.filter.value}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_FILTER_VALUE",
                        value: e.target.value,
                      })
                    }
                  >
                    <option value="">All</option>
                    {state.filter.list.map((ts) => (
                      <option value={ts}>{ts}</option>
                    ))}
                  </select>
                </>
              )}
              {state.filter.value !== "" && (
                <>
                  Fiscal Year:
                  <select
                    id="fy_filter"
                    value={state.filter.fiscal_year}
                    onChange={(e) =>
                      dispatch({ type: "SET_FILTER_FY", value: e.target.value })
                    }
                  >
                    <option value="">All</option>
                    {state.filter.fy_list.map((year) => (
                      <option value={year}>{year}</option>
                    ))}
                  </select>
                  <button onClick={handleSearch}>Search</button>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
