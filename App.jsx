import React from 'react'

export default function App() {
  return (
    <div className="font-sans text-white bg-black">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-orange-500">
        <h1 className="text-2xl font-bold">FoodiesKaFanda</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#videos" className="hover:text-black">Videos</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center py-16 bg-black">
        <h2 className="text-4xl font-bold mb-4">Desi Street Food Reviews</h2>
        <p className="text-lg mb-6">Authentic taste, real streets, honest reviews!</p>
        <a
          href="https://youtube.com"
          target="_blank"
          className="bg-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600"
        >
          Watch Now
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-4">About FoodiesKaFanda</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          FoodiesKaFanda is all about exploring the best street food in India.
          From spicy chaat to sizzling frankies, we bring you honest reviews and vlogs.
        </p>
      </section>

      {/* Featured Videos */}
      <section id="videos" className="py-16 px-6 text-center bg-black">
        <h3 className="text-3xl font-bold mb-8">Featured Videos</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Video 1", "Video 2", "Video 3"].map((video, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <img
                src={`https://via.placeholder.com/300x180?text=${video}`}
                alt={video}
                className="rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold">{video}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-6 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-black text-center border-t border-gray-700">
        <p className="text-gray-400">&copy; 2025 FoodiesKaFanda | All Rights Reserved</p>
        <div className="mt-2 space-x-4">
          <a href="https://instagram.com" target="_blank" className="hover:text-orange-500">Instagram</a>
          <a href="https://youtube.com" target="_blank" className="hover:text-orange-500">YouTube</a>
        </div>
      </footer>
    </div>
  )
}