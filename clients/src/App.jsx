import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WebNavbar from "./Components/Navbar/WebNavbar";
import WebHero from "./Components/WebHero";

function App() {
  return (
    <>
      <WebNavbar />
      <WebHero />
    </>
  );
}

export default App;
