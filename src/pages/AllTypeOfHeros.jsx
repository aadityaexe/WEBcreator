import Title from "../components/Title";
<<<<<<< HEAD
import components from "../All-Hero-Section/MapFile/AllHeroMapping";
=======
import Hero1 from "../All-Hero-Section/Hero-1/Hero1";
import Hero2 from "../All-Hero-Section/Hero-2/Hero2";
import Hero3 from "../All-Hero-Section/Hero-3/Hero3";
import Hero4 from "../All-Hero-Section/Hero-4/Hero4";
import Hero5 from "../All-Hero-Section/Hero-5/Hero5";
import Hero6 from "../All-Hero-Section/Hero-6/Hero6";
>>>>>>> 84eff1959e4c6783cd8557f2da59c8287954ef09

const AllTypeOfHeros = () => {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 pt-10 space-y-16">
      <div className="max-w-7xl mx-auto space-y-16">
       
       {components.map(({ id, component: HeroComponent }) => (
          <div key={id}>
            <Title title={id} />
            <HeroComponent /> {/* Correctly rendering the component */}
          </div>
       ))}

      </div>
    </div>
  );
};

export default AllTypeOfHeros;
