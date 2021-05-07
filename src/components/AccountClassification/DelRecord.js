import React, { useContext } from "react";
import { myContext } from "./Reducer/reducer";

export default function DelRecord(props) {
  const { state, dispatch } = useContext(myContext);

  return (
    <table>
      {/* <thead>
        <tr>
          <th colSpan="15">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {state.delete_statu === 0 ? (
            <td
              colSpan="15"
              style={{ fontWeight: "bold", backgroundColor: "yellow" }}
            >
              Are You Sure You Want To Delete The Following Account
              Classification?
            </td>
          ) : (
            <td
              colSpan="15"
              style={{ fontWeight: "bold", backgroundColor: "lightgreen" }}
            >
              Account Classification Was Deleted
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
          {state.record_titles_ids.map(([id, len]) => (
            <td>{state.selected[id]}</td>
          ))}
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="15">
            {state.delete_statu === 0 ? (
              <>
                <button
                  onClick={() => {
                    dispatch({ type: "MODEL_CHANGE", model: "def" });
                    props.history.push("/view");
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE", record: state.selected })
                  }
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    dispatch({ type: "RESET_DELETE" });
                    props.history.push("/view");
                  }}
                >
                  Delete More
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "RESET_DELETE" });
                    dispatch({ type: "MODEL_CHANGE", model: "def" });
                    props.history.push("/view");
                  }}
                >
                  Done
                </button>
              </>
            )}
          </td>
        </tr>
      </tfoot> */}
    </table>
  );
}
