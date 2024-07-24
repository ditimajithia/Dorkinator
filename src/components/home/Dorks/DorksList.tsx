import { Input } from "../../ui/input";
import DorkListCard from "./DorkListCard";
import { useQuery } from "@tanstack/react-query";
import { pocketbase } from "../../../lib/utils";
import { Button } from "../../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

type TCardsConfig = {
  IconSize: number;
};

const DorksList = () => {
  const [dorkIcon, setDorkIcon] = useState();
  const [dorkRecordId, setDorkRecordId] = useState();

  const getDorksList = async () => {
    const records = await pocketbase
      .collection("dorks_cards_data")
      .getFullList({
        sort: "-created",
      });
    return records;
  };
  const { data, isFetching } = useQuery({
    queryKey: ["get_dorks_list"],
    queryFn: getDorksList,
  });
  const DorkListData = data;
  console.log("User Token", pocketbase?.authStore?.model?.id);

  const CardsConfig: TCardsConfig = {
    IconSize: 35,
  };

  console.log(">>>> Cards Data", DorkListData);

  return (
    <section>
      <div className="container mx-auto px-40">
        <div className="flex justify-center mt-5">
          <div className="w-3/6">
            <Input
              className="rounded-full py-6 text-black"
              placeholder="Target Domain"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-7 justify-center">
          {/* {CardsData?.map((card) => (
            <DorkListCard
              recordId={}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))} */}
        </div>
        <Button onClick={getDorksList}>Get Dorks List</Button>
      </div>
    </section>
  );
};

export default DorksList;
