import React from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { useBoolean } from "@/hooks/useBoolean";
import FilterIcon from "./images/filter.svg";
import Image from "next/image";

const Table = ({ columns, data, fetchData }) => {
  const { toggle, setTrue, value } = useBoolean(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = useTable(
    { columns, data, initialState: { filters: [], sortBy: [] } },
    useFilters,
    useSortBy
  );

  React.useEffect(() => {
    fetchData({
      pageIndex: 0,
      pageSize: 10, // Sayfa başına gösterilecek öğe sayısı
      filters: state.filters,
      sortBy: state.sortBy,
    });
  }, [fetchData, state]);
  console.log(headerGroups);
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
                <th className="px-6 py-2 flex" {...column.getHeaderProps()}>
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
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
