import { createContext, useReducer } from "react";
import { testdata2 } from "../../../testdata";

const initialState = {
  model: "def",
  data: [],
  filter: {
    by: "default",
    value: "",
    list: [],
    fiscal_year: "",
    fy_list: [],
  },

  selected: {},
  new_record: {
    treasurySymbol: "",
    groupOfAllocations: "",
    appropriationCode: "",
    fiscalYear: "",
    allotteeCode: "",
    majorClassCode: "",
    objectClassCode: "",
    obligationExpendituresCode: "",
    programPlanningBudgetingCode: "",
    loans: "0",
    curOblAmount: "0.00",
    curVchrAmount: "0.00",
    curAlotAmount: "0.00",
    prOblAmount: "0.00",
    prVchrAmount: "0.00",
  },
  // 0:default, 1:success, 2:miss field, 3:record existed
  add: { statu: 0, err_msg: "" },
  delete: { statu: 0, err_msg: "" },
  modify: { statu: 0, err_msg: "" },
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_SIM":
      return { ...state, add: initialState.add };
    case "ADD_SUCCESS":
      return {
        ...state,
        data: [...state.data, action.new_record],
        add: { ...state.add, statu: 1 },
      };
    case "ADD_MISS_ERROR":
      return { ...state, add: { statu: 2, err_msg: action.msg } };
    case "ADD_EXIST_ERROR":
      return { ...state, add_statu: 3 };
    case "ADD_RESET":
      return {
        ...state,
        new_record: initialState.new_record,
        add: initialState.add,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.data,
      };
    case "SET_NEWRECORD_FIELD":
      return {
        ...state,
        new_record: { ...state.new_record, [action.field]: action.value },
      };
    case "SET_FILTER_BY":
      return {
        ...state,
        filter: { ...state.filter, by: action.by, value: "" },
      };
    case "SET_FILTER_VALUE":
      return { ...state, filter: { ...state.filter, value: action.value } };
    case "SET_FILTER_LIST":
      return { ...state, filter: { ...state.filter, list: action.list } };
    case "SET_FILTER_FY":
      return {
        ...state,
        filter: { ...state.filter, fiscal_year: action.value },
      };
    case "SET_FILTER_FY_LIST":
      return { ...state, filter: { ...state.filter, fy_list: action.list } };
    // case "MODIFY_MORE":
    //   return { ...state, modify_statu: 0 };
    // case "MODIFY":
    //   return {
    //     ...state,
    //     records: state.records.map((record) =>
    //       record.id === action.body.id ? action.body : record
    //     ),
    //     modify_statu: 1,
    //   };
    // case "MODIFY_ERROR":
    //   return { ...state, modify_statu: 2 };
    // case "MODIFY_RESET":
    //   return {
    //     ...state,
    //     selected: state.records.filter(
    //       (record) => record.id === state.selected.id
    //     )[0],
    //     modify_statu: 0,
    //   };
    // case "DELETE":
    //   return {
    //     ...state,
    //     delete_statu: 1,
    //     records: state.records.filter((record) => record !== action.record),
    //   };
    // case "RESET_DELETE":
    //   return { ...state, delete_statu: 0 };

    // case "MODEL_CHANGE":
    //   return {
    //     ...state,
    //     model: action.model,
    //     validation: initialState.validation,
    //   };
    // case "SELECT_REC":
    //   return {
    //     ...state,
    //     selected: action.record,
    //     validation: {
    //       ts: true,
    //       ac: true,
    //       fy: true,
    //       a: true,
    //       mc: true,
    //       oc: true,
    //       ppb: true,
    //       oande: true,
    //     },
    //   };

    // case "UPDATE_TS":
    //   return {
    //     ...state,
    //     selected: { ...state.selected, ts: action.value },
    //     validation: { ...state.validation, ts: action.valid },
    //   };
    // case "UPDATE_GOA":
    //   return { ...state, selected: { ...state.selected, goa: action.value } };
    // case "UPDATE_AC":
    //   return {
    //     ...state,
    //     selected: { ...state.selected, ac: action.value },
    //     validation: { ...state.validation, ac: action.valid },
    //   };
    // case "UPDATE_FY":
    //   return {
    //     ...state,
    //     selected: { ...state.selected, fy: action.value },
    //     validation: { ...state.validation, fy: action.valid },
    //   };
    // case "UPDATE_A":
    //   return {
    //     ...state,
    //     selected: { ...state.selected, a: action.value },
    //     validation: { ...state.validation, a: action.valid },
    //   };
    // case "UPDATE_MC":
    //   return {
    //     ...state,
    //     selected: { ...state.selected, mc: action.value },
    //     validation: { ...state.validation, mc: action.valid },
    //   };
    // case "UPDATE_OC":
    //   return {
    //     ...state,
    //     selected: { ...state.selected, oc: action.value },
    //     validation: { ...state.validation, oc: action.valid },
    //   };
    // case "UPDATE_PPB":
    //   return {
    //     ...state,
    //     selected: { ...state.selected, ppb: action.value },
    //     validation: { ...state.validation, ppb: action.valid },
    //   };
    // case "UPDATE_OANDE":
    //   return {
    //     ...state,
    //     selected: { ...state.selected, oande: action.value },
    //     validation: { ...state.validation, oande: action.valid },
    //   };
    default:
      throw new Error();
  }
}
const myContext = createContext();

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};
export { reducer, myContext, ContextProvider };
