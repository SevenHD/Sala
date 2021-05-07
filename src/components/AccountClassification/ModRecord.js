import React, { useContext } from "react";
import { myContext } from "./Reducer/reducer";

export default function ModRecord(props) {
  const { state, dispatch } = useContext(myContext);
  // const handleModify = () => {
  //   const valid = Array.from(new Set(Object.values(state.validation)));
  //   if (valid.length === 1 && valid[0] === true) {
  //     dispatch({ type: "MODIFY", body: state.selected });
  //   } else {
  //     dispatch({ type: "MODIFY_ERROR" });
  //   }
  // };
  return (
    <table>
      {/* <thead>
        <tr>
          <th colSpan="15">Modify</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ fontWeight: "bold" }}>
          {state.modify_statu === 0 && (
            <td colSpan="15">Modify Account Classification Information</td>
          )}
          {state.modify_statu === 1 && (
            <td colSpan="15" className="success_add_info">
              Account Classification Was Modified
            </td>
          )}
          {state.modify_statu === 2 && (
            <td colSpan="15" className="failed_add_info">
              Account Classification Was Not Modified
            </td>
          )}
        </tr>
        <tr>
          <td className="add_title"></td>
          <td colSpan="8" className="add_title">
            Account Classification
          </td>
          <td className="add_title"></td>
          <td colSpan="2" className="add_title">
            Cumulative
          </td>
          <td className="add_title"></td>
          <td colSpan="2" className="add_title">
            Current Fiscal Year Net Activity
          </td>
        </tr>
        <tr>
          {state.record_titles.map((title) => (
            <td style={{ width: "5%" }} className="add_title">
              {title}
            </td>
          ))}
        </tr>
        <tr>
          {state.record_titles_ids.map(([id, len, reg], index) =>
            index < 9 ? (
              <td id={`modify_td_${id}`}>
                {state.modify_statu === 0 ? (
                  <input
                    id={`modify_input_${id}`}
                    value={state.selected[id]}
                    maxLength={len}
                    onChange={(e) =>
                      dispatch({
                        type: `UPDATE_${id.toUpperCase()}`,
                        value: e.target.value,
                        valid: reg.test(e.target.value),
                      })
                    }
                  ></input>
                ) : (
                  state.selected[id]
                )}
              </td>
            ) : (
              <td id={`modify_td_${id}`} style={{ backgroundColor: "coral" }}>
                0.0
              </td>
            )
          )}
        </tr>
        {state.modify_statu === 2 && (
          <>
            <tr>
              <th colSpan="15" className="error_msg_title">
                Error Message
              </th>
            </tr>
            <tr>
              <th colSpan="15" className="error_msg">
                {`Please Enter Valid ${state.validation.ts ? "" : "*TS "}${
                  state.validation.ac ? "" : "*AC "
                }${state.validation.fy ? "" : "*FY "}${
                  state.validation.a ? "" : "*A "
                }${state.validation.mc ? "" : "*MC "}${
                  state.validation.oc ? "" : "*OC "
                }${state.validation.ppb ? "" : "*PPB "}${
                  state.validation.oande ? "" : "*O&E "
                }`}
              </th>
            </tr>
          </>
        )}
      </tbody>
      <tfoot>
        <tr>
          {state.modify_statu === 0 && (
            <th colSpan="15">
              <button onClick={handleModify}>Modify</button>
              <button onClick={() => dispatch({ type: "MODIFY_RESET" })}>
                Reset
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "MODEL_CHANGE", model: "def" });
                  props.history.push("/view");
                }}
              >
                Cancel
              </button>
            </th>
          )}
          {state.modify_statu === 1 && (
            <th colSpan="15">
              <button
                onClick={() => {
                  dispatch({ type: "MODIFY_MORE" });
                  props.history.push("/view");
                }}
              >
                Modify More
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "MODEL_CHANGE", model: "def" });
                  dispatch({ type: "MODIFY_MORE" });
                  props.history.push("/view");
                }}
              >
                Done
              </button>
            </th>
          )}
          {state.modify_statu === 2 && (
            <th colSpan="15">
              <button onClick={() => dispatch({ type: "MODIFY_RESET" })}>
                Try Again
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "MODEL_CHANGE", model: "def" });
                  dispatch({ type: "MODIFY_MORE" });
                  props.history.push("/view");
                }}
              >
                Done
              </button>
            </th>
          )}
        </tr>
      </tfoot> */}
    </table>
  );
}
