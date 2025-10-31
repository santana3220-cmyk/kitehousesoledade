import React from 'react';
import { Wind, Waves, MapPin } from 'lucide-react';

const Kitesurf = () => {
  return (
    <section id="kitesurf" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#335B63] via-[#2A3C48] to-[#335B63]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Onde o vento nunca para.
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Soledade é um verdadeiro paraíso para kitesurfistas.
            Com ventos constantes, águas rasas e paisagens intocadas, é o cenário ideal para quem quer velejar com liberdade.
            Aqui, o vento sopra todos os dias — e a Kitehouse fica pertinho dos melhores pontos de kite do RN.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2B705] rounded-full mb-4">
              <Wind className="w-8 h-8 text-[#2A3C48]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ventos Constantes</h3>
            <p className="text-white/80">Vento todos os dias do ano, perfeito para iniciantes e profissionais</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2B705] rounded-full mb-4">
              <Waves className="w-8 h-8 text-[#2A3C48]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Águas Rasas</h3>
            <p className="text-white/80">Lagoas tranquilas ideais para aprender e praticar com segurança</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2B705] rounded-full mb-4">
              <MapPin className="w-8 h-8 text-[#2A3C48]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Localização Privilegiada</h3>
            <p className="text-white/80">Acesso direto aos melhores spots de kitesurf do Rio Grande do Norte</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-2xl font-playfair text-white/90 italic mb-8">
            "Sinta o vento, viva o momento."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kitesurf;