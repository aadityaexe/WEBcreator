import React from 'react';

const Token2 = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Token Distribution</h2>
        <div className="mt-12 space-y-6">
          <div className="flex justify-between">
            <span className="text-lg text-gray-600">Initial Supply</span>
            <div className="w-1/2 bg-gray-400 h-6 rounded-full">
              <div className="bg-blue-500 h-6 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <span className="text-lg text-gray-600">40%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg text-gray-600">Staking Rewards</span>
            <div className="w-1/2 bg-gray-400 h-6 rounded-full">
              <div className="bg-green-500 h-6 rounded-full" style={{ width: '30%' }}></div>
            </div>
            <span className="text-lg text-gray-600">30%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg text-gray-600">Liquidity Pool</span>
            <div className="w-1/2 bg-gray-400 h-6 rounded-full">
              <div className="bg-yellow-500 h-6 rounded-full" style={{ width: '20%' }}></div>
            </div>
            <span className="text-lg text-gray-600">20%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg text-gray-600">Development</span>
            <div className="w-1/2 bg-gray-400 h-6 rounded-full">
              <div className="bg-red-500 h-6 rounded-full" style={{ width: '10%' }}></div>
            </div>
            <span className="text-lg text-gray-600">10%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token2;
