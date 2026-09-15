import Banner from "../assets/banner-stack.png"


function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 lg:py-24">

        {/* Hero Content */}
        <div>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
           Explore frontend, backend, database and tooling options, 
           compare them side by side and put together the stack that fits your 
           next projects.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105">
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={Banner}
            alt="Developer working with technology"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;