import React from "react";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-red-700 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-gray-600 text-lg">
            Nous sommes disponibles pour répondre à toutes vos préoccupations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-red-600">
              <Building2 size={22} />
              <h2 className="text-2xl font-bold">ETS LAURENT SERVICES</h2>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Nº Impôt : <strong>A2291346P</strong><br />
              RCCM : <strong>CD/KNG/RCCM/22-A-00087</strong><br />
              Id. Nat : <strong>01-H5300N97486J</strong>
            </p>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-1 text-red-600" />
                <span>
                  Kinshasa : N° 30, avenue Tondele, Q/ Masanga-Mbila, C/ Mont-Ngafula <br />
                  Lubumbashi : N° 01, avenue Lemera, Q. Kalubwe, C. Lubumbashi
                </span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="text-red-600" />
                <span>+243 898 918 169 – 826 705 973</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="text-red-600" />
                <a href="mailto:laurentservices19@gmail.com" className="underline hover:text-red-500">
                  laurentservices19@gmail.com
                </a>
              </li>
              <li>
                🕒 <strong>Heures d'ouverture :</strong> Lun - Sam : 08h00 - 17h00
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-red-700">Envoyez-nous un message</h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Adresse Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="exemple@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Votre message ici..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Map */}
        <div>
          <h2 className="text-2xl font-semibold text-red-700 text-center mb-6">Localisation - Kinshasa</h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="ETS Laurent Services Kinshasa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1580098595523!2d15.2845!3d-4.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a34ee3b67fdfd%3A0x2eaa97334c1625db!2sKinshasa%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2s!4v1683839847361!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
