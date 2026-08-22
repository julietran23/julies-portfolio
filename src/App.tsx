import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import MediaMetadata from "./pages/projects/DAM";
import MediaStorageArchitecture from "./pages/projects/StorageArchitecture";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Custom flagship case studies */}
        <Route
          path="/work/media-metadata"
          element={<MediaMetadata />}
        />

        <Route
          path="/work/media-storage-architecture"
          element={<MediaStorageArchitecture />}
        />

        {/* Generic case studies */}
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;