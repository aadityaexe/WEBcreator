/* eslint-disable react/prop-types */
const Title = ({ title }) => {
  return (
    <div className="flex items-center justify-center py-11">
      <h1 className="text-4xl font-bold bg-clip-text text-white">{title}</h1>
    </div>
  );
};

export default Title;
