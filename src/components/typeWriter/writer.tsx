import { TypeAnimation } from "react-type-animation";

const Writer = () => {
  return (
    <TypeAnimation
      sequence={["Eu", 1000, "Te", 1000, "Amo", 1000, "<3", 1000]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "2rem",
        color: "white",
        fontFamily: "monospace",
        display: "block",
        textAlign: "center",
        margin: "2rem 0",
      }}
    />
  );
};

export default Writer;
