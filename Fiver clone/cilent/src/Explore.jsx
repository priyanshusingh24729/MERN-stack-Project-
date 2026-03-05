import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Explore = () => {
  const navigate = useNavigate();

  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // 🔹 Fetch gigs
  const fetchGigs = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/api/gigs", {
        params: {
          search,
          category: category !== "all" ? category : undefined,
          min,
          max,
        },
      });
      setGigs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] text-white px-6 py-10">
      {/* 🔹 Header */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Find the right <span className="text-green-400">freelance</span> services
        </h1>
        <p className="text-gray-400">
          Browse gigs by category, search by keyword, and order with confidence.
        </p>
      </div>

      {/* 🔹 Filters */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 mb-10">
        <input
          type="text"
          placeholder="Search gigs..."
          className="flex-1 px-4 py-2 rounded-md bg-[#020617] border border-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-md bg-[#020617] border border-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All categories</option>
          <option value="web">Web Development</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
        </select>

        <input
          type="number"
          placeholder="Min ₹"
          className="w-28 px-4 py-2 rounded-md bg-[#020617] border border-gray-700"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max ₹"
          className="w-28 px-4 py-2 rounded-md bg-[#020617] border border-gray-700"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />

        <button
          onClick={fetchGigs}
          className="px-6 py-2 bg-green-500 text-black rounded-md hover:bg-green-400"
        >
          Search
        </button>
      </div>

      {/* 🔹 Loading */}
      {loading && (
        <p className="text-center text-gray-400">Loading gigs...</p>
      )}

      {/* 🔹 No Gigs Found */}
      {!loading && gigs.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-2">No gigs found</h2>
          <p className="text-gray-400 mb-6">
            Start earning by creating your first gig
          </p>
          <Link
  to="/CreateGig"
  className="inline-block px-8 py-3 bg-green-500 text-black rounded-lg hover:bg-green-400"
>
  Create Your First Gig
</Link>
        </div>
      )}

      {/* 🔹 Gig Cards */}
      {!loading && gigs.length > 0 && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <div
              key={gig._id}
              className="bg-[#020617] border border-gray-800 rounded-lg p-5 hover:border-green-500 transition cursor-pointer"
              onClick={() => navigate(`/gig/${gig._id}`)}
            >
              <h3 className="font-semibold text-lg mb-2">{gig.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                {gig.desc}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  {gig.category}
                </span>
                <span className="text-green-400 font-bold">
                  ₹{gig.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;