import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GENRE_MAP } from "../utils/genreMap";

const COLORS = [
  "#e50914",
  "#22c55e",
  "#3b82f6",
  "#f97316",
  "#a855f7",
  "#06b6d4",
  "#facc15",
];

const GenreAnalytics = () => {
  const user = useSelector((store) => store.user);
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "watchlists"),
      where("uid", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const genreCount = {};

      snapshot.docs.forEach((doc) => {
        const movie = doc.data().movie;
        movie.genre_ids?.forEach((id) => {
          const name = GENRE_MAP[id] || "Other";
          genreCount[name] = (genreCount[name] || 0) + 1;
        });
      });

      const formatted = Object.entries(genreCount).map(
        ([name, value]) => ({ name, value })
      );

      setGenreData(formatted);
    });

    return () => unsub();
  }, [user]);

  if (!genreData.length) {
    return (
      <div className="pt-24 text-center text-gray-400">
        No watchlist data available
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 text-white">
      <h1 className="text-2xl font-bold mb-8">
        🎬 Genre Analytics
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* PIE CHART */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">
            Watchlist Genre Distribution
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {genreData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">
            Movies per Genre
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={genreData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#e50914" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GenreAnalytics;
