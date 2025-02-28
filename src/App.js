import React, { useState } from 'react';
import logo from './logo.svg';
import { Menu, X } from 'lucide-react'; // Importing icons from lucide-react

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 text-white shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="relative h-[95vh] bg-dark z-0"> {/* Set z-index to 0 for the hero section */}
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="md:flex justify-between">
              <div className="flex flex-col justify-center space-y-4 w-5/12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Innovative <span className="bg-clip-text text-transparent bg-custom-gradient">Signage</span> Solutions
                </h2>
                <p className="max-w-[600px] opacity-70 text-muted-foreground md:text-xl">
                  Our cutting-edge signage solutions combine creativity, technology, and expertise to deliver impactful visual communications. From digital displays to traditional signage, we bring your message to life.
                </p>
              </div>
              <div className=" w-5/12 space-y-4">
                <div className="flex items-center space-y-2 border-gray-800 p-4 rounded-lg bg-white shadow-md">
                  <img
                    src="/images/create.png"
                    alt="Custom Signage Design"
                    className="size-20 opacity-45 mr-4 md:opacity-60 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Custom Signage Design</h3>
                    <p className="text-sm text-muted-foreground">
                      We create unique, eye-catching signage tailored to your brand, ensuring your message stands out everywhere.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-y-2 border-gray-800 p-4 rounded-lg bg-white shadow-md">
                  <img
                    src="/images/protect.png"
                    alt="Durable Materials"
                    className="size-20 opacity-45 mr-4 md:opacity-60 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Durable Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      Our signs are crafted from high-quality, durable materials, designed to last in both indoor and outdoor environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-y-2 border-gray-800 p-4 rounded-lg bg-white shadow-md">
                  <img
                    src="/images/maintenance.png"
                    alt="Installation Services"
                    className="size-20 opacity-45 mr-4 md:opacity-60 object-cover"
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
      </main>


    </div>
  );
}
