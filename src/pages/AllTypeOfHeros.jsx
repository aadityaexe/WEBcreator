import Title from "../components/Title";
import components from "../All-Hero-Section/MapFile/AllHeroMapping";

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
