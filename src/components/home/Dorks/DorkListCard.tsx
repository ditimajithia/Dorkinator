const DorkListCard = () => {
  return (
    <div>
      <div className="w-[350px] bg-[#18181C] space-y-5 pb-10">
        <div className="w-28 h-28 mx-auto">
          <img
            className="w-full h-full object-contain"
            src="https://images.unsplash.com/photo-1719917525997-5a1be9bf7ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="text-center">
          <div className="font-semibold text-lg">Fully Customizable</div>
          <p className="font-normal text-[14px] text-[#9E9E9E]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DorkListCard;
