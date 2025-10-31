import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://your-render-api-url.onrender.com/api"; // replace with your real backend URL

export default function CitizensList() {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/citizens/`)
      .then(res => setCitizens(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Citizens</h1>
      <ul className="space-y-2">
        {citizens.map((citizen, index) => (
          <li key={index} className="p-3 border rounded-lg shadow-sm">
            <strong>{citizen.name}</strong> — {citizen.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}
