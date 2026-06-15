import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import photo from '../assets/photo.png'
import Background from './Background'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Background />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Photo avec effet glow pulsé */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          className="mx-auto mb-8 w-64 h-64 rounded-full overflow-hidden border-4 border-violet-600 pulse-glow"
        >
          <img
            src={photo}
            alt="Avotriniaina Miadanarivo"
            className="w-full h-full object-cover object-center scale-110"
          />
        </motion.div>

        {/* Badge animé */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-700/50 bg-violet-900/20 backdrop-blur mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-violet-300 text-xs tracking-widest uppercase">Disponible pour un stage</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Avotriniaina
          <span className="block gradient-text">Miadanarivo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-gray-400 text-lg md:text-xl mb-8"
        >
          Développeur d'Application · Université Fianarantsoa (EMIT)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a
            href="https://github.com/Miadanarivo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-700/40 hover:scale-105"
          >
            <FaGithub className="text-lg" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/miadanarivo0403/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-violet-400 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-violet-900/20"
          >
            <FaLinkedin className="text-lg" /> LinkedIn
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-gray-600 hover:text-violet-400 transition-colors animate-bounce"
        >
          <HiArrowDown className="text-2xl mx-auto" />
        </motion.button>
      </div>
    </section>
  )
}
