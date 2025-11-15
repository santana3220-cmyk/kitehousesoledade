import React from 'react';
import { MapPin, MessageCircle, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2A3C48] mb-6">
            Entre em contato e venha sentir o vento de Soledade.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.38251347017956!2d-36.51932391140343!3d-5.08425332241195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1762212840284!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Kitehouse Soledade"
            ></iframe>
          </div>


          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[#335B63] rounded-full flex items-center justify-center">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A3C48] mb-2">Localização</h3>
                <p className="text-gray-700 mb-3">Soledade, Rio Grande do Norte</p>
                <a
                  href="https://maps.app.goo.gl/Xwv6k862tVGXHaJM8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#335B63] hover:text-[#2A3C48] font-medium inline-flex items-center gap-2 transition-colors"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[#F2B705] rounded-full flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-[#2A3C48]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A3C48] mb-2">WhatsApp</h3>
                <p className="text-gray-700 mb-3">Entre em contato direto com a gente</p>
                <Button
                  onClick={() => window.open('https://wa.me/558199773987', '_blank')}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#E4405F] via-[#C13584] to-[#833AB4] rounded-full flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A3C48] mb-2">Instagram</h3>
                <p className="text-gray-700 mb-3">Acompanhe nossos dias de vento</p>
                <a
                  href="https://instagram.com/kitehousesoledade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C13584] hover:text-[#833AB4] font-medium inline-flex items-center gap-2 transition-colors"
                >
                  @kitehousesoledade →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-playfair text-[#2A3C48] italic">
            "Kitehouse Soledade — o vento sopra a favor de boas memórias."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;