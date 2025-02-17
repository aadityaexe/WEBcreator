import React from 'react';

const Token1 = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Tokenomics</h2>
        <div className="flex justify-around mt-12">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-500 rounded-full text-white flex items-center justify-center text-2xl">
              40%
            </div>
            <p className="mt-4 text-lg text-gray-600">Initial Supply</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-green-500 rounded-full text-white flex items-center justify-center text-2xl">
              30%
            </div>
            <p className="mt-4 text-lg text-gray-600">Staking Rewards</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-yellow-500 rounded-full text-white flex items-center justify-center text-2xl">
              20%
            </div>
            <p className="mt-4 text-lg text-gray-600">Liquidity Pool</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-red-500 rounded-full text-white flex items-center justify-center text-2xl">
              10%
            </div>
            <p className="mt-4 text-lg text-gray-600">Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token1;
