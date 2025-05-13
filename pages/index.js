import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Home() {
  const [form, setForm] = useState({
    bruker: "",
    problem: "",
    kategori: "E-post",
    konsekvens: "",
    prioritet: "Medium",
    tiltak: "",
  });

  const [incidents, setIncidents] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/incidents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({
      bruker: "",
      problem: "",
      kategori: "E-post",
      konsekvens: "",
      prioritet: "Medium",
      tiltak: "",
    });
    fetchIncidents();
  };

  const fetchIncidents = async () => {
    const res = await fetch("/api/incidents");
    const data = await res.json();
    setIncidents(data);
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <Header />
      <h1 style={{ textAlign: "center" }}>TOIT</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="bruker"
          placeholder="Bruker"
          value={form.bruker}
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <input
          type="text"
          name="problem"
          placeholder="Problem"
          value={form.problem}
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <select
          name="kategori"
          value={form.kategori}
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        >
          <option value="E-post">E-post</option>
          <option value="System">System</option>
          <option value="Nettverk">Nettverk</option>
        </select>
        <input
          type="text"
          name="konsekvens"
          placeholder="Konsekvens"
          value={form.konsekvens}
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <select
          name="prioritet"
          value={form.prioritet}
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="text"
          name="tiltak"
          placeholder="Tiltak"
          value={form.tiltak}
          onChange={handleChange}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Logg Hendelse
        </button>
      </form>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>Loggede Hendelser</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "1rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Bruker
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Problem
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Kategori
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Konsekvens
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Prioritet
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Tiltak
              </th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {incident.bruker}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {incident.problem}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {incident.kategori}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {incident.konsekvens}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {incident.prioritet}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {incident.tiltak}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
