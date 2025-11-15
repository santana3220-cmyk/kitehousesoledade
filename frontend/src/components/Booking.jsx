import React, { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar as CalendarIcon, Users, Minus, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { useToast } from '../hooks/use-toast';

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: 'Atenção',
        description: 'Por favor, selecione as datas de check-in e check-out.',
        variant: 'destructive'
      });
      return;
    }

    // Construct WhatsApp message
    const message = `Olá! Gostaria de fazer uma reserva na Kitehouse Soledade:

Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}

Check-in: ${format(checkIn, 'dd/MM/yyyy', { locale: pt })}
Check-out: ${format(checkOut, 'dd/MM/yyyy', { locale: pt })}

Hóspedes:
- Adultos: ${adults}
- Crianças: ${children}
- Bebês: ${babies}`;

    const whatsappUrl = `https://wa.me/558199773987?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecionando...',
      description: 'Você será direcionado para o WhatsApp para finalizar sua reserva.'
    });
  };

  const guestSummary = () => {
    const parts = [];
    if (adults > 0) parts.push(`${adults} adulto${adults > 1 ? 's' : ''}`);
    if (children > 0) parts.push(`${children} criança${children > 1 ? 's' : ''}`);
    if (babies > 0) parts.push(`${babies} bebê${babies > 1 ? 's' : ''}`);
    return parts.join(', ') || 'Selecione hóspedes';
  };

  return (
    <section id="booking" className="py-24 bg-[#F7F6F3]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2A3C48] mb-6">
            Reserve sua estadia no paraíso.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Preencha os dados abaixo e entraremos em contato com disponibilidade e valores atualizados.
            Nossa casa acomoda até 6 pessoas (entre adultos e crianças) e até 5 bebês menores de 2 anos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 h-12"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 h-12"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="phone">Telefone/WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-2 h-12"
              placeholder="(81) 99999-9999"
            />
          </div>

          {/* Dates and Guests */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {/* Check-in */}
            <div>
              <Label>Check-in *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-12 mt-2 border-2 hover:border-[#335B63] transition-colors"
                  >
                    <CalendarIcon className="mr-2 h-5 w-5 text-[#335B63]" />
                    <span>{checkIn ? format(checkIn, 'dd/MM/yyyy', { locale: pt }) : 'Selecione'}</span>
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
            </div>

            {/* Check-out */}
            <div>
              <Label>Check-out *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-12 mt-2 border-2 hover:border-[#335B63] transition-colors"
                  >
                    <CalendarIcon className="mr-2 h-5 w-5 text-[#335B63]" />
                    <span>{checkOut ? format(checkOut, 'dd/MM/yyyy', { locale: pt }) : 'Selecione'}</span>
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
            </div>

            {/* Guests */}
            <div>
              <Label>Hóspedes *</Label>
              <Popover open={isGuestPopoverOpen} onOpenChange={setIsGuestPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-12 mt-2 border-2 hover:border-[#335B63] transition-colors"
                  >
                    <Users className="mr-2 h-5 w-5 text-[#335B63]" />
                    <span className="truncate">{guestSummary()}</span>
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
                          type="button"
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
                          type="button"
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
                          type="button"
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
                          type="button"
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
                          type="button"
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
                          type="button"
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
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-[#F2B705] hover:bg-[#d9a504] text-[#2A3C48] font-bold text-sm lg:text-lg rounded-full transition-all"
          >
            Solicitar Reserva via WhatsApp
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Respondemos em até 24h via WhatsApp ou e-mail.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Booking;