import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import TechnologyCard from "./Component/TechnologyCard";
import type { Technology } from "./Component/technology";
import YourStack from "./Component/YourStack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  // Add Technology
  const handleAddToStack = (technology: Technology) => {
  if (selectedTechnologies.some((item) => item.id === technology.id)) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setSelectedTechnologies((prev) => [...prev, technology]);

  toast.success(`${technology.name} added to your stack!`);
};

  // Remove Technology
  const handleRemoveFromStack = (id: string) => {
  const technology = selectedTechnologies.find(
    (item) => item.id === id
  );

  setSelectedTechnologies((prev) =>
    prev.filter((item) => item.id !== id)
  );

  if (technology) {
    toast.info(`${technology.name} removed from your stack!`);
  }
};

  // Remove All
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info("All technologies removed!");
  };

  useEffect(() => {
    fetch("/data/technology.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load technologies right now.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <ToastContainer />

      <Navbar />

      <Hero />

      {loading && (
        <p className="py-10 text-center text-gray-600">
          Loading technologies...
        </p>
      )}

      {error && (
        <p className="py-10 text-center text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && (
        <section className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

            {/* Technology Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            {/* Your Stack */}
            <YourStack
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />

          </div>
        </section>
      )}
    </>
  );
}

export default App;