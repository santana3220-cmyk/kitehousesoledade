import React, { useState, useMemo } from 'react';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Calendar as CalendarIcon, Users, Minus, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

const Hero = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [isGuestPopoverOpen, setIsGuestPopoverOpen] = useState(false);

  const maxAdultsChildren = 6;
  const maxBabies = 5;

  const totalAdultsChildren = adults + children;

  const canIncreaseAdults = totalAdultsChildren < maxAdultsChildren;
  const canIncreaseChildren = totalAdultsChildren < maxAdultsChildren;
  const canIncreaseBabies = babies < maxBabies;

  const handleCheckAvailability = () => {
    // This would link to Airbnb with dates
    const airbnbLink = 'https://www.airbnb.com'; // Replace with actual Airbnb listing link
    window.open(airbnbLink, '_blank');
  };

  const guestSummary = useMemo(() => {
    const parts = [];
    if (adults > 0) parts.push(`${adults} adulto${adults > 1 ? 's' : ''}`);
    if (children > 0) parts.push(`${children} criança${children > 1 ? 's' : ''}`);
    if (babies > 0) parts.push(`${babies} bebê${babies > 1 ? 's' : ''}`);
    return parts.join(', ') || 'Selecione hóspedes';
  }, [adults, children, babies]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_e9460a1c-3541-43e5-b89c-f6f4bb5a1364/artifacts/6bt9fk4e_Enjoy%20your%20vacation%20in%20kitesurfing%20paradise%21%20%23kitesurfing%20%23praiadesoledade%20%23brazil%20%23vacation.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-fadeIn">
          Seu refúgio entre o vento e o mar.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Hospede-se na casa perfeita para amantes do kitesurf e da natureza no litoral do Rio Grande do Norte.
        </p>

        {/* Booking Widget */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Check-in */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-14 border-2 hover:border-[#335B63] transition-colors"
                >
                  <CalendarIcon className="mr-2 h-5 w-5 text-[#335B63]" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-500">Check-in</span>
                    <span className="text-sm">{checkIn ? format(checkIn, 'dd/MM/yyyy', { locale: pt }) : 'Selecione'}</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Check-out */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-14 border-2 hover:border-[#335B63] transition-colors"
                >
                  <CalendarIcon className="mr-2 h-5 w-5 text-[#335B63]" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-500">Check-out</span>
                    <span className="text-sm">{checkOut ? format(checkOut, 'dd/MM/yyyy', { locale: pt }) : 'Selecione'}</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => {
                    const today = new Date(new Date().setHours(0, 0, 0, 0));
                    return date < today || (checkIn && date <= checkIn);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Guests */}
            <Popover open={isGuestPopoverOpen} onOpenChange={setIsGuestPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-14 border-2 hover:border-[#335B63] transition-colors"
                >
                  <Users className="mr-2 h-5 w-5 text-[#335B63]" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-500">Hóspedes</span>
                    <span className="text-sm truncate">{guestSummary}</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="start">
                <div className="space-y-4">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Adultos</p>
                      <p className="text-xs text-gray-500">13 anos ou mais</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        disabled={adults <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{adults}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setAdults(adults + 1)}
                        disabled={!canIncreaseAdults}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Crianças</p>
                      <p className="text-xs text-gray-500">2-12 anos</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        disabled={children <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{children}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setChildren(children + 1)}
                        disabled={!canIncreaseChildren}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Babies */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Bebês</p>
                      <p className="text-xs text-gray-500">Menos de 2 anos</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setBabies(Math.max(0, babies - 1))}
                        disabled={babies <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{babies}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => setBabies(babies + 1)}
                        disabled={!canIncreaseBabies}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t text-xs text-gray-600">
                    <p>• Máximo: 6 pessoas (adultos + crianças)</p>
                    <p>• Bebês: até 5, independente</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Button
            onClick={handleCheckAvailability}
            className="w-full h-14 bg-[#F2B705] hover:bg-[#d9a504] text-[#2A3C48] font-bold text-lg rounded-full transition-all"
          >
            Ver Disponibilidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;