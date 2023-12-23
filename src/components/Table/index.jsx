// TableComponent.js
import React from "react";
import { useTable, useFilters, useSortBy, Column } from "react-table";
import { useBoolean } from "@/hooks/useBoolean";
import FilterIcon from "./images/filter.svg";
import Image from 'next/image';

const TableComponent = ({ columns, data, fetchData }) => {
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
    <table {...getTableProps()} style={{ borderSpacing: "0", width: "100%" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
              >
                {column.render("Header")}
                <div>
                  <button onClick={() => toggle()}>
                    <Image  src={FilterIcon} height={15} width={15}/>
                  </button>
                  {column.canFilter && value ? (
                    <input
                      value={
                        state.filters.find((f) => f.id === column.id)?.value ||
                        ""
                      }
                      onChange={(e) => column.setFilter(e.target.value)}
                      placeholder={`Filtrele ${column.render("Header")}`}
                    />
                  ) : null}
                </div>
                <span {...column.getSortByToggleProps()}>
                  {column.canSort ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
