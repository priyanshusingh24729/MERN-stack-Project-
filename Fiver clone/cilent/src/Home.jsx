export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#070b14] text-white">
      
      <div className="max-w-5xl mx-auto text-center pt-24 px-4">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Find the right{" "}
          <span className="text-green-400">freelance</span> services
        </h1>

        <p className="text-gray-400 mt-4">
          Browse gigs by category, search by keyword, and order with confidence.
        </p>

        {/* Search Filters */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          
          <input
            type="text"
            placeholder="Search gigs..."
            className="w-full md:w-96 px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-green-400"
          />

          <select className="px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700">
            <option>All categories</option>
          </select>

          <input
            type="number"
            placeholder="Min ₹"
            className="w-24 px-3 py-3 rounded-md bg-[#0f172a] border border-gray-700"
          />

          <input
            type="number"
            placeholder="Max ₹"
            className="w-24 px-3 py-3 rounded-md bg-[#0f172a] border border-gray-700"
          />
        </div>

        {/* Empty State */}
        <p className="text-gray-500 mt-16">
          No gigs found. Try different filters.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 mt-24 border-t border-gray-800">
        Freelance Marketplace — Like Fiverr. Built with MERN.
      </footer>

    </section>
  );
}
