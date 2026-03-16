import Unav from './Unav';
import { useNavigate } from 'react-router-dom';
import rideBanner from "../../assets/EnjoyYourRide.png"

const Uhome = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-amber-100 min-h-screen font-sans">
            <Unav />
            <br />
            <h1 className="text-center text-gray-800 text-4xl font-bold mt-8">Welcome to Ucab</h1>
            <p className="text-center text-gray-700 text-lg mt-4 px-4 max-w-4xl mx-auto">
                Cab Booking is the ultimate solution for all your transportation needs. Whether you're looking for a convenient ride to work, a hassle-free airport transfer, or a safe and reliable ride around town, our app has you covered.
            </p>
            <div className="flex justify-center mt-8">
                <img
                    src={rideBanner}
                    alt="Enjoy Your Ride"
                    className="flex justify-center h-[500px] w-4/5 object-cover rounded-lg "
                />
            </div>
            <br />
            <div className="flex justify-center md:justify-start md:ml-[720px]">
                <button
                    className="bg-black text-white rounded-full h-16 w-40 transition transform duration-200 ease-in-out hover:scale-105"
                    onClick={() => { navigate('/cabs') }}
                >
                    Book Ride →
                </button>
            </div>
            <br />

            <div className="flex flex-col md:flex-row items-center md:justify-between px-4 mt-12">
                <img
                    src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1602280707/assets/ca/8ba51a-ac4a-438d-a62e-776bf6920c1a/original/Reserve_Web-4_Trip.jpg'
                    alt="Reserve a Ride"
                    className="h-[400px] object-cover w-full md:w-auto rounded-md shadow-md mb-8 md:mb-0"
                />
                <div className="md:pl-8 md:mt-0 mt-4 text-center md:text-left">
                    <h1 className="text-gray-800 text-4xl font-bold mb-4">Reserve a ride that's ready when you are</h1>
                    <p className="text-gray-700 text-lg mt-4 px-4 max-w-4xl mx-auto">
                        Now more than ever, reservations are a way of life. Reserve a premium Uber experience, up to 90 days in advance, for whenever you’re ready to ride.
                    </p>
                </div>
            </div>

            <div className="mt-12 px-4">
                <h1 className="text-gray-800 text-4xl font-bold text-center mb-8">
                    Why use the Ucab app?
                </h1>

                {/* Optional: Keep or remove this banner */}
                <img
                    src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_1440,h_338/v1536163144/assets/27/d1f66e-c9c5-455a-b912-234700f4c0d8/original/whyRideWithUs_desktop.svg"
                    alt="Why Ride With Us"
                    className="w-full h-auto mb-8 rounded-lg"
                />

                {/* Cards layout */}
                <div className="flex flex-col md:flex-row justify-around text-center gap-6">
                    <div className="bg-amber-100 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 w-full md:w-1/3">
                        <p className="text-gray-800 text-2xl font-bold mb-2">Rides on demand</p>
                        <p className="text-gray-700 text-lg">
                            Request a ride at any time and on any day of the year.
                        </p>
                    </div>

                    <div className="bg-amber-100 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 w-full md:w-1/3">
                        <p className="text-gray-800 text-2xl font-bold mb-2">Budget-friendly options</p>
                        <p className="text-gray-700 text-lg">
                            Compare prices on every kind of ride, from daily commutes to special evenings out.
                        </p>
                    </div>

                    <div className="bg-amber-100 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 w-full md:w-1/3">
                        <p className="text-gray-800 text-2xl font-bold mb-2">An easy way to get around</p>
                        <p className="text-gray-700 text-lg">
                            Tap and let your driver take you where you want to go.
                        </p>
                    </div>
                </div>
            </div>


            <footer className="bg-gray-900 text-white py-6 mt-16">
                <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Contact Us:</h3>
                        <p>📧 Email: support@ucab.com</p>
                        <p>📞 Phone: +1-123-456-7890</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Follow Us:</h3>
                        <p>🌐 Website: <a href="http://www.ucab.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">www.ucab.com</a></p>
                        <p>📱 Social Media: [Insert Social Media Icons/Links]</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-2">Help & Support:</h3>
                        <p>📝 <a href="/faqs" className="text-blue-400 hover:underline">FAQs</a></p>
                        <p>🔒 <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a></p>
                        <p>📄 <a href="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</a></p>
                    </div>
                </div>
                <p className="text-center mt-6">[ Ucab App ] - Your Trusted Transportation Partner</p>
                <p className="text-center text-sm">Copyright © {new Date().getFullYear()} - All rights reserved</p>
            </footer>
        </div>
    );
};

export default Uhome;
