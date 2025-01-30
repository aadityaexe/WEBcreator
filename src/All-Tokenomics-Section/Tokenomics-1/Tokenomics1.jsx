export default function Tokenomics1() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-gray-800 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Tokenomics</h2>
        <p className="text-lg mb-8">
          A transparent and fair distribution model for our ecosystem.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold mb-2">Total Supply</h3>
            <p className="text-xl font-bold">1,000,000,000</p>
          </div>

          <div className="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold mb-2">Liquidity</h3>
            <p className="text-xl font-bold">30%</p>
          </div>

          <div className="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold mb-2">Team & Development</h3>
            <p className="text-xl font-bold">15%</p>
          </div>

          <div className="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold mb-2">Marketing</h3>
            <p className="text-xl font-bold">20%</p>
          </div>

          <div className="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold mb-2">Staking & Rewards</h3>
            <p className="text-xl font-bold">25%</p>
          </div>

          <div className="p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold mb-2">Reserve</h3>
            <p className="text-xl font-bold">10%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
