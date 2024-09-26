import React, { useState, useEffect } from 'react';
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
    { type: "Outdoor", name: "Static board", image: "/images/1.jpg" },
    { type: "Wallpaper", name: "Wallpaper wrap", image: "/images/2.jpg" },
    { type: "Indoor", name: "Lightbox", image: "/images/3.jpg" },
    { type: "Outdoor", name: "Faricated board sign", image: "/images/4.jpg" },
    { type: "Others", name: "Letter props", image: "/images/5.jpg" },
    { type: "Cybersecurity", name: "Threat Protection", image: "/images/1.jpg" },
  ]

  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

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
              <a href="#home" className="text-base font-medium" onClick={scrollToSection}>
                Home
              </a>
              <a href="#services" className="text-base font-medium" onClick={scrollToSection}>
                Services
              </a>
              <a href="#contact" className="text-base font-medium" onClick={scrollToSection}>
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
        <div className="md:hidden fixed top-[64px] left-0 right-0 bg-white shadow-md z-40">
          <div className="container mx-auto px-4 py-2">
            <a href="#home" className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900" onClick={scrollToSection}>
              Home
            </a>
            <a href="#services" className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900" onClick={scrollToSection}>
              Services
            </a>
            <a href="#contact" className="block py-2 text-base font-medium text-gray-500 hover:text-gray-900" onClick={scrollToSection}>
              Contact
            </a>
          </div>
        </div>
      )}

      <main className="flex-grow"> {/* Added padding-top to avoid content being hidden behind the fixed header */}
        <section id="home" className="relative h-[100vh] bg-dark z-0"> {/* Set z-index to 0 for the hero section */}
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
                  href="/"
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
        </section>
        {/* New section */}
        <section id="products" className="w-full py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-5/12 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Innovative <span className="bg-clip-text text-transparent bg-custom-gradient">Signage</span> Solutions
                </h2>
                <p className="max-w-[600px] text-base sm:text-lg md:text-xl opacity-70 text-muted-foreground">
                  Our cutting-edge signage solutions combine creativity, technology, and expertise to deliver impactful visual communications. From digital displays to traditional signage, we bring your message to life.
                </p>
              </div>
              <div className="w-full lg:w-6/12 space-y-6">
                {[
                  { title: "Custom Signage Design", description: "We create unique, eye-catching signage tailored to your brand, ensuring your message stands out everywhere.", image: "/images/create.png" },
                  { title: "Durable Materials", description: "Our signs are crafted from high-quality, durable materials, designed to last in both indoor and outdoor environments.", image: "/images/protect.png" },
                  { title: "Installation Services", description: "We provide professional installation, ensuring your signage is properly placed for maximum visibility and impact.", image: "/images/maintenance.png" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 shadow-sm border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className='bg-dark'>
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
        <section className='relative flex flex-col lg:flex-row lg:bg-dark items-center justify-end'>
          <div className='h-full absolute bottom-0 lg:top-0 right-0 -z-10 f-full w-full lg:w-7/12 lg:z-0 bg-custom-gradient'>
          </div>
          <div className='h-full lg:absolute -mt-14 lg:mt-0 -top-14 left-0 w-9/12 lg:w-6/12 bg-green-300'>
            <img
              src="/images/cta.jpg"
              alt="Signage showcase"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='container mx-auto z-10 px-4 py-28'>
            <div className='lg:w-1/2 ml-auto pl-4 text-white'>
              <h1 className='text-5xl font-bold'>
                Boost Your Brand with Eye-Catching, High-Quality Custom Signage
              </h1>
              <div className="flex justify-start items-center space-x-4 mt-4"> {/* Changed this line */}
                <a
                  href="/"
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
        <footer id="contact" className='bg-dark text-white mt-auto'>
          <div className='container mx-auto px-4 py-16'>
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl text-center xl:text-5xl/none mb-10 w-full md:w-1/2 mx-auto">Get in touch</h2>
            <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-16">
              <div>
                <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Contact Us</h3>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-2'>
                    <div className='bg-custom-gradient p-1'>
                      <img
                        src="/images/call.svg"
                        alt="Phone"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <p className='opacity-70'>Phone:</p>
                      <h1 className='text-lg font-bold'>067 315 7397</h1>
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='bg-custom-gradient p-1'>
                      <img
                        src="/images/whatsapp.svg"
                        alt="WhatsApp"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <p className='opacity-70'>WhatsApp:</p>
                      <h1 className='text-lg font-bold'>067 315 7397</h1>
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='bg-custom-gradient p-1'>
                      <img
                        src="/images/email.svg"
                        alt="Email"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <p className='opacity-70'>Email:</p>
                      <h1 className='text-lg font-bold'>admin@dannyniches.co.za</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Follow Us</h3>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-2'>
                    <div className='bg-custom-gradient p-1'>
                      <img
                        src="/images/facebook.png"
                        alt="Facebook"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <p className='opacity-70'>Facebook:</p>
                      <h1 className='text-lg font-bold'>dannyniches</h1>
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='bg-custom-gradient p-1'>
                      <img
                        src="/images/tiktok.png"
                        alt="TikTok"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <p className='opacity-70'>TikTok:</p>
                      <h1 className='text-lg font-bold'>dannyniches</h1>
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='bg-custom-gradient p-1'>
                      <img
                        src="/images/instagram.png"
                        alt="Instagram"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <p className='opacity-70'>Instagram:</p>
                      <h1 className='text-lg font-bold'>@dannyniches</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 opacity-70 text-center">
              <p>&copy; 2024 Danny Niches. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>


    </div>
  );
}
