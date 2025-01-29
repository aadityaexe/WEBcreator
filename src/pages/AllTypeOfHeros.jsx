import Title from "../components/Title";
import Hero1 from "../All-Hero-Section/Hero-1/Hero1";

const AllTypeOfHeros = () => {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 pt-10 space-y-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <Title title="Hero 1" />
          <Hero1 />
        </div>
        <div>
          <Title title="Hero 2" />
          <Hero1 />
        </div>
        <div>
          <Title title="Hero 3" />
          <Hero1 />
        </div>
      </div>
    </div>
  );
};

export default AllTypeOfHeros;
