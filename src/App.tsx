import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MediaStorageArchitecture from "./pages/projects/StorageArchitecture";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import DAM from "./pages/projects/DAM";
import MultimediaInternship from "./pages/projects/MultimediaInternship";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/work/Digital-Asset-Management-Application"
          element={<DAM />}
        />

        <Route
          path="/work/media-storage-architecture"
          element={<MediaStorageArchitecture />}
        />

        <Route 
          path="/work/multimedia-internship" 
          element={<MultimediaInternship />} />

      </Routes>

      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;