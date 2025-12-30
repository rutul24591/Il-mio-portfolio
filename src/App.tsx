import { useState, useEffect, lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { preload } from "react-dom";

import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Preload";
import { Route, Routes, Navigate } from "react-router-dom";
import { ScrollToTop } from "./helper";
import Home from "./components/Home";
// import About from "./components/About";
// import WorkEx from "./components/WorkEx";
// import Resume from "./components/Resume";

const AboutComponent = lazy(() => import("./components/About"));
const WorkExComponent = lazy(() => import("./components/WorkEx"));
const ResumeComponent = lazy(() => import("./components/Resume"));

const App = () => {
  console.log("DEBUG: App component rendered");
  preload("./assets/images/dev2.jpg", {
    as: "image",
    fetchPriority: "high",
  });
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loader={loaded} />
      <div className="App" id={loaded ? "no-scroll" : "scroll"}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AboutComponent />
              </Suspense>
            }
          />
          <Route
            path="/workex"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <WorkExComponent />
              </Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ResumeComponent />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
