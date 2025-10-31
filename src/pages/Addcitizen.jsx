import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://your-render-api-url.onrender.com/api"; // replace with your actual backend URL

export default function AddCitizen() {
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/citizens/`, formData);
      alert("Citizen added successfully!");
      setFormData({ name: "", age: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to add citizen.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Citizen</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Citizen
        </button>
      </form>
    </div>
  );
}
