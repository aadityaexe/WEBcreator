import React from 'react';

const Token5 = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Token Distribution Timeline</h2>
        <div className="mt-12 space-y-6">
          <div className="relative">
            <div className="absolute top-1/2 left-0 transform -translate-x-2/4">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/4">
                <h3 className="text-xl text-gray-600">Initial Supply</h3>
                <p className="text-sm text-gray-500">Released 2022</p>
              </div>
              <div className="w-1/4">
                <h3 className="text-xl text-gray-600">Staking Rewards</h3>
                <p className="text-sm text-gray-500">Released 2023</p>
              </div>
              <div className="w-1/4">
                <h3 className="text-xl text-gray-600">Liquidity Pool</h3>
                <p className="text-sm text-gray-500">Released 2024</p>
              </div>
              <div className="w-1/4">
                <h3 className="text-xl text-gray-600">Development</h3>
                <p className="text-sm text-gray-500">Released 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token5;
