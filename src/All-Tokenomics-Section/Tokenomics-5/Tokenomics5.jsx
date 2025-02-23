const Tokenomics5 = () => {
  return (
    <section className="py-20 bg-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Token Allocation</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center">
            <i className="fas fa-cogs text-4xl text-blue-500"></i>
            <h3 className="text-xl mt-4">Initial Supply</h3>
            <p className="text-lg">40% of total supply</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-lock text-4xl text-green-500"></i>
            <h3 className="text-xl mt-4">Staking Rewards</h3>
            <p className="text-lg">30% of total supply</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-dollar-sign text-4xl text-yellow-500"></i>
            <h3 className="text-xl mt-4">Liquidity Pool</h3>
            <p className="text-lg">20% of total supply</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-code text-4xl text-red-500"></i>
            <h3 className="text-xl mt-4">Development</h3>
            <p className="text-lg">10% of total supply</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics5;
