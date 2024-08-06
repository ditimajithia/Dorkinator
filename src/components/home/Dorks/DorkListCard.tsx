interface IDorkCardData {
  collectionId: string;
  collectionName?: string;
  created?: string;
  dork_description: string;
  dork_icon: string;
  dork_title: string;
  id: string;
  updated?: string;
}

const DorkListCard = ({
  collectionId,
  dork_title,
  dork_icon,
  dork_description,
  id,
}: IDorkCardData) => {
  return (
    <div>
      <div className="bg-[#18181C] rounded-3xl space-y-3 lg:p-10 md:mt-10 mt-5 md:px-5 md:py-8 px-3 py-3 lg:max-h-80 lg:min-h-80 max-h-44 min-h-44">
        <div className="md:w-20 md:h-20 w-14 h-14 mx-auto bg-gradient-to-br from-[#FF9898] rounded-3xl to-[#8054FF] -z-10 flex items-center justify-center">
          <div className=" ">
            <div className="md:w-12 md:h-12 w-10 h-10">
              <img
                src={`https://dorkinator.pockethost.io/api/files/${collectionId}/${id}/${dork_icon}`}
              />
            </div>
          </div>
        </div>
        <div className="text-center space-y-5">
          <div className="font-semibold md:text-lg text-base">{dork_title}</div>
          <p className="font-normal md:text-[14px] text-[12px] text-[#9E9E9E]">
            {dork_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DorkListCard;
