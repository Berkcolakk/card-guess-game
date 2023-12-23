import React from "react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import { useBoolean } from "@/hooks/useBoolean";
import FilterIcon from "./images/filter.svg";
import Image from "next/image";

const Table = ({
  columns,
  data,
  fetchData,
  deleteButton = false,
  updateButton = false,
}) => {
  const { toggle, value } = useBoolean(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { filters: [], sortBy: [], pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  React.useEffect(() => {
    fetchData({
      pageIndex: state.pageIndex,
      pageSize: state.pageSize,
      filters: state.filters,
      sortBy: state.sortBy,
    });
  }, [fetchData, state]);

  // Sil butonuna tıklanınca çalışacak event
  const handleDelete = (row) => {
    // Silme işlemi burada gerçekleştirilebilir.
    console.log("Delete clicked for row:", row);
  };

  // Düzenleme butonuna tıklanınca çalışacak event
  const handleEdit = (row) => {
    // Düzenleme işlemi burada gerçekleştirilebilir.
    console.log("Edit clicked for row:", row);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        {...getTableProps()}
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <>
                  <th className="px-6 py-2 " {...column.getHeaderProps()}>
                    <div className="flex">
                      {<h1>{column.render("Header")}</h1>}
                      <div className="px-1">
                        <button onClick={() => toggle()}>
                          <Image src={FilterIcon} height={15} width={15} />
                        </button>
                        {column.canFilter && value ? (
                          <input
                            className="fixed block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={
                              state.filters.find((f) => f.id === column.id)
                                ?.value || ""
                            }
                            onChange={(e) => column.setFilter(e.target.value)}
                            placeholder={`Filtrele ${column.render("Header")}`}
                          />
                        ) : null}
                      </div>
                      <span {...column.getSortByToggleProps()}>
                        {column.canSort
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </div>
                  </th>
                </>
              ))}
              {deleteButton || updateButton ? (
                <th className="px-6 py-2 ">Aksiyonlar</th>
              ) : (
                <></>
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td
                    className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
                {deleteButton || updateButton ? (
                  <td>
                    <div className="flex justify-center">
                      {deleteButton ? (
                        <button className="m-2" onClick={() => handleDelete(row)}>Sil</button>
                      ) : (
                        <></>
                      )}
                      {updateButton ? (
                        <button className="m-2" onClick={() => handleEdit(row)}>Düzenle</button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </td>
                ) : (
                  <></>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {page <= 10 ? (
        <div>
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
            Sayfa{" "}
            <strong>
              {state.pageIndex + 1} / {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Sayfa Boyutu:{" "}
            <select
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Table;
