export const regex_list = {
  treasurySymbol: /^.{15}$/,
  groupOfAllocations: /^.*$/,
  appropriationCode: /^.{3}$/,
  fiscalYear: /^[0-9]{10}$/,
  allotteeCode: /^.{1}$/,
  majorClassCode: /^.{2}$/,
  objectClassCode: /^.{2}$/,
  obligationExpendituresCode: /^.{3}$/,
  programPlanningBudgetingCode: /^.{3}$/,
};

export const abbr = {
  treasurySymbol: "*TS",
  groupOfAllocations: "GOA",
  appropriationCode: "*AC",
  fiscalYear: "*FY",
  allotteeCode: "*A",
  majorClassCode: "*MC",
  objectClassCode: "*OC",
  programPlanningBudgetingCode: "*PPB",
  obligationExpendituresCode: "*O&E",
};

export const existCheck = (new_record, data) => {
  for (const record of data) {
    if (
      record.treasurySymbol.toString() === new_record.treasurySymbol &&
      record.groupOfAllobjectClassCodeations.toString() ===
        new_record.groupOfAllobjectClassCodeations &&
      record.appropriationCode.toString() === new_record.appropriationCode &&
      record.fiscalYear.toString() === new_record.fiscalYear &&
      record.allotteeCode.toString() === new_record.allotteeCode &&
      record.majorClassCode.toString() === new_record.majorClassCode &&
      record.objectClassCode.toString() === new_record.objectClassCode &&
      record.programPlanningBudgetingCode.toString() ===
        new_record.programPlanningBudgetingCode &&
      record.obligationExpendituresCode.toString() ===
        new_record.obligationExpendituresCode
    ) {
      return true;
    }
  }
  return false;
};

export const fieldCheck = (new_record, regex_list) => {
  const fields = Object.keys(regex_list);
  let missed_fields = [];
  for (const field of fields) {
    if (!regex_list[field].test(new_record[field])) {
      missed_fields.push(field);
    }
  }
  return missed_fields;
};

export const errorMsg = (missed_fields, abbr) => {
  let msg = "";
  for (const field of missed_fields) {
    msg = msg + ` ${abbr[field]}`;
  }
  return `Please Enter Valid${msg}!`;
};
