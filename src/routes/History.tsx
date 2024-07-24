type TDorksHistory = {
  domain: string;
  dork: string;
};

import { useLocation } from "react-router";
import Navbar from "../components/home/Navbar/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const History = () => {
  const location = useLocation();
  const Dorks: TDorksHistory[] = [
    {
      domain: "www.domaiffffn.com",
      dork: "Domain Dork",
    },
    {
      domain: "www.domain.com",
      dork: "Domain Dork",
    },
  ];
  return (
    <div className="space-y-5 h-screen">
      <Navbar isHistoryPage={location?.pathname === "/history" && true} />
      <h1 className="text-center pt-10 text-6xl font-poppins font-semibold">
        History
      </h1>
      <div className="container bg-[#E2DFDF] text-black rounded-xl">
        <div className="mt-32 ">
          <Table>
            <TableHeader className="font-poppins font-semibold text-black">
              <TableRow>
                <TableHead>Domain</TableHead>
                <TableHead>Dork</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Dorks?.map((dork) => (
                <TableRow>
                  <TableCell className="font-medium">{dork?.domain}</TableCell>
                  <TableCell>{dork?.dork}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <div className="grid grid-cols-3 ">
            <div className="col-span-2 border-black border-r-2 border-dashed">
              <h2 className="text-3xl p-4">Domain</h2>
              <div className="divide-black divide-dashed divide-y-2 px-4 space-y-4">
                <div>Hello</div>
                <div className="pt-1">World</div>
                <div>Etc</div>
                <div>Etc</div>
                <div>Etc</div>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="text-3xl p-4">Dork</h2>
              <div className="divide-black divide-dashed divide-y-2 px-4 space-y-4">
                <div>Hello</div>
                <div>World</div>
                <div>Etc</div>
                <div>Etc</div>
                <div>Etc</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default History;
