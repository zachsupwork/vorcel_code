import React, { useState } from 'react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 min- flex flex-col`}>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
            </svg>
            <h1 className="ml-3 text-2xl font-bold">AdvancedAI</h1>
          </div>
          <button onClick={toggleDarkMode} className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to AdvancedAI</h2>
          <p className="text-xl mb-8">The AI suite for professionals that need function, form, simplicity, and speed.</p>
          <div className="flex justify-center">
            <a href="#features" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Best-in-Class Chats</h3>
              <p>Engage in seamless side-by-side chatting with AI personas.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold mb-2">AI Beams</h3>
              <p>Visualize data with advanced AI-driven visualizations.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold mb-2">AI Calls</h3>
              <p>Conduct professional calls with AI-powered assistance.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Coding Assistance</h3>
              <p>Get help with coding tasks and debugging.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Drawing Tools</h3>
              <p>Create and edit drawings with AI assistance.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <svg className="w-10 h-10 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold mb-2">AI Agents</h3>
              <p>Handle inbound and outbound calling, texting, emails, and booking appointments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Book a Meeting</h2>
          <div className="w-full max-w-2xl mx-auto">
            <iframe
              src="https://calendly.com/booking-appointments-calendly/booking-appointments-discussion"
              width="100%"
              height="600"
              frameBorder="0"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">Contact us at <a href="mailto:zachsupwork@gmail.com" className="text-blue-400 hover:text-blue-300">zachsupwork@gmail.com</a> or <a href="tel:438-932-6669" className="text-blue-400 hover:text-blue-300">438-932-6669</a></p>
          <p>&copy; 2023 AdvancedAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
