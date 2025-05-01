import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Made more compact */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Welcome to Mayaware
              </h1>
              <p className="text-xl md:text-3xl mb-6 font-medium">
                Home for the art fair!!
              </p>
              <div className="mt-12 mb-8 p-8 border-2 border-white/30 rounded-xl bg-white/10 backdrop-blur-sm shadow-2xl shadow-white/20 hover:shadow-white/30 transition-shadow duration-300">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">Artists</h3>
                <ul className="space-y-4 text-xl md:text-2xl">
                  <li>Shalini Rao - Handcrafted Dolls & Ornaments</li>
                  <li>Lavanya Shankar - Silk bags and cases</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-[48%] ml-auto mr-8 aspect-square rounded-3xl overflow-hidden bg-white p-4">
                <Image
                  src="/hero-image.png"
                  alt="Hero Image"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - More compact */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Amazing Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 py-12 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
              >
                <div className="text-blue-600 mb-6 text-4xl text-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - More compact */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-1">
              <form className="space-y-4 flex flex-col">
                <div className="w-1/2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col items-center">
              <span className="text-sm text-gray-600 mb-2">Scan for personal orders</span>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.etsy.com/shop/mayaware"
                alt="Mayaware Etsy Shop QR Code"
                className="w-[9.6rem] h-[9.6rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: '👰',
    title: 'Wedding dolls',
    description: 'Couple dolls with custom made outfits',
  },
  {
    icon: '🐦',
    title: 'Christmas Ornaments',
    description: 'Colorful birds for your tree',
  },
  {
    icon: '👜',
    title: 'Purses and Bags',
    description: 'Silk saree purses and wine bags',
  },
];
