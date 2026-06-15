import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaJava, FaPython, FaJs, FaPhp, FaHtml5, FaDatabase, FaGithub, FaReact } from 'react-icons/fa'
import { SiSpringboot, SiFlutter, SiNestjs, SiPostgresql } from "react-icons/si"
import Background from './Background'

const categories = [
  {
    id: 'frontend',
    nom: 'Frontend',
    emoji: '🎨',
    couleur: 'from-violet-600 to-indigo-500',
    competences: [
      { nom: 'HTML & CSS', niveau: 85, icon: <FaHtml5 />, desc: 'Interfaces web responsives' },
      { nom: 'JavaScript', niveau: 75, icon: <FaJs />, desc: 'Langage web dynamique' },
      { nom: 'React.js', niveau: 80, icon: <FaReact />, desc: 'Framework UI moderne' },
    ],
  },
  {
    id: 'backend',
    nom: 'Backend',
    emoji: '⚙️',
    couleur: 'from-orange-500 to-red-500',
    competences: [
      { nom: 'Java', niveau: 85, icon: <FaJava />, desc: 'Langage orienté objet' },
      { nom: 'Spring Boot', niveau: 85, icon: <SiSpringboot />, desc: 'Framework Java web' },
      { nom: 'PHP', niveau: 72, icon: <FaPhp />, desc: 'Développement web backend' },
      { nom: 'Nest.js', niveau: 80, icon: <SiNestjs />, desc: 'Framework Node.js scalable' },
      { nom: 'Python', niveau: 80, icon: <FaPython />, desc: 'Langage polyvalent' },
      { nom: "C#", niveau: 70, icon: <span className="font-bold text-xs">C#</span>, desc: 'Langage Microsoft .NET' },
      { nom: 'Langage C', niveau: 65, icon: <span className="font-bold text-xs">C</span>, desc: 'Programmation bas niveau' },
    ],
  },
  {
    id: 'mobile',
    nom: 'Mobile',
    emoji: '📱',
    couleur: 'from-blue-500 to-cyan-400',
    competences: [
      { nom: 'Flutter', niveau: 60, icon: <SiFlutter />, desc: 'Framework mobile cross-platform' },
    ],
  },
  {
    id: 'database',
    nom: 'Base de données',
    emoji: '🗄️',
    couleur: 'from-green-500 to-teal-400',
    competences: [
      { nom: 'SQL', niveau: 80, icon: <FaDatabase />, desc: 'Requêtes et modélisation' },
      { nom: 'PostgreSQL', niveau: 80, icon: <SiPostgresql />, desc: 'Base de données relationnelle' },
      { nom: 'ACCESS', niveau: 80, icon: <span className="font-bold text-xs">DB</span>, desc: 'Base de données Microsoft' },
    ],
  },
  {
    id: 'outils',
    nom: 'Outils',
    emoji: '🛠️',
    couleur: 'from-gray-500 to-gray-400',
    competences: [
      { nom: 'Git & GitHub', niveau: 85, icon: <FaGithub />, desc: 'Versioning et collaboration' },
      { nom: 'Cisco Packet Tracer', niveau: 65, icon: <span className="text-xs">📡</span>, desc: 'Simulation réseau' },
      { nom: 'Word & ACCESS', niveau: 80, icon: <span className="text-xs font-bold">W</span>, desc: 'Suite bureautique' },
    ],
  },
  {
    id: 'softskills',
    nom: 'Soft Skills',
    emoji: '👑',
    couleur: 'from-pink-500 to-rose-400',
    competences: [
      { nom: 'Leadership', niveau: 90, icon: <span className="text-xs">👑</span>, desc: 'Chef scout — F.L.M' },
      { nom: 'Communication', niveau: 85, icon: <span className="text-xs">💬</span>, desc: 'Français, Malgache, Anglais' },
      { nom: 'Gestion du temps', niveau: 80, icon: <span className="text-xs">⏱</span>, desc: 'Organisation et rigueur' },
    ],
  },
]

function CircleBar({ niveau, couleur }) {
  const r = 28
  const circ = 2 * Math.PI * r
  const offset = circ - (niveau / 100) * circ

  return (
    <svg width="72" height="72" className="rotate-[-90deg]">
      <circle cx="36" cy="36" r={r} fill="none" stroke="#1f2937" strokeWidth="5" />
      <motion.circle
        cx="36" cy="36" r={r}
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        stroke="url(#grad)"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function CompetenceCard({ nom, niveau, icon, desc, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.03 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="bg-gray-900/80 border border-gray-800 hover:border-violet-600/50 rounded-2xl p-5 flex flex-col items-center text-center gap-3 cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/20 group"
    >
      {/* Cercle animé */}
      <div className="relative">
        <CircleBar niveau={niveau} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            animate={{ scale: hovered ? 1.2 : 1 }}
            className="text-violet-400 text-lg"
          >
            {icon}
          </motion.span>
        </div>
      </div>

      {/* Pourcentage animé */}
      <motion.span
        className="text-white font-bold text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {niveau}%
      </motion.span>

      <div>
        <p className="text-white text-sm font-medium group-hover:text-violet-300 transition-colors">{nom}</p>
        <p className="text-gray-500 text-xs mt-1">{desc}</p>
      </div>

      {/* Barre en bas */}
      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${niveau}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [actif, setActif] = useState('frontend')
  const cat = categories.find(c => c.id === actif)

  return (
    <section id="skills" className="py-24 px-6 relative">
      <Background variant="dark" />
      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-2">Ce que je sais faire</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Compétences</h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
        </motion.div>

        {/* Onglets catégories */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActif(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                actif === cat.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-700/30'
                  : 'border border-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-400 bg-gray-900/50'
              }`}
            >
              <span>{cat.emoji}</span> {cat.nom}
            </motion.button>
          ))}
        </motion.div>

        {/* Cartes compétences */}
        <AnimatePresence mode="wait">
          <motion.div
            key={actif}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {cat.competences.map((c, i) => (
              <CompetenceCard key={c.nom} {...c} delay={i * 0.07} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats globales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { val: '8+', label: 'Langages maîtrisés' },
            { val: '9+', label: 'Projets réalisés' },
            { val: '2', label: 'Stages effectués' },
            { val: '3', label: 'Années d\'études' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-gray-900/60 border border-gray-800 hover:border-violet-700/50 rounded-2xl p-6 text-center transition-all duration-300"
            >
              <p className="text-3xl font-bold text-violet-400 mb-1">{s.val}</p>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
