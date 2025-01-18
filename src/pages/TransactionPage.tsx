import transactionsTable from "@/transactionsData";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TransactionPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(transactionsTable.length / itemsPerPage);

  const paginatedTransactions = transactionsTable.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, transactionsTable.length);

  return (
    <>
      <div className="overflow-x-auto p-4">
        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-4 mb-4">
          <Button variant="outline" size="sm">
            Download
          </Button>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>

        {/* Transactions Table */}
        <Table className="mx-auto w-full max-w-5xl border border-solid text-slate-600">
          <TableHeader>
            <TableRow className="m-4 align-center">
              <TableHead scope="col" className="pl-4 text-xs">
                Amount
              </TableHead>
              <TableHead scope="col" className="text-xs p-1 m-4">Currency</TableHead>
              <TableHead scope="col" className="text-xs p-1 m-4">Cardholder</TableHead>
              <TableHead scope="col" className="text-xs p-1 m-4">Status</TableHead>
              <TableHead scope="col" className="text-xs p-1 m-4">Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTransactions.map((transaction, index) => (
              <TableRow className="text-xs h-12" key={index}>
                <TableCell className="p-4">{transaction.amount}</TableCell>
                <TableCell>{transaction.currency}</TableCell>
                <TableCell>{transaction.cardHolder}</TableCell>
                <TableCell>
                  <span className="border border-black border-solid px-3 py-2">
                    {transaction.status}
                  </span>
                </TableCell>
                <TableCell>{transaction.created}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-4">
        <p className="text-slate-600">
          Viewing {startItem}-{endItem} of {transactionsTable.length} results
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
