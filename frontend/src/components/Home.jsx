import NavBar from "./Navbar";
import cabIllustration from "../assets/cab-illustration.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#e8ddb3] flex flex-col">

      <NavBar />

      <section className="flex flex-col items-center justify-center text-center pt-16 px-6 flex-1">

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Your Ride, Your Way
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Reliable. Fast. Affordable. Book cabs anytime, anywhere.
        </p>

        <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition mb-10">
          Explore Services
        </button>

        <img
          src={cabIllustration}
          alt="Cab"
          className="w-[900px] max-w-full mt-6"
        />

      </section>

    </div>
  );
};

export default Home;