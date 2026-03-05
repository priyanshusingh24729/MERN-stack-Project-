import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const { gigId } = useParams(); // from /order/:gigId
  const navigate = useNavigate();

  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch gig details
  useEffect(() => {
    const fetchGig = async () => {
      try {
        const res = await axios.get(`/api/gigs/${gigId}`);
        setGig(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load gig details");
      } finally {
        setLoading(false);
      }
    };

    fetchGig();
  }, [gigId]);

  const handleOrder = () => {
    alert("Order placed successfully 🎉");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        Loading order details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#020617] text-red-400 flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Gig Info */}
        <div className="border border-gray-800 rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-3">{gig.title}</h1>
          <p className="text-gray-400 mb-4">{gig.desc}</p>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">{gig.category}</span>
            <span className="text-green-400 text-xl font-bold">
              ₹{gig.price}
            </span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Service Price</span>
            <span>₹{gig.price}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Service Fee</span>
            <span>₹50</span>
          </div>

          <hr className="border-gray-700 my-3" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-green-400">
              ₹{Number(gig.price) + 50}
            </span>
          </div>

          <button
            onClick={handleOrder}
            className="w-full mt-6 py-3 bg-green-500 text-black rounded-md hover:bg-green-400 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;