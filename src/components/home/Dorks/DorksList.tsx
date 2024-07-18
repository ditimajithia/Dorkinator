import { Bolt, Bomb, Caravan, Copy } from "lucide-react";
import { Input } from "../../ui/input";
import DorkListCard from "./DorkListCard";

type TCardsConfig = {
  IconSize: number;
};

type TDorklistCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const DorksList = () => {
  const CardsConfig: TCardsConfig = {
    IconSize: 35,
  };
  const CardsData: TDorklistCard[] = [
    {
      title: "Fully Customizable",
      description:
        "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
      icon: <Copy size={CardsConfig.IconSize} />,
    },
  ];
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
          {CardsData?.map((card) => (
            <DorkListCard
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DorksList;
