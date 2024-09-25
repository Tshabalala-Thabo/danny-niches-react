import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Menu, X } from 'lucide-react'; // Importing icons from lucide-react

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    { type: "Web Development", name: "Custom Websites", image: "/images/1.jpg" },
    { type: "Mobile App", name: "iOS & Android Apps", image: "/images/2.jpg" },
    { type: "UI/UX Design", name: "User-Centric Interfaces", image: "/images/3.jpg" },
    { type: "Cloud Services", name: "Scalable Solutions", image: "/images/4.jpg" },
    { type: "Data Analytics", name: "Insights & Reporting", image: "/images/5.jpg" },
    { type: "Cybersecurity", name: "Threat Protection", image: "/images/1.jpg" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed top-0 left-0 right-0 text-white shadow-md z-50 transition-colors duration-300 ${isScrolled ? 'bg-dark' : 'bg-transparent'}`}>
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="font-bold text-xl">
                <img
                  src="/images/logo.png"
                  alt="Signage showcase"
                  className="w-12"
                />
              </a>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium">
                Products
              </a>
              <a href="#" className="text-base font-medium">
                Solutions
              </a>
              <a href="#" className="text-base font-medium">
                Resources
              </a>
              <a href="#" className="text-base font-medium">
                Contact
              </a>
            </nav>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2">
            <a href="#" className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Products
            </a>
            <a href="#" className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Solutions
            </a>
            <a href="#" className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Resources
            </a>
            <a href="#" className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      )}

      <main className="flex-grow"> {/* Added padding-top to avoid content being hidden behind the fixed header */}
        <div className="relative h-[100vh] bg-dark z-0"> {/* Set z-index to 0 for the hero section */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-dark"></div>
            <div className="w-1/2 relative">
              <img
                src="/images/hero.jpg"
                alt="Signage showcase"
                className="w-full h-full opacity-45 md:opacity-60 object-cover"
              />
            </div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="w-full overflow-visible text-white">
              <h1 className='text-4xl font-semibold'>Visual impact</h1>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-custom-gradient leading-tight mb-4 whitespace-nowrap z-50">
                For Your Business
              </h1>
              <p className="text-xl md:text-2xl opacity-70 mb-8 md:w-1/2">
                Enhance your brand visibility with our high-quality signage solutions, tailored to make your business stand out effortlessly.
              </p>
              <div className="flex justify-start"> {/* Changed this line */}
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-md overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-custom-gradient rounded-md"></span>
                  <span className="absolute inset-0.5 bg-dark rounded-md"></span>
                  <span className="relative z-10 bg-clip-text text-transparent bg-custom-gradient group-hover:text-white font-bold transition duration-300">
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* New section */}
        <section className="w-full py-12 md:py-20 lg:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="md:flex justify-between">
              <div className="flex flex-col justify-center space-y-4 w-5/12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Innovative <span className="bg-clip-text text-transparent bg-custom-gradient">Signage</span> Solutions
                </h2>
                <p className="max-w-[600px] opacity-70 text-muted-foreground md:text-xl">
                  Our cutting-edge signage solutions combine creativity, technology, and expertise to deliver impactful visual communications. From digital displays to traditional signage, we bring your message to life.
                </p>
              </div>
              <div className=" w-5/12">
                <div className="flex items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <img
                    src="/images/create.png"
                    alt="Custom Signage Design"
                    className="size-20 opacity-45 mx-4 md:opacity-60 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Custom Signage Design</h3>
                    <p className="text-sm text-muted-foreground">
                      We create unique, eye-catching signage tailored to your brand, ensuring your message stands out everywhere.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <img
                    src="/images/protect.png"
                    alt="Durable Materials"
                    className="size-20 opacity-45 mx-4 md:opacity-60 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Durable Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      Our signs are crafted from high-quality, durable materials, designed to last in both indoor and outdoor environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <img
                    src="/images/maintenance.png"
                    alt="Installation Services"
                    className="size-20 opacity-45 mx-4 md:opacity-60 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Installation Services</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide professional installation, ensuring your signage is properly placed for maximum visibility and impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-dark'>
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl text-center xl:text-5xl/none mb-10 text-white w-1/2 mx-auto">Comprehensive Signage Solutions for Every Business</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-medium mb-1">{service.type}</p>
                    <h3 className="text-xl bg-clip-text text-transparent bg-custom-gradient font-bold">{service.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='bg-white'>
          <div className='container mx-auto px-4 py-16'>
            <div className='flex flex-col md:flex-row md:w-9/12 mx-auto items-center justify-center'>
              <svg className="w-full md:w-1/2 h-auto" viewBox="0 0 400 100">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF4365" />
                    <stop offset="100%" stopColor="#F6019D" />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3" />
                  </filter>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="48"
                  fontWeight="bold"
                  fill="url(#gradient)"
                  filter="url(#shadow)"
                >
                  OUR MISSION
                </text>
              </svg>
              <p className="text-lg md:text-xl text-center md:text-left md:w-1/2 mt-4 md:mt-0 md:ml-8 text-gray-700">
                Deliver innovative, high-quality signage solutions that enhance brand visibility and success.
              </p>
            </div>
          </div>
        </section>
        <section className='relative flex bg-dark items-center justify-end'>
          <div className='h-full absolute top-0 right-0 -z-10 w-7/12 z-0 bg-custom-gradient'>
          </div>
          <div className='h-full absolute -top-14 left-0  w-6/12 bg-green-300'>
            <img
              src="/images/cta.jpg"
              alt="Signage showcase"
              className="w-full h-full object-cover"
            />          
            </div>
          <div className='container mx-auto z-10 px-4 py-28'>
            <div className='w-1/2 ml-auto pl-4 text-white'>
              <h1 className='text-5xl font-bold'>
                Boost Your Brand with Eye-Catching, High-Quality Custom Signage
              </h1>
              <div className="flex justify-start items-center space-x-4 mt-4"> {/* Changed this line */}
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white overflow-hidden group bg-white"
                >
                  <span className="relative bg-clip-text text-transparent bg-custom-gradient group-hover:text-white font-bold transition duration-300">
                    Get Started
                  </span>
                </a>
                <p>Stand out today!</p>
              </div>
            </div>
          </div>

        </section>
      </main>


    </div>
  );
}
