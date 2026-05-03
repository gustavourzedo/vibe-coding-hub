import type { ReactNode } from "react";

export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-[var(--line)]">
      <table className="w-full min-w-[760px] border-collapse bg-[var(--surface)] text-left text-sm">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="border-b border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 font-mono text-xs uppercase text-[var(--muted-strong)]"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-[rgba(66,217,166,0.05)]">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-[var(--line)] px-4 py-4 align-top text-[var(--muted-strong)] last:border-b-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

