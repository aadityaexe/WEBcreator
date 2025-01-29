import Roadmap1 from "../All-Roadmap-Section/Roadmap-1/Roadmap1";
import Roadmap2 from "../All-Roadmap-Section/Roadmap-2/Roadmap2";
import Title from "../components/Title";

const AllTypeOfHeros = () => {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 pt-10 space-y-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <Title title="Roadmap 1" />
          <Roadmap1 />
        </div>
        <div>
          <Title title="Roadmap 2" />
          <Roadmap2 />
        </div>
      </div>
    </div>
  );
};

export default AllTypeOfHeros;
