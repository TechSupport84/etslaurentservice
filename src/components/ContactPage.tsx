import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-yellow-600 mb-12 text-center">
          Contactez-Nous
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Informations de Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute demande de devis, partenariat ou information supplémentaire, n'hésitez pas à nous écrire ou à visiter nos bureaux.
            </p>
            <ul className="text-gray-700 space-y-3">
              <li>
                📍 <strong>Adresse :</strong> Avenue Munua n°45, Lubumbashi, Haut-Katanga, RDC
              </li>
              <li>
                📞 <strong>Téléphone :</strong> +243 ********
              </li>
              <li>
                ✉️ <strong>Email :</strong> etsmgbuildersservices@gmail.com
              </li>
              <li>
                🕒 <strong>Heures d'ouverture :</strong> Lun - Sam : 8h00 - 17h00
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-600">Envoyez-nous un message</h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Adresse Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="exemple@email.com"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Votre message ici..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-6 text-yellow-600 text-center">Notre emplacement</h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="MG Builders Location"
              src="https://www.google.com/maps?q=Avenue+Munua+45,+Lubumbashi,+RDC&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
