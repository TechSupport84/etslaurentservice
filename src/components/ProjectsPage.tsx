import React from 'react';

const projects = [
  {
    title: 'Construction d’un immeuble commercial à Lubumbashi',
    description:
      'Projet de grande envergure réalisé en 2023, incluant la construction complète d’un immeuble R+3 avec espaces commerciaux, bureaux et parking. Ce projet a mobilisé une équipe pluridisciplinaire pendant 8 mois.',
    image: '/commercial.jpg', // Replace with actual image
  },
  {
    title: 'Installation complète de plomberie dans un complexe résidentiel',
    description:
      'Notre équipe a installé tout le système sanitaire et de drainage d’un ensemble de 15 maisons modernes à Karavia. Le travail comprenait la tuyauterie, les chauffe-eau, les robinetteries et les fosses septiques.',
    image: '/plombier.jpg',
  },
  {
    title: 'Nettoyage post-construction d’un site minier',
    description:
      'Nous avons effectué le nettoyage industriel d’un grand chantier dans la zone minière de Kipushi, assurant la mise en propreté totale des bâtiments avant leur réception par le client.',
    image: '/clean.jpg',
  },
  {
    title: 'Rénovation et peinture d’un complexe administratif',
    description:
      'Un projet de rénovation clés en main comprenant peinture, réparation murale, plomberie et électricité, mené dans un bâtiment administratif appartenant à une entreprise publique.',
    image: '/paint.jpg',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-yellow-600 text-center mb-12">
          Nos Réalisations
        </h1>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
