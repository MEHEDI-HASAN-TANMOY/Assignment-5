

import Navbar from"./Component/Navbar";
import Hero from "./Component/Hero";


function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main>
        <h1 className="p-10 text-center text-3xl font-bold">
          Dev Stack
        </h1>
      </main>
    </>
  );
}

export default App;