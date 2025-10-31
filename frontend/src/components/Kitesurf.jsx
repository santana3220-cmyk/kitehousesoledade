import React, { useRef, useEffect } from 'react';
import { Wind, Waves, MapPin, Zap, Users2, Trophy } from 'lucide-react';

const Kitesurf = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay was prevented:', error);
      });
    }
  }, []);

  return (
    <section id="kitesurf" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#335B63] via-[#2A3C48] to-[#335B63]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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

        {/* Video Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              controls
            >
              <source src="https://customer-assets.emergentagent.com/job_e9460a1c-3541-43e5-b89c-f6f4bb5a1364/artifacts/ih5msfq0_AQNOaELHMKzewkCf6i7qMJk4X_MtpVV-x7k1Y7hz0WBw0Il32TgpobhdHOjG62PSSqlo2my1xP-QkcB1oVdPvIfxiGScg3T5.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-center text-white/80 mt-4 italic">Veja como é velejar nas águas cristalinas de Soledade</p>
        </div>

        {/* Why Soledade is Perfect for Kitesurfing */}
        <div className="mb-12">
          <h3 className="text-3xl font-playfair font-bold text-white text-center mb-12">
            Por que Soledade é perfeito para o kitesurf?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F2B705] rounded-full mb-4">
                <Wind className="w-7 h-7 text-[#2A3C48]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Ventos Constantes</h4>
              <p className="text-white/80 text-sm">
                Ventos alísios sopram de forma consistente durante todo o ano, com velocidades médias entre 15-25 nós. Perfeito para iniciantes e profissionais.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F2B705] rounded-full mb-4">
                <Waves className="w-7 h-7 text-[#2A3C48]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Águas Rasas e Calmas</h4>
              <p className="text-white/80 text-sm">
                Lagoas e áreas de águas rasas ideais para aprender e praticar com segurança. Condições perfeitas para flatwater freestyle.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F2B705] rounded-full mb-4">
                <MapPin className="w-7 h-7 text-[#2A3C48]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Localização Privilegiada</h4>
              <p className="text-white/80 text-sm">
                Acesso direto aos melhores spots de kitesurf do RN. A poucos minutos da praia e de outros pontos famosos como Galinhos e Barra do Cunhaú.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F2B705] rounded-full mb-4">
                <Zap className="w-7 h-7 text-[#2A3C48]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Temporada Estendida</h4>
              <p className="text-white/80 text-sm">
                A melhor época vai de agosto a fevereiro, mas você pode velejar o ano todo. O vento praticamente nunca para em Soledade.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F2B705] rounded-full mb-4">
                <Users2 className="w-7 h-7 text-[#2A3C48]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Comunidade Acolhedora</h4>
              <p className="text-white/80 text-sm">
                Kiters de todo o mundo se encontram em Soledade. Ambiente descontraído e receptivo para quem está começando ou já é experiente.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F2B705] rounded-full mb-4">
                <Trophy className="w-7 h-7 text-[#2A3C48]" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Destino Reconhecido</h4>
              <p className="text-white/80 text-sm">
                Considerado um dos melhores destinos de kitesurf do Brasil. Cenários naturais deslumbrantes que combinam lagoas, dunas e mar aberto.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-playfair text-white/90 italic mb-4">
            "Sinta o vento, viva o momento."
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Seja você iniciante ou experiente, Soledade oferece as condições perfeitas para você aproveitar ao máximo seu kitesurf. 
            A Kitehouse está estrategicamente localizada para que você aproveite cada rajada de vento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kitesurf;