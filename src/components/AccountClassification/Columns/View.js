export const VIEW_COLUMNS = [
  {
    Header: "*TS",
    // Footer: "*TS",
    accessor: "treasurySymbol",
  },
  {
    Header: "Account Classification",
    columns: [
      {
        Header: "GOA",
        // Footer: "GOA",
        accessor: "groupOfAllocations",
      },
      {
        Header: "*AC",
        // Footer: "*AC",
        accessor: "appropriationCode",
      },
      {
        Header: "*FY",
        // Footer: "*FY",
        accessor: "fiscalYear",
      },
      {
        Header: "*A",
        // Footer: "*A",
        accessor: "allotteeCode",
      },
      {
        Header: "*MC",
        // Footer: "*MC",
        accessor: "majorClassCode",
      },
      {
        Header: "*OC",
        // Footer: "*OC",
        accessor: "objectClassCode",
      },
      {
        Header: "*PPB",
        // Footer: "*PPB",
        accessor: "programPlanningBudgetingCode",
      },
      {
        Header: "*O&E",
        // Footer: "*O&E",
        accessor: "obligationExpendituresCode",
      },
    ],
  },
  {
    Header: "Loans",
    // Footer: "Loans",
    accessor: "loans",
  },
  {
    Header: "Cumulative",
    columns: [
      {
        Header: "Vouchers",
        // Footer: "Vouchers",
        accessor: "curVchrAmount",
      },
      {
        Header: "Obligations",
        // Footer: "Obligations",
        accessor: "curOblAmount",
      },
    ],
  },
  {
    Header: "Allotments",
    // Footer: "Allotments",
    accessor: "curAlotAmount",
  },
  {
    Header: "Current Fiscal Year Net Activity",
    columns: [
      {
        Header: "Vouchers",
        // Footer: "Vouchers",
        accessor: "prVchrAmount",
      },
      {
        Header: "Obligations",
        // Footer: "Obligations",
        accessor: "prOblAmount",
      },
    ],
  },
];
