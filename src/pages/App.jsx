import "../assets/Style/App.scss";

import { React, lazy, Suspense } from "react";
import Navbar from "../components/navbar";
import Loading from "../components/loading";

const Home = lazy(() => import('../components/sectionHome'));
const About = lazy(() => import('../components/sectionAbout'));
const Project = lazy(() => import('../components/sectionProject'));
const Contact = lazy(() => import('../components/sectionContact'));

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Project />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
