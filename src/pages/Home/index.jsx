import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [gatos, setGatos] = useState([]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Lista das imagens de fundo (caminhos relativos a public/img/)
  const catBackgrounds = [
    "/img/wallpaper.jpg",
    "/img/wallpaper2.jpg",
    "/img/wallpaper3.jpg",
    "/img/wallpaper4.jpg",
    "/img/wallpaper5.jpg",
    "/img/wallpaper6.jpg"
  ];

  // Busca fatos sobre gatos
  useEffect(() => {
    axios.get("https://catfact.ninja/facts")
      .then((res) => setGatos(res.data.data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  // Troca o background a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev === catBackgrounds.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [catBackgrounds.length]);

  return (
    <div style={{ 
      backgroundImage: `url(${catBackgrounds[currentBgIndex]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      transition: "background-image 1s ease-in-out",
      padding: "40px",
      color: "white", // Texto branco para contraste
      textShadow: "2px 2px 4px rgba(0,0,0,0.7)" // Sombra para melhor legibilidade
    }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Fatos sobre Gatos</h2>
      
      <div style={{ 
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "rgba(0,0,0,0.3)", // Fundo semi-transparente leve
        padding: "20px",
        borderRadius: "10px"
      }}>
        {gatos.map((gato, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "1.2rem" }}>{gato.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}