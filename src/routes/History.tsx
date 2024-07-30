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
import { pocketbase } from "../lib/utils";
import { useQuery } from "@tanstack/react-query";
import { RecordModel } from "pocketbase";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const History = () => {
  const location = useLocation();
  const { toast } = useToast();

  const fetchHistory = async () => {
    const records = await pocketbase.collection("dork_history").getFullList({
      filter: `user = "${pocketbase?.authStore?.model?.id}"`,
      sort: "-created",
    });
    return records;
  };

  useEffect(() => {
    if (!pocketbase?.authStore?.isValid)
      toast({
        title: "Login!!",
        description: "Please Login",
      });
  }, [pocketbase?.authStore?.isValid]);

  const { data } = useQuery({
    queryKey: ["fetch-dork-history"],
    queryFn: fetchHistory,
  });

  const Dorks: RecordModel[] | undefined = data;
  return (
    <div className="md:space-y-5 space-y-3 h-screen">
      <Navbar isHistoryPage={location?.pathname === "/history" && true} />
      <h1 className="text-center pt-10 md:text-6xl text-5xl font-poppins font-semibold">
        History
      </h1>
      <div className="container ">
        <div className="bg-[#E2DFDF] text-black rounded-xl md:px-10 px-5">
          <div className="md:mt-32 mt-20">
            <Table>
              <TableHeader className="font-poppins font-semibold text-black">
                <TableRow>
                  <TableHead>Domain</TableHead>
                  <TableHead>Dork</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Dorks?.map((dork) => (
                  <TableRow key={dork?.id}>
                    <TableCell className="font-medium">
                      {dork?.domain ||
                        "No Domain mentioned while searching the dork"}
                    </TableCell>
                    <TableCell>{dork?.dork}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
