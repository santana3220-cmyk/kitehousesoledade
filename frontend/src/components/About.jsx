import React from 'react';
import { Sunset, Utensils, Bed, Palmtree, Sun, Leaf, ShowerHead, Flame } from 'lucide-react';

const About = () => {
const features = [
  {
    icon: <Bed className="w-8 h-8" />,
    text: '2 suítes confortáveis com ar-condicionado'
  },
  {
    icon: <ShowerHead className="w-8 h-8" />,
    text: 'Chuveiros quentes para relaxar após o mar'
  },
  {
    icon: <Sun className="w-8 h-8" />,
    text: 'Piscina privativa perfeita para dias ensolarados'
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    text: 'Cozinha equipada para preparar suas refeições favoritas'
  },
  {
    icon: <Flame className="w-8 h-8" />,
    text: 'Varanda gourmet com churrasqueira e área social'
  },
  {
    icon: <Sunset className="w-8 h-8" />,
    text: 'Varanda com vista incrível para o pôr do sol'
  },
  {
    icon: <Palmtree className="w-8 h-8" />,
    text: 'Localização próxima à praia e aos melhores ventos do RN'
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    text: 'Decoração natural e artesanal, com toque rústico e aconchegante'
  }
];

  return (
    <section id="about" className="py-24 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_e9460a1c-3541-43e5-b89c-f6f4bb5a1364/artifacts/cquxi2jw_%E2%9C%A8Varanda%20Gourmet%20com%20mesa%20r%C3%BAstica%20em%20jaqueira%20para%208%20pessoas%20e%20sof%C3%A1-cama%20para%203%20pessoas.%20Perfeit.jpg"
                alt="Varanda Kitehouse Soledade"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F2B705] rounded-full opacity-20 blur-3xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2A3C48] mb-6">
              Conforto rústico, vento constante e o pôr do sol mais bonito de Soledade.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Desfrute de dias inesquecíveis nesta charmosa casa com 2 suítes espaçosas, ambas equipadas com ar-condicionado e chuveiro quente, garantindo bem-estar em qualquer estação.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="text-[#335B63] flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-sm text-gray-700">{feature.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#335B63] hover:bg-[#2A3C48] text-white font-semibold rounded-full transition-colors"
            >
              Conheça cada espaço
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;