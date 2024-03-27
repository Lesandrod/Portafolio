import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <VStack style={{ backgroundColor: "rgba(92, 131, 116, 1)" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </VStack>
    </>
  );
}

export default App;
