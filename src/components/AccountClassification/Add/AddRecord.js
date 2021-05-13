import React, { useContext } from "react";
import { myContext } from "../Reducer/reducer";
import {
  existCheck,
  fieldCheck,
  regex_list,
  errorMsg,
  abbr,
} from "../Functions/FieldCheck";
import { record_titles, record_titles_fields } from "../Functions/AddTitles";
import "./add.css";
export default function AddRecord(props) {
  const { state, dispatch } = useContext(myContext);

  const handleAdd = () => {
    if (existCheck(state.new_record, state.data)) {
      dispatch({ type: "ADD_EXIST_ERROR" });
    } else if (fieldCheck(state.new_record, regex_list).length === 0) {
      dispatch({
        type: "ADD_SUCCESS",
        new_record: state.new_record,
      });
      dispatch({ type: "SEARCH" });
    } else {
      dispatch({
        type: "ADD_MISS_ERROR",
        msg: errorMsg(fieldCheck(state.new_record, regex_list), abbr),
      });
    }
  };

  const handleCancel = () => {
    dispatch({ type: "ADD_RESET" });
    props.history.push("/view");
  };

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="15">Add</th>
        </tr>
        <tr>
          {state.add.statu === 0 && (
            <th colSpan="15" id="default_add_info" className="add_statu">
              Please Enter Account Classification Information
            </th>
          )}
          {state.add.statu === 1 && (
            <th colSpan="15" id="success_add_info" className="add_statu">
              Account Classification Was Added
            </th>
          )}
          {(state.add.statu === 2 || state.add.statu === 3) && (
            <th colSpan="15" id="failed_add_info" className="add_statu">
              Account Classification Was Not Added
            </th>
          )}
        </tr>
        <tr>
          <th className="add_title"></th>
          <th colSpan="8" className="add_title">
            Account Classification
          </th>
          <th className="add_title"></th>
          <th colSpan="2" className="add_title">
            Cumulative
          </th>
          <th className="add_title"></th>
          <th colSpan="2" className="add_title">
            Current Fiscal Year Net Activity
          </th>
        </tr>
        <tr>
          {record_titles.map((title) => (
            <th className="add_title">{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {record_titles_fields.map(([field, len, editable], index) =>
            editable ? (
              <td id={`add_td_${field}`}>
                {state.add.statu === 0 ? (
                  <input
                    type="text"
                    id={`add_input_${field}`}
                    className="add_td_mutable"
                    value={state.new_record[field]}
                    maxLength={len}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_NEWRECORD_FIELD",
                        field: field,
                        value: e.target.value,
                      })
                    }
                  ></input>
                ) : (
                  state.new_record[field]
                )}
              </td>
            ) : (
              <td id={`add_td_${field}`} className="add_td_immutable">
                {state.new_record[field]}
              </td>
            )
          )}
        </tr>
        {state.add.statu === 2 && (
          <>
            <tr>
              <th colSpan="15" className="error_msg_title">
                Error Message
              </th>
            </tr>
            <tr>
              <th colSpan="15" className="error_msg">
                {state.add.err_msg}
              </th>
            </tr>
          </>
        )}
        {state.add.statu === 3 && (
          <>
            <tr>
              <th colSpan="15" className="error_msg_title">
                Error Message
              </th>
            </tr>
            <tr>
              <th colSpan="15" className="error_msg">
                An Attempt Was Made To Add A Record Which Already Existed In
                DataBase
              </th>
            </tr>
          </>
        )}
      </tbody>
      <tfoot>
        <tr>
          {state.add.statu === 0 && (
            <th colSpan="15">
              <button onClick={handleAdd}>Add</button>
              <button onClick={() => dispatch({ type: "ADD_RESET" })}>
                Reset
              </button>
              <button onClick={handleCancel}>Cancel</button>
            </th>
          )}
          {state.add.statu === 1 && (
            <th colSpan="15">
              <button onClick={() => dispatch({ type: "ADD_RESET" })}>
                Add More
              </button>
              <button onClick={() => dispatch({ type: "ADD_SIM" })}>
                Add Similar
              </button>
              <button onClick={handleCancel}>Done</button>
            </th>
          )}
          {(state.add.statu === 2 || state.add.statu === 3) && (
            <th colSpan="15">
              <button onClick={() => dispatch({ type: "ADD_RESET" })}>
                Try Again
              </button>
              <button onClick={handleCancel}>Done</button>
            </th>
          )}
        </tr>
      </tfoot>
    </table>
  );
}
