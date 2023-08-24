import { Navbar } from "../components/Navbar"

const AboutPage = () => {
  const cardData = [
    {
      title: "Online Medical Appointments",
      description:
        "Schedule your medical appointments online conveniently and quickly. You can choose from a wide range of general and specialized doctors.",
      icon: "medical.svg",
    },
    {
      title: "Variety of Specialties",
      description:
        "We offer a variety of medical specialties to cover all your healthcare needs, from general medicine to more specific specialties.",
      icon: "medical.svg",
    },
    {
      title: "Certified Physicians",
      description:
        "Our doctors are highly qualified and certified in their respective specialties. You can trust to receive the best possible medical care.",
      icon: "medical.svg",
    },
  ];


  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Acerca de Nuestra Aplicación de Citas Médicas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <img
                src={`/ruta/a/tus/iconos/${card.icon}`}
                alt={card.title}
                className="mx-auto mb-4 w-16"
              />
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>);
};

export default AboutPage