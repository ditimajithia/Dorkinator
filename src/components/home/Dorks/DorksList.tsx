import { Input } from "../../ui/input";
import DorkListCard from "./DorkListCard";
import { useQuery } from "@tanstack/react-query";
import { pocketbase } from "../../../lib/utils";
import { useState } from "react";
import { RecordModel } from "pocketbase";

const DorksList = () => {
  const [inputDomainName, setInputDomainName] = useState<string>();

  const handleSelectDork = async (dork: RecordModel) => {
    window.open(
      !dork?.domain
        ? `https://www.google.com/search?q=${dork?.dork_query.replace(
            "example.com",
            inputDomainName
          )}`
        : `${dork?.domain}${dork?.dork_query.replace(
            "example.com",
            inputDomainName
          )}`
    );
    // Storing the data in the database

    const data = {
      domain: inputDomainName,
      dork: dork?.dork_title,
      user: pocketbase?.authStore?.model?.id,
    };
    const record = await pocketbase.collection("dork_history").create(data);
    return record;
  };

  const getDorksList = async () => {
    const records = await pocketbase
      .collection("dorks_cards_data")
      .getFullList({
        sort: "-created",
      });
    return records;
  };
  const { data } = useQuery({
    queryKey: ["get_dorks_list"],
    queryFn: getDorksList,
  });
  const DorkListData = data;

  return (
    <section id="dorks">
      <div className="container mx-auto md:px-40 px-10">
        <div className="flex justify-center mt-5">
          <div className="md:w-3/6 w-4/6">
            <Input
              className="rounded-full md:py-6 py-3 text-black"
              placeholder="Target Domain"
              onChange={(e) => setInputDomainName(e?.target?.value)}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-7 justify-center">
          {DorkListData?.map((dork) => {
            return (
              <>
                <div
                  className="cursor-pointer"
                  onClick={() => handleSelectDork(dork)}
                >
                  <DorkListCard
                    dork_title={dork.dork_title}
                    dork_description={dork?.dork_description}
                    dork_icon={dork?.dork_icon}
                    collectionId={dork?.collectionId}
                    id={dork?.id}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DorksList;
