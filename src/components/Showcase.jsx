import showcase from "../assets/img/showcase2.jpg";
import Navbar from "../components/Navbar";

const Showcase = () => {
  return (
    <div className="relative lg:h-[900px]">
      <img
        src={showcase}
        alt=""
        className="absolute w-full lg:h-[900px] top-0 left-0 object-cover  -z-10"
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10"></div>
      <Navbar />

      <div className="flex items-center h-[750px] pl-36">
        <h2 className="bg-gray-500/40 rounded-2xl p-10 shadow-lg shadow-gray-400 lg:text-6xl text-white font-primary font-semibold">
          PERFECCIÓN <br /> EN <br /> MECANIZADO
        </h2>
      </div>
    </div>
  );
};

export default Showcase;
