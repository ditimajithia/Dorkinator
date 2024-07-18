interface DorkListCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DorkListCard = ({ icon, description, title }: DorkListCardProps) => {
  return (
    <div>
      <div className="bg-[#18181C] rounded-3xl space-y-5 p-10 mt-10">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#FF9898] rounded-3xl to-[#8054FF] -z-10">
          <div className="w-full h-full flex items-center justify-center">
            {icon}
          </div>
          {/* <img
            className="w-full h-full object-contain"
            src="https://images.unsplash.com/photo-1719917525997-5a1be9bf7ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
          /> */}
        </div>
        <div className="text-center space-y-5">
          <div className="font-semibold text-lg">{title}</div>
          <p className="font-normal text-[14px] text-[#9E9E9E]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DorkListCard;
