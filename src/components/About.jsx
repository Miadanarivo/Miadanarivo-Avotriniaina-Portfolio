import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import photo from '../assets/photo.png'
import Background from './Background'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaLanguage, FaCertificate, FaChevronDown } from 'react-icons/fa'

const formations = [
  {
    annee: '2025–2026',
    titre: '3ème Année Licence (EMIT)',
    lieu: 'Université Fianarantsoa',
    statut: 'En cours',
    desc: 'Spécialisation en développement d\'applications. Projets avancés en Java, Spring Boot, React et Flutter.',
    couleur: 'border-violet-500',
    badge: 'bg-violet-600',
  },
  {
    annee: '2024–2025',
    titre: '2ème Année Licence (EMIT)',
    lieu: 'Université Fianarantsoa',
    statut: 'Validé ✓',
    desc: 'Approfondissement en algorithmique, base de données, développement web et mobile.',
    couleur: 'border-indigo-500',
    badge: 'bg-indigo-600',
  },
  {
    annee: '2023–2024',
    titre: '1ère Année Licence (EMIT)',
    lieu: 'Université Fianarantsoa',
    statut: 'Validé ✓',
    desc: 'Fondamentaux de l\'informatique : programmation, systèmes, réseaux et mathématiques.',
    couleur: 'border-blue-500',
    badge: 'bg-blue-600',
  },
  {
    annee: '2025',
    titre: 'Baccalauréat',
    lieu: 'Lycée Loterana Rakoto Andrianarijaona',
    statut: 'Obtenu ✓',
    desc: 'Diplôme du baccalauréat obtenu avec succès.',
    couleur: 'border-green-500',
    badge: 'bg-green-600',
  },
  {
    annee: '2019–2020',
    titre: 'BEPC',
    lieu: 'Lycée Raherivelo Ramamonjy',
    statut: 'Obtenu ✓',
    desc: 'Brevet d\'études du premier cycle.',
    couleur: 'border-teal-500',
    badge: 'bg-teal-600',
  },
  {
    annee: '2015–2016',
    titre: 'CEP',
    lieu: 'Lycée Saint Joseph Ouvrier',
    statut: 'Obtenu ✓',
    desc: 'Certificat d\'études primaires.',
    couleur: 'border-gray-500',
    badge: 'bg-gray-600',
  },
]

const experiences = [
  {
    annee: '2025',
    titre: 'Stage — Maintenance Software',
    lieu: 'Cyber Fa Services Ivory',
    statut: 'Terminé ✓',
    desc: 'Maintenance et support logiciel, diagnostic et résolution de bugs, assistance technique.',
    couleur: 'border-orange-500',
    badge: 'bg-orange-600',
  },
  {
    annee: '2025',
    titre: 'Stage Informatique',
    lieu: 'BOA (Bank Of Africa) Fianarantsoa',
    statut: '2 mois ✓',
    desc: 'Stage de 2 mois dans le département informatique d\'une grande banque. Gestion des systèmes et support.',
    couleur: 'border-yellow-500',
    badge: 'bg-yellow-600',
  },
  {
    annee: '2022–2025',
    titre: 'Leader Scout',
    lieu: 'F.L.M Soatsihadino — SCOUT',
    statut: '3 ans',
    desc: 'Leadership d\'une équipe de scouts. Organisation d\'activités, gestion de groupe et développement personnel.',
    couleur: 'border-green-500',
    badge: 'bg-green-600',
  },
]

const infos = [
  { icon: <FaEnvelope />, label: 'Email', val: 'Avotra0403@gmail.com', couleur: 'text-violet-400' },
  { icon: <FaMapMarkerAlt />, label: 'Localisation', val: 'Fianarantsoa, Madagascar', couleur: 'text-red-400' },
  { icon: <FaLanguage />, label: 'Langues', val: 'Malgache · Français · Anglais', couleur: 'text-blue-400' },
  { icon: <FaCertificate />, label: 'Certification', val: 'PIX ✓', couleur: 'text-green-400' },
]

function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-6"
    >
      {/* Ligne verticale */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800`} />

      {/* Point */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        className={`absolute -left-[5px] top-3 w-3 h-3 rounded-full ${item.badge} border-2 border-gray-950 z-10 cursor-pointer`}
        onClick={() => setOpen(!open)}
      />

      {/* Carte cliquable */}
      <motion.div
        whileHover={{ x: 4 }}
        className={`mb-4 border-l-2 ${item.couleur} bg-gray-900/60 hover:bg-gray-900/90 backdrop-blur rounded-xl overflow-hidden transition-all duration-300 cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-violet-400 text-xs font-mono">{item.annee}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${item.badge} text-white`}>
                {item.statut}
              </span>
            </div>
            <p className="text-white font-medium text-sm mt-1">{item.titre}</p>
            <p className="text-gray-500 text-xs">{item.lieu}</p>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaChevronDown className="text-gray-600 text-xs ml-2" />
          </motion.div>
        </div>

        {/* Description accordéon */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="px-4 pb-3 text-gray-400 text-xs leading-relaxed border-t border-gray-800 pt-2">
                {item.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const [onglet, setOnglet] = useState('formation')

  return (
    <section id="about" className="py-24 px-6 relative">
      <Background variant="dark" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-2">Qui suis-je ?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">À Propos</h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Carte bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900/80 backdrop-blur border border-gray-800 hover:border-violet-700/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-violet-900/20 h-full">

              {/* Photo + nom */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div whileHover={{ scale: 1.08 }} className="w-20 h-20 rounded-full overflow-hidden border-2 border-violet-600 shadow-lg shadow-violet-900/30 flex-shrink-0">
                  <img src={photo} alt="Avotriniaina" className="w-full h-full object-cover" />
                </motion.div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Avotriniaina Miadanarivo</h3>
                  <p className="text-violet-400 text-sm">Développeur d'Application</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs">Disponible</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Étudiant en <span className="text-violet-400 font-semibold">3ème année de Licence à l'EMIT</span> (Université Fianarantsoa), passionné par le développement d'applications. Je maîtrise plusieurs langages de programmation et j'ai réalisé des projets concrets en Java, Spring Boot, React.js, Flutter et Nest.js.
              </p>

              {/* Infos */}
              <div className="space-y-3">
                {infos.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-800/40 rounded-xl hover:bg-gray-800/70 transition-all duration-200"
                  >
                    <span className={`${info.couleur} text-sm`}>{info.icon}</span>
                    <div>
                      <p className="text-gray-600 text-xs">{info.label}</p>
                      <p className="text-gray-300 text-xs font-medium">{info.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { val: '9+', label: 'Projets' },
                  { val: '2', label: 'Stages' },
                  { val: '8+', label: 'Langages' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-violet-900/20 border border-violet-800/30 rounded-xl p-3 text-center"
                  >
                    <p className="text-violet-400 font-bold text-xl">{s.val}</p>
                    <p className="text-gray-500 text-xs">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline interactive */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Onglets */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setOnglet('formation')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  onglet === 'formation'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-700/30'
                    : 'border border-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-400'
                }`}
              >
                <FaGraduationCap /> Formation
              </button>
              <button
                onClick={() => setOnglet('experience')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  onglet === 'experience'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-700/30'
                    : 'border border-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-400'
                }`}
              >
                <FaBriefcase /> Expérience
              </button>
            </div>

            {/* Contenu */}
            <AnimatePresence mode="wait">
              <motion.div
                key={onglet}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-1 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin"
              >
                {(onglet === 'formation' ? formations : experiences).map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
