import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://django-country-api.onrender.com/api/citizens/";

export default function CitizensList() {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL)
      .then((res) => setCitizens(res.data))
      .catch((err) => console.error("Error fetching citizens:", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Citizens List</h2>
      <ul className="space-y-3">
        {citizens.map((citizen) => (
          <li key={citizen.id} className="border-b pb-2">
            <strong>{citizen.first_name}</strong> — {citizen.home_town}
          </li>
        ))}
      </ul>
    </div>
  );
}
