import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateGig = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    desc: "",
    price: "",
    category: "web",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit gig
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.desc || !form.price) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.post("http://localhost:3001/api/gigs", {
        ...form,
        userId: "TEMP_USER_ID", // 🔴 replace later with JWT userId
      });

      navigate("/"); // redirect to Explore page
    } catch (err) {
      console.error(err);
      setError("Failed to create gig");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-10">
      <div className="max-w-xl mx-auto bg-[#020617] border border-gray-800 rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create a New <span className="text-green-400">Gig</span>
        </h1>

        {error && (
          <p className="mb-4 text-red-400 text-sm text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Gig title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#020617] border border-gray-700 focus:outline-none focus:border-green-500"
          />

          {/* Description */}
          <textarea
            name="desc"
            placeholder="Gig description"
            rows="4"
            value={form.desc}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#020617] border border-gray-700 focus:outline-none focus:border-green-500"
          />

          {/* Category */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#020617] border border-gray-700"
          >
            <option value="web">Web Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Price in ₹"
            value={form.price}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#020617] border border-gray-700 focus:outline-none focus:border-green-500"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-500 text-black rounded-md hover:bg-green-400 transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Gig"}
          </button>
        </form>
      </div>
    </div>
  );
};


export default CreateGig;
