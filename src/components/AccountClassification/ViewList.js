import React, { useContext, useMemo, useEffect } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { FaSort, FaCaretUp, FaCaretDown } from "react-icons/fa";
import { myContext } from "./Reducer/reducer";
import { VIEW_COLUMNS } from "./Columns/View";
import { getData } from "./Actions/GetData";
import { createFilter } from "./Functions/Filter";

export default function ViewList() {
  const { state, dispatch } = useContext(myContext);
  const columns = useMemo(() => VIEW_COLUMNS, []);
  const data = state.data;

  /* useEffect will be executed once after the first render, 
    just like what ComponentDidMount do because the second argument is an empty array*/
  useEffect(() => {
    /* Create a filter object */
    const filter = createFilter(state.filter);
    getData(filter, dispatch);
  }, [dispatch, state.filter]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialStates: { pageIndex: 0 } },
    useSortBy,
    usePagination
  );

  return (
    state.data.length !== 0 && (
      <div className="table_wrapper">
        <table {...getTableProps()} id="view_table">
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup, index) => (
                // Apply the header row props
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  key={`header_${index}`}
                >
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column, i) => (
                      // Apply the header cell props
                      <th
                        key={`header_${index}_${i}`}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {
                          // Render the header
                          column.render("Header")
                        }
                        {column.accessor !== undefined && (
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <>
                                  {" "}
                                  <FaCaretDown />
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <FaCaretUp />
                                </>
                              )
                            ) : (
                              <>
                                {" "}
                                <FaSort />
                              </>
                            )}
                          </span>
                        )}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  );
  // <table>
  //   <thead>
  //     <tr>
  //       <th colSpan="15">View List</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td className="add_title"></td>
  //       <td colSpan="8" className="add_title">
  //         Account Classification
  //       </td>
  //       <td className="add_title"></td>
  //       <td colSpan="2" className="add_title">
  //         Cumulative
  //       </td>
  //       <td className="add_title"></td>
  //       <td colSpan="2" className="add_title">
  //         Current Fiscal Year Net Activity
  //       </td>
  //     </tr>
  //     <tr>
  //       {state.record_titles.map((title) => (
  //         <td style={{ width: "5%" }} className="add_title">
  //           {title}
  //         </td>
  //       ))}
  //     </tr>
  //     {state.filter_by === "AC" &&
  //       state.records
  //         .filter((record) =>
  //           state.ac_filter === "" ? true : record.ac === state.ac_filter
  //         )
  //         .filter((record) =>
  //           state.fy_filter === "" ? true : record.fy === state.fy_filter
  //         )
  //         .map((record) =>
  //           state.model === "def" ? (
  //             <tr>
  //               {state.record_titles_ids.map(([id, len]) => (
  //                 <td>{record[id]}</td>
  //               ))}
  //             </tr>
  //           ) : (
  //             <tr>
  //               {state.record_titles_ids.map(([id, len]) =>
  //                 id === "ac" ? (
  //                   <td
  //                     style={{
  //                       fontWeight: "bold",
  //                       color: "blue",
  //                       borderColor: "black",
  //                     }}
  //                     onClick={() => {
  //                       dispatch({ type: "SELECT_REC", record: record });
  //                       props.history.push(`/${state.model}`);
  //                     }}
  //                   >
  //                     {record[id]}
  //                   </td>
  //                 ) : (
  //                   <td>{record[id]}</td>
  //                 )
  //               )}
  //             </tr>
  //           )
  //         )}
  //     {state.filter_by === "TS" &&
  //       state.records
  //         .filter((record) =>
  //           state.ts_filter === "" ? true : record.ts === state.ts_filter
  //         )
  //         .filter((record) =>
  //           state.fy_filter === "" ? true : record.fy === state.fy_filter
  //         )
  //         .map((record) =>
  //           state.model === "def" ? (
  //             <tr>
  //               {state.record_titles_ids.map(([id, len]) => (
  //                 <td>{record[id]}</td>
  //               ))}
  //             </tr>
  //           ) : (
  //             <tr>
  //               {state.record_titles_ids.map(([id, len]) =>
  //                 id === "ac" ? (
  //                   <td
  //                     style={{
  //                       fontWeight: "bold",
  //                       color: "blue",
  //                       borderColor: "black",
  //                     }}
  //                     onClick={() => {
  //                       dispatch({ type: "SELECT_REC", record: record });
  //                       props.history.push(`/${state.model}`);
  //                     }}
  //                   >
  //                     {record[id]}
  //                   </td>
  //                 ) : (
  //                   <td>{record[id]}</td>
  //                 )
  //               )}
  //             </tr>
  //           )
  //         )}
  //   </tbody>
  // </table>
}
