import { useEffect, useState } from "react";

const partners = [
  {
    name: "Chipotle Mexican Grill",
    image: "/lovable-uploads/7494397f-f009-4168-9df4-47de076c08b4.png",
  },
  {
    name: "Delaware Public Health District",
    image: "/lovable-uploads/d70de79e-2059-4e4d-9def-e40621b1d2e9.png",
  },
  {
    name: "Sudden Cardiac Arrest Foundation",
    image: "/lovable-uploads/57798711-b225-49a6-a97c-c8ff59829af7.png",
  },
  {
    name: "Compress & Shock Foundation",
    image: "/lovable-uploads/6c3c1c6b-b5e3-40d9-be38-57652e395560.png",
  },
  {
    name: "DefibTech",
    image: "/lovable-uploads/1c698d01-02a1-4ccd-bea9-dbb9d3d0d539.png",
  },
  {
    name: "CPR Columbus",
    image: "/lovable-uploads/12bd14d4-56b6-434e-a091-4d8e83607376.png",
  },
];

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="fancy-heading text-4xl font-bold text-center mb-12">
          Our Partners & Collaborators
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-1000 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-8">
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-32">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-20 max-w-full object-contain filter hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;