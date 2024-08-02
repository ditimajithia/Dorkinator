import CurvedBackgroundImage from "../../assets/backdrop-dependencies/curve.svg";

const CurvedBackground = () => {
  return (
    <>
      <section className="mt-10 ">
        {/* Chat GPT example */}
        {/* <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] h-[500px] "></div> */}
        <img src={CurvedBackgroundImage} className="w-full" />
      </section>
    </>
  );
};

export default CurvedBackground;
