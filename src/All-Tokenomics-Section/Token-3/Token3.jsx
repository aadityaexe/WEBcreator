import React from 'react';

const Token3 = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Tokenomics Overview</h2>
        <div className="mt-12">
          <div className="w-72 h-72 mx-auto rounded-full border-8 border-gray-300 bg-gradient-to-r from-green-500 to-blue-500">
          
            <div className="flex justify-center items-center text-2xl text-white">40%</div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Initial Supply</span>
              <span className="text-lg text-gray-600">40%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Staking Rewards</span>
              <span className="text-lg text-gray-600">30%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Liquidity Pool</span>
              <span className="text-lg text-gray-600">20%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Development</span>
              <span className="text-lg text-gray-600">10%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token3;
