import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaCcVisa } from "react-icons/fa";
import { RxBorderDotted } from "react-icons/rx";

interface CardDetails {
  cardholderName: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  brand: string;
  cvc: string;
}

interface CardTablePageProps {
  card: CardDetails | null;
}

export default function CardTablePage({ card }: CardTablePageProps) {
  if (!card) {
    return <div>No card details available</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Table className="mx-auto w-11/12 xl:w-3/5 2xl:w-1/5 lg:w-1/4 md:w-1/2 sm:w-1/2 text-slate-600">
        <TableBody>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">Card number</TableCell>
            <TableCell className="flex items-center">
              <RxBorderDotted className="inline-block text-2xl text-black mb-0.2 mr-2" />
              <RxBorderDotted className="inline-block text-2xl text-black mb-0.2 mr-2" />
              <RxBorderDotted className="inline-block text-2xl text-black mb-0.2 mr-2" />
              {card.last4}
            </TableCell>
          </TableRow>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">CVV</TableCell>
            <TableCell>
              <HiDotsHorizontal />
            </TableCell>
          </TableRow>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">Expiration</TableCell>
            <TableCell>
              {card.expiryMonth}/{card.expiryYear}
            </TableCell>
          </TableRow>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">Brand</TableCell>
            <TableCell>
              {card.brand}
              <FaCcVisa className="inline-block text-2xl ml-2 text-black" />
            </TableCell>
          </TableRow>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">Status</TableCell>
            <TableCell>
              <span className="border border-black border-solid px-4 py-2 rounded-md">
                Active
              </span>
            </TableCell>
          </TableRow>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">Cardholder</TableCell>
            <TableCell>{card.cardholderName}</TableCell>
          </TableRow>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">Card type</TableCell>
            <TableCell>Virtual</TableCell>
          </TableRow>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">Created at</TableCell>
            <TableCell>Nov 15, 2023, 9:32 PM</TableCell>
          </TableRow>
          <TableRow className="flex flex-row sm:table-row">
            <TableCell className="font-medium">Billing address</TableCell>
            <TableCell>
              <p>123 Main Street</p>
              <p className="w-max">San Francisco, CA, 94111, US</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
