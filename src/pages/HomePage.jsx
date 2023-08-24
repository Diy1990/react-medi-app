import { Navbar } from "../components/Navbar"






const HomePage = () => {
  return (
    <>

    <Navbar />
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('../imgs/home.jpg')`,
      }}
    >
      <div className="bg-white bg-opacity-90 max-w-lg p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">
        Welcome to Fast Medic App – Your Premium Medical Appointment Solution

        </h1>
        <p className="text-gray-700"> Why Choose MedApp:
- Streamlined Online Booking: Schedule appointments with ease, anytime and anywhere.
- Extensive Specialist Network: Access a wide range of specialized medical experts for all your healthcare requirements.
- Trusted Professionals: Rest assured knowing that our certified professionals provide unparalleled care.
- Personalized Attention: Receive healthcare that's tailored to your individual needs and preferences.
- Cutting-edge Technology: Experience the latest in medical scheduling technology, ensuring a hassle-free experience.

Join the countless individuals who trust MedApp for their medical appointment needs. Your well-being is our priority, and we're here to make your healthcare journey seamless, reliable, and exceptional.

Start booking your appointments with MedApp today!</p>
      </div>
    </div>
    </> );
};

export default HomePage;