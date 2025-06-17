import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postedJobs] = useState([
    {
      title: 'Ingénieur Génie Civil',
      description: 'Responsable de la planification et supervision des projets de construction.',
      date: '15 Juin 2025',
    },
    {
      title: 'Développeur Full-Stack',
      description: 'Création de plateformes web modernes pour les clients variés.',
      date: '12 Juin 2025',
    },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePost = ()=>{
    toast.success("Coming soon...")
  }
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: "url('/digital.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bienvenue chez ETS LAURENT SERVICES
            </h1>
            <p className="text-lg mb-6">
              Solutions complètes en construction, digital, fournitures, industrie et plus.
            </p>
            <button
              onClick={openModal}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-700">Nos Services</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard image="/web.jpg" title="Création de sites web" description="Conception de sites vitrines, e-commerce et plateformes sur mesure pour booster votre présence en ligne." />
          <ServiceCard image="/mobile.jpg" title="Applications Mobiles" description="Développement d'applications Android et iOS adaptées à vos objectifs professionnels." />
          <ServiceCard image="/emploi.jpg" title="Publication des Offres d’Emploi" description="Nous vous accompagnons dans la diffusion de vos offres d’emploi et la recherche de talents." />
          <ServiceCard image="/boost.jpg" title="Boost Business" description="Conseils en stratégie, optimisation des processus et accompagnement pour faire croître votre entreprise." />
          <ServiceCard image="/bureau.jpg" title="Fournitures et Meubles" description="Approvisionnement en équipements de bureau, mobilier, appareils électroniques, consommables et plus encore." />
          <ServiceCard image="/family.webp" title="Numérisation et Recherche Généalogique FamilySearch" description="Nous vous aidons à numériser vos documents et à rechercher vos ancêtres grâce à FamilySearch, pour préserver votre histoire familiale." />
          <ServiceCard image="/gaz.jpg" title="Fourniture de Gaz Argon" description="Approvisionnement fiable en gaz Argon pour les applications industrielles, médicales et techniques spécifiques." />
          <ServiceCard image="/process.jpg" title="Optimisation des Processus Métier" description="Analyse et amélioration de vos opérations pour automatiser les tâches répétitives et réduire les coûts." />
          <ServiceCard image="/industrie.jpg" title="Services Spécifiques à Votre Secteur" description="Prestations sur mesure adaptées à votre domaine d’activité, pour répondre à vos exigences et atteindre vos objectifs." />
        </div>
      </section>

      {/* Jobs Posted Section */}
      <section className="py-12 px-4 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-700">
          Offres d’Emploi Publiées
        </h2>
        <div className="space-y-6">
          {postedJobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{job.description}</p>
              <p className="text-sm text-gray-500 italic mb-4">Publié le : {job.date}</p>
              <button  onClick={handlePost}  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold">
                Postulez maintenant
              </button>
            </div>
          ))}
          {postedJobs.length === 0 && (
            <p className="text-center text-gray-500 italic">
              Aucune offre d'emploi n'a encore été publiée.
            </p>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-10 text-center text-white">
        <h2 className="text-2xl font-semibold mb-4">Un projet en tête ?</h2>
        <p className="mb-6">Contactez-nous pour obtenir un devis rapide et personnalisé.</p>
        <button
          onClick={openModal}
          className="bg-white text-red-600 font-bold px-6 py-2 rounded hover:bg-red-100"
        >
          Nous contacter
        </button>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={closeModal}
              aria-label="Fermer le formulaire"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Demande de devis</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
              <textarea
                placeholder="Votre message / Détails du projet"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows={4}
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const ServiceCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-lg duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-red-700">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <ToastContainer/>
  </div>
);

export default HomePage;
