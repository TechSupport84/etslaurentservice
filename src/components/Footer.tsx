import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Building2,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-white py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-red-600">
            <Building2 size={20} />
            <h2 className="text-xl font-bold">ETS LAURENT SERVICES</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Nº Impôt : <span className="text-white">A2291346P</span> <br />
            RCCM : <span className="text-white">CD/KNG/RCCM/22-A-00087</span> <br />
            Id. Nat : <span className="text-white">01-H5300N97486J</span>
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-600">Contact & Adresses</h3>
          <p className="text-sm text-gray-300 flex items-start gap-2">
            <MapPin size={16} className="mt-1" />
            <span>
              Kinshasa : N° 30, avenue Tondele, Q/ Masanga-Mbila, C/ Mont-Ngafula <br />
              Lubumbashi : N° 01, avenue Lemera, Q. Kalubwe, C. Lubumbashi
            </span>
          </p>
          <p className="text-sm flex items-center gap-2 mt-3 text-gray-300">
            <Phone size={16} />
            <span>
              +243 898 918 169 – 826 705 973
            </span>
          </p>
          <p className="text-sm flex items-center gap-2 mt-2 text-gray-300">
            <Mail size={16} />
            <a href="mailto:laurentservices19@gmail.com" className="underline hover:text-red-500">
              laurentservices19@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-red-600">Suivez-nous</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Facebook size={16} />
              <a href="#" className="hover:text-red-500 hover:underline">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} />
              <a href="#" className="hover:text-red-500 hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} />
              <a href="#" className="hover:text-red-500 hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={16} />
              <a href="#" className="hover:text-red-500 hover:underline">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Google Map - Kinshasa */}
      <div className="max-w-7xl mx-auto mt-10 rounded-md overflow-hidden">
        <iframe
          title="ETS Laurent Services Kinshasa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1580098595523!2d15.2845!3d-4.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a34ee3b67fdfd%3A0x2eaa97334c1625db!2sKinshasa%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2s!4v1683839847361!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} ETS LAURENT SERVICES. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
