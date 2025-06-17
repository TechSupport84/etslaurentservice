import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 text-gray-800 px-4 md:px-16 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-4 tracking-tight">
            À propos de ETS MG BUILDERS SERVICES
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            ETS MG BUILDERS SERVICES est une entreprise professionnelle et dynamique spécialisée dans le <strong className="text-gray-900">génie civil</strong>, la <strong className="text-gray-900">plomberie</strong>, le <strong className="text-gray-900">nettoyage professionnel</strong>, et d'autres services techniques de haute qualité en RDC.
          </p>
        </div>

        {/* Historique */}
        <section>
          <h2 className="text-3xl font-bold text-yellow-600 mb-4 border-b-4 border-yellow-500 inline-block pb-1">
            Historique
          </h2>
          <p className="text-gray-700 text-justify leading-loose text-lg">
            Fondée par une équipe d’experts passionnés par l’ingénierie et les services publics, ETS MG BUILDERS SERVICES est née d’un désir fort de contribuer au développement durable des infrastructures au Katanga. Depuis sa création, elle a participé à de nombreux projets ambitieux, gagnant la confiance d’une clientèle variée grâce à sa fiabilité, sa rigueur et son savoir-faire.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-3xl font-bold text-yellow-600 mb-4 border-b-4 border-yellow-500 inline-block pb-1">
            Notre Mission
          </h2>
          <p className="text-gray-700 text-justify leading-loose text-lg">
            Fournir des services efficaces, éthiques et durables dans les domaines de la construction, de la plomberie et du nettoyage. Nous nous engageons à accompagner nos clients dans la réalisation de leurs projets en plaçant la qualité, l’innovation, et la satisfaction au cœur de notre démarche.
          </p>
        </section>

        {/* Valeurs */}
        <section>
          <h2 className="text-3xl font-bold text-yellow-600 mb-4 border-b-4 border-yellow-500 inline-block pb-1">
            Nos Valeurs
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
            <li><strong className="text-gray-900">Intégrité :</strong> Transparence et honnêteté dans tous nos engagements.</li>
            <li><strong className="text-gray-900">Engagement :</strong> Chaque projet mérite notre entière attention et nos meilleurs efforts.</li>
            <li><strong className="text-gray-900">Innovation :</strong> Des solutions modernes pour des besoins concrets et locaux.</li>
            <li><strong className="text-gray-900">Qualité :</strong> Respect strict des normes techniques et des délais impartis.</li>
          </ul>
        </section>

        {/* Pourquoi nous choisir */}
        <section>
          <h2 className="text-3xl font-bold text-yellow-600 mb-4 border-b-4 border-yellow-500 inline-block pb-1">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-gray-700 text-justify leading-loose text-lg mb-4">
            Choisir ETS MG BUILDERS SERVICES, c’est s’assurer une collaboration avec un partenaire professionnel et humain, soucieux de l’impact et de la satisfaction client.
          </p>
          <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
            <li>Une équipe expérimentée et polyvalente</li>
            <li>Des équipements adaptés et performants</li>
            <li>Des tarifs justes avec un excellent rapport qualité-prix</li>
            <li>Un suivi après-travaux rigoureux</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
