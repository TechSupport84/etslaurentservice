import React from 'react';

const services = [
  {
    title: 'Plomberie',
    description: `Nos experts en plomberie interviennent avec rapidité et précision pour résoudre tout type de problème : installations sanitaires, fuites, canalisations, et systèmes d’évacuation. Nous garantissons un service fiable, durable et conforme aux normes.`,
    image: '/cleaning (2).jpg', // Replace with actual image path
  },
  {
    title: 'Nettoyage Professionnel',
    description: `Nous proposons un service de nettoyage complet pour les bureaux, résidences, chantiers, et espaces industriels. Notre équipe utilise des produits respectueux de l’environnement et des équipements modernes pour assurer hygiène et brillance.`,
    image: '/cleaning (1).jpg',
  },
  {
    title: 'Construction Génie Civil',
    description: `De la conception à la réalisation, nous prenons en charge vos projets de construction (bâtiments, routes, fondations, etc.) avec un souci du détail, un contrôle qualité rigoureux et le respect des délais.`,
    image: '/construction (2).jpg',
  },
  {
    title: 'Autres Services Techniques',
    description: `ETS MG BUILDERS SERVICES propose également des prestations en électricité, peinture, carrelage, et aménagement intérieur. Nous offrons des solutions sur mesure selon vos besoins spécifiques.`,
    image: '/service.jpg',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-yellow-600 text-center mb-12">
          Nos Services
        </h1>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-600 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
