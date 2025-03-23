
import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="p-6 space-y-6">
      <motion.h1 className="text-3xl font-bold text-center text-blue-700" initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}}>The Predictor App</motion.h1>
      
      <motion.section className="bg-white p-4 rounded shadow" initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}}>
        <h2 className="text-xl font-semibold text-purple-600">Upload Section</h2>
        <p>Upload athlete data and files here.</p>
      </motion.section>

      <motion.section className="bg-white p-4 rounded shadow" initial={{opacity: 0, x: 30}} animate={{opacity: 1, x: 0}} transition={{delay: 0.2}}>
        <h2 className="text-xl font-semibold text-green-600">Feedback Section</h2>
        <p>Get insights and feedback on your predictions.</p>
      </motion.section>

      <motion.section className="bg-white p-4 rounded shadow" initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{delay: 0.4}}>
        <h2 className="text-xl font-semibold text-red-600">Risk Highlights</h2>
        <p>Visualize athlete risk levels and performance clusters.</p>
      </motion.section>

      <motion.section className="bg-white p-4 rounded shadow" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}}>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Streamlit Dashboard</h2>
        <iframe src="https://the-predictor-1.onrender.com" width="100%" height="600" title="Streamlit Dashboard" className="border rounded" />
      </motion.section>
    </div>
  );
};

export default App;
