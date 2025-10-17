import React, { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  SortingState,
} from "@tanstack/react-table";
import { Jogo } from "./types";

interface Props {
  ano: string; // exemplo: "2025" ou "todos"
}

interface ColumnMetaExtra {
  hideOnMobile?: boolean;
}

export const RankingTable: React.FC<Props> = ({ ano }) => {
  const [dados, setDados] = useState<Jogo[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 20 });

  // Carregar JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = ano === "todos" ? "/data/todos.json" : `/data/${ano}.json`;
        const res = await fetch(url);
        const json: Jogo[] = await res.json();
        setDados(json.filter((j) => j["Situação"]?.trim() === "Zerado"));
        setPagination({ pageIndex: 0, pageSize: 20 }); // resetar página ao trocar de ano
      } catch (err) {
        console.error("Erro ao carregar JSON:", err);
      }
    };
    fetchData();
  }, [ano]);

  // Colunas
  const columns: ColumnDef<Jogo, any>[] = [
    { header: "Nome Do Jogo", accessorKey: "Nome Do Jogo" }, // sempre visível
    { header: "Plataforma", accessorKey: "Plataforma" }, // sempre visível
    { header: "Ano de Lançamento", accessorKey: "Ano de Lançamento" }, // sempre visível
    { header: "Gen1", accessorKey: "Gen1", meta: { hideOnMobile: true } },
    { header: "Gen2", accessorKey: "Gen2", meta: { hideOnMobile: true } },
    { header: "Nacionalidade", accessorKey: "Nacionalidade", meta: { hideOnMobile: true } },
    { header: "Mecânica", accessorKey: "Mecanica", meta: { hideOnMobile: true } },
    { header: "Gráfico", accessorKey: "Grafico ", meta: { hideOnMobile: true } },
    { header: "Trilha Sonora", accessorKey: "Trilha Sonora", meta: { hideOnMobile: true } },
    { header: "História", accessorKey: "Historia", meta: { hideOnMobile: true } },
    { header: "Otimização", accessorKey: "Otimização", meta: { hideOnMobile: true } },
    { header: "Média", accessorKey: "Media" }, // sempre visível
  ];

  const table = useReactTable({
    data: dados,
    columns,
    state: { sorting, pagination },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageCount = table.getPageCount();

  return (
    <div className="w-full overflow-x-auto">
      <div className="overflow-x-auto rounded-lg border dark:border-gray-700 border-gray-300 shadow-md p-2 bg-gray-50 dark:bg-gray-900 transition-colors">
        <table className="min-w-[1200px] divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const hideOnMobile = (header.column.columnDef.meta as ColumnMetaExtra)?.hideOnMobile;
                  return (
                    <th
                      key={header.id}
                      className={`px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white cursor-pointer select-none ${
                        hideOnMobile ? "hidden sm:table-cell" : ""
                      }`}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`${
                  i % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-900"
                } hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {row.getVisibleCells().map((cell) => {
                  const hideOnMobile = (cell.column.columnDef.meta as ColumnMetaExtra)?.hideOnMobile;
                  return (
                    <td
                      key={cell.id}
                      className={`px-4 py-2 text-sm text-gray-700 dark:text-white ${
                        hideOnMobile ? "hidden sm:table-cell" : ""
                      }`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="flex justify-between mt-2 items-center text-sm text-gray-700 dark:text-white">
        <button
          disabled={pagination.pageIndex === 0}
          onClick={() => table.previousPage()}
          className="px-2 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &lt; Anterior
        </button>

        <span>
          Página {pagination.pageIndex + 1} de {pageCount}
        </span>

        <button
          disabled={pagination.pageIndex + 1 >= pageCount}
          onClick={() => table.nextPage()}
          className="px-2 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Próxima &gt;
        </button>
      </div>
    </div>
  );
};

export default RankingTable;
