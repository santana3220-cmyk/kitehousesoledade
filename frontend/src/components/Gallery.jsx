import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://customer-assets.emergentagent.com/job_e9460a1c-3541-43e5-b89c-f6f4bb5a1364/artifacts/cquxi2jw_%E2%9C%A8Varanda%20Gourmet%20com%20mesa%20r%C3%BAstica%20em%20jaqueira%20para%208%20pessoas%20e%20sof%C3%A1-cama%20para%203%20pessoas.%20Perfeit.jpg',
      alt: 'Varanda Gourmet com mesa rústica'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_e9460a1c-3541-43e5-b89c-f6f4bb5a1364/artifacts/fcr3k122_472907398_1274861540399585_579206140919876840_n..jpg',
      alt: 'Sala de estar colorida'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_e9460a1c-3541-43e5-b89c-f6f4bb5a1364/artifacts/sh7wm2rb_473140004_955137299876025_4485649491468004646_n..jpg',
      alt: 'Banheiro moderno'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_e9460a1c-3541-43e5-b89c-f6f4bb5a1364/artifacts/6bt9fk4e_Enjoy%20your%20vacation%20in%20kitesurfing%20paradise%21%20%23kitesurfing%20%23praiadesoledade%20%23brazil%20%23vacation.jpg',
      alt: 'Vista do deck ao pôr do sol'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_e9460a1c-3541-43e5-b89c-f6f4bb5a1364/artifacts/dxbgy1wy_Welcome%20home%21%20%E2%9C%A8%F0%9F%8C%B8%F0%9F%8C%B5%F0%9F%8C%B4%20%23kitesurf%20%23brazil%20%23praiadesoledade.jpg',
      alt: 'Entrada da casa'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2A3C48] mb-6">
            Espaços pensados para relaxar e viver o momento.
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore os detalhes da Kitehouse Soledade: da mesa esculpida em madeira viva ao deck que reflete o dourado do pôr do sol.
            Cada canto foi criado para quem ama o mar, o vento e o simples prazer de estar presente.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white font-medium">
                  {image.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;