import Header from "../components/Header";

export default function About() {
  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <Header />
      <section>
        <h1>About Us</h1>
        <p>
          Velkommen til toit! Vi er de ultimative hendelse loggerne, dedikert til å hjelpe deg med å
          holde oversikt over hendelser og problemer på en enkel og effektiv måte. Vårt mål er å gjøre bra ting som for eksempel å være on top hele tiden!!
        </p>
        <p>
          Hvis du trenger hjelp, en klem eller bare vil si hei, ikke nøl med å ta kontakt med oss! Seriøst, vi er ensomme!
        </p>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h2>Contact Us</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <strong>Email:</strong> support@toit.no
          </li>
          <li>
            <strong>Phone:</strong> +47 123 45 678
          </li>
          <li>
            <strong>Address:</strong> Toit HQ, Brønnøysund, Norge
          </li>
        </ul>
      </section>
    </main>
  );
}