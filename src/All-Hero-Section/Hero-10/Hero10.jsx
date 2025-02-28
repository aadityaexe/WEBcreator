import { useContent } from "../../Store/ContentValues";

export const Home10 = () => {
  const { colors } = useContent();

  return (
    <section className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="/src/assets/[4K] Cars Movie「Edit」(Bando).mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        style={{
          background: colors?.overlay || "rgba(0, 0, 0, 0.5)",
          color: colors?.text || "#ffffff",
        }}
      >
        <h1
          className="text-5xl font-bold"
          style={{ color: colors?.h1 || "#ffffff" }}
        >
          Experience the Future
        </h1>
        <p
          className="text-lg mt-4 max-w-lg"
          style={{ color: colors?.p || "#d1d5db" }}
        >
          Cutting-edge solutions to redefine your digital experience.
        </p>
      </div>
    </section>
  );
};

export default Home10;
