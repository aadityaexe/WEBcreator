import Title from "../components/Title";
import Hero1 from "../All-Hero-Section/Hero-1/Hero1";
import Hero2 from "../All-Hero-Section/Hero-1/Hero2";
import Hero3 from "../All-Hero-Section/Hero-1/Hero3";
import Hero4 from "../All-Hero-Section/Hero-1/Hero4";
import Hero5 from "../All-Hero-Section/Hero-1/Hero5";
import Hero6 from "../All-Hero-Section/Hero-1/Hero6";

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
          <Hero2 />
        </div>
        <div>
          <Title title="Hero 3" />
          <Hero3 />
        </div>
        <div>
          <Title title="Hero 4" />
          <Hero4 />
        </div>
        <div>
          <Title title="Hero 5" />
          <Hero5 />
        </div>
        <div>
          <Title title="Hero 5" />
          <Hero6 />
        </div>
      </div>
    </div>
  );
};
export default AllTypeOfHeros;
