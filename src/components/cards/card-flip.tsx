import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { images } from "../../data/images";

interface ImageData {
  image: string;
  message: string;
}

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    // Seleciona uma imagem aleatória da lista `imgs` ao carregar o componente
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageData(randomImage);
  }, []);

  return (
    <div
      style={{
        transition: "transform 0.3s ease",
        width: "30rem",
        perspective: "3000px",
        transform: isFlipped ? "scale(1.1)" : "scale(1)",
        opacity: isFlipped ? 1 : undefined,
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {imageData && (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div
            key="image"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                cursor: "pointer",
                borderRadius: "1.5rem",
                height: "600px",
                boxShadow: "0 0 10px 4px rgba(0, 0, 0, 0.4)",
                border: "2px solid",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(to bottom, #A6C2E6, #DAACC9)",
              }}
              src={imageData.image}
              alt=""
            />
          </div>
          <div
            key="back"
            style={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "400px",
              borderRadius: "1rem",
              border: "2px solid",
              borderImageSlice: 1,
              borderImageSource: "linear-gradient(to bottom, #A6C2E6, #DAACC9)",
            }}
          >
            <p
              style={{
                padding: "0.5rem",
                textAlign: "center",
                color: "white",
                fontFamily: "monospace",
                fontSize: "1.5rem",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
              }}
            >
              {imageData.message}
            </p>
          </div>
        </ReactCardFlip>
      )}
    </div>
  );
};

export default CardFlip;
