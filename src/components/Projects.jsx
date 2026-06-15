import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaJava, FaMobile, FaJs } from 'react-icons/fa'
import Background from './Background'

const projets = [
  // Java Avancé
  {
    categorie: 'Java Avancé',
    couleurCat: 'text-orange-400',
    titre: 'Gestion de Carte Bancaire',
    description: 'Application web complète de gestion de cartes bancaires avec authentification, transactions et tableau de bord sécurisé.',
    techs: ['Spring Boot', 'HTML', 'CSS', 'JavaScript'],
    couleur: 'from-orange-600/20 to-red-600/10',
    border: 'border-orange-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    categorie: 'Java Avancé',
    couleurCat: 'text-orange-400',
    titre: 'LinkUp — Plateforme Freelance',
    description: 'Plateforme de mise en relation entre freelances et clients. Gestion des offres, candidatures et contrats en ligne.',
    techs: ['Spring Boot', 'HTML', 'CSS', 'JavaScript'],
    couleur: 'from-yellow-600/20 to-orange-600/10',
    border: 'border-yellow-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  // Dev Mobile
  {
    categorie: 'Dev Mobile',
    couleurCat: 'text-green-400',
    titre: 'AgriWeather',
    description: 'Plateforme agricole connectée fournissant des prévisions météo, conseils et alertes personnalisées pour les agriculteurs.',
    techs: ['Flutter', 'React', 'Backend Mobile'],
    couleur: 'from-green-600/20 to-teal-600/10',
    border: 'border-green-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  // JavaScript Avancé
  {
    categorie: 'JavaScript Avancé',
    couleurCat: 'text-blue-400',
    titre: 'Gestion de Carte Bancaire',
    description: 'Application moderne de gestion de cartes bancaires avec interface React et API REST NestJS. Architecture full-stack JavaScript.',
    techs: ['React.js', 'Nest.js', 'JavaScript'],
    couleur: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  // Anciens projets
  {
    categorie: 'Projet Universitaire',
    couleurCat: 'text-violet-400',
    titre: 'Gestion de Boulangerie',
    description: 'Application complète de gestion d\'une boulangerie avec interface multi-langages. Stocks, commandes et clients.',
    techs: ['Java', 'PHP', 'C#', 'JavaScript'],
    couleur: 'from-violet-600/20 to-indigo-600/10',
    border: 'border-violet-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    categorie: 'Projet Universitaire',
    couleurCat: 'text-violet-400',
    titre: 'Gestion de Magasin',
    description: 'Système de gestion de magasin développé en Python avec suivi des ventes, inventaire et rapports.',
    techs: ['Python'],
    couleur: 'from-indigo-600/20 to-blue-600/10',
    border: 'border-indigo-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    categorie: 'Projet Universitaire',
    couleurCat: 'text-violet-400',
    titre: 'Gestion de Moto',
    description: 'Application web de gestion d\'une flotte de motos, avec suivi des locations et état du parc.',
    techs: ['HTML', 'CSS'],
    couleur: 'from-purple-600/20 to-violet-600/10',
    border: 'border-purple-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    categorie: 'Projet Universitaire',
    couleurCat: 'text-violet-400',
    titre: 'Gestion de Contact',
    description: 'Application de gestion de contacts avec algorithme de recherche et tri optimisé.',
    techs: ['Algorithme', 'Python'],
    couleur: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-800/40',
    github: 'https://github.com/Miadanarivo',
  },
  {
    categorie: 'Projet Universitaire',
    couleurCat: 'text-violet-400',
    titre: 'Base de Données Boulangerie',
    description: 'Conception et implémentation d\'une base de données relationnelle pour la gestion d\'une boulangerie.',
    techs: ['ACCESS', 'SQL'],
    couleur: 'from-teal-600/20 to-green-600/10',
    border: 'border-teal-800/40',
    github: 'https://github.com/Miadanarivo',
  },
]

const categories = ['Tous', 'Java Avancé', 'Dev Mobile', 'JavaScript Avancé', 'Projet Universitaire']

import { useState } from 'react'

export default function Projects() {
  const [filtre, setFiltre] = useState('Tous')

  const projetsFiltres = filtre === 'Tous'
    ? projets
    : projets.filter(p => p.categorie === filtre)

  return (
    <section id="projects" className="py-24 px-6 relative">
      <Background />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-2">Ce que j'ai réalisé</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projets</h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltre(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filtre === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-700/30'
                  : 'border border-gray-700 text-gray-400 hover:border-violet-500 hover:text-violet-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetsFiltres.map((p, i) => (
            <motion.div
              key={p.titre + p.categorie}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-gradient-to-br ${p.couleur} border ${p.border} rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-violet-900/30 backdrop-blur`}
            >
              {/* Numéro */}
              <span className="absolute top-4 right-4 text-gray-700 font-bold text-4xl font-mono select-none">
                0{i + 1}
              </span>

              {/* Badge catégorie */}
              <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${p.couleurCat}`}>
                {p.categorie}
              </span>

              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-violet-300 transition-colors">
                {p.titre}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.techs.map(t => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.1 }}
                    className="px-2.5 py-1 bg-gray-900/60 border border-gray-700 text-violet-300 text-xs rounded-full"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors w-fit"
              >
                <FaGithub /> Voir le code
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
