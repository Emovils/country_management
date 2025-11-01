import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://django-country-api.onrender.com/api/citizens/";

export default function AddCitizen() {
  const [form, setForm] = useState({
    first_name: "",
    father_name: "",
    mother_name: "",
    home_town: "",
    gender: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL, form);
      alert("Citizen added successfully!");
      setForm({
        first_name: "",
        father_name: "",
        mother_name: "",
        home_town: "",
        gender: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error adding citizen");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Citizen</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["first_name", "father_name", "mother_name", "home_town"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.replace("_", " ").toUpperCase()}
            className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        ))}

        {/* Gender Select Field */}
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-300"
          required
        >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
