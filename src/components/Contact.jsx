import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFacebook, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import Background from './Background'

const SERVICE_ID = 'service_avotra0403'
const TEMPLATE_ID = 'template_z0lzfgf'
const PUBLIC_KEY = 'l3o-KqyZ2HG4BDTVQ'

const infos = [
  { icon: <FaEnvelope />, label: 'Email', valeur: 'Avotra0403@gmail.com', href: 'mailto:Avotra0403@gmail.com', couleur: 'hover:border-violet-600', iconColor: 'text-violet-400' },
  { icon: <FaPhone />, label: 'Téléphone', valeur: '+261 38 78 185 07', href: 'tel:+261387818507', couleur: 'hover:border-violet-600', iconColor: 'text-violet-400' },
  { icon: <FaGithub />, label: 'GitHub', valeur: 'github.com/Miadanarivo', href: 'https://github.com/Miadanarivo', couleur: 'hover:border-gray-500', iconColor: 'text-gray-400' },
  { icon: <FaLinkedin />, label: 'LinkedIn', valeur: 'miadanarivo0403', href: 'https://www.linkedin.com/in/miadanarivo0403/', couleur: 'hover:border-blue-600', iconColor: 'text-blue-400' },
  { icon: <FaFacebook />, label: 'Facebook', valeur: 'Avotriniaina Miadanarivo', href: 'https://web.facebook.com/nomenjanahary.avotriniaina.miadanarivo?locale=fr_FR', couleur: 'hover:border-blue-500', iconColor: 'text-blue-500' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', valeur: '+261 37 66 016 88', href: 'https://wa.me/261376601688', couleur: 'hover:border-green-600', iconColor: 'text-green-400' },
]

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })
  const [erreurs, setErreurs] = useState({})
  const [envoye, setEnvoye] = useState(false)
  const [loading, setLoading] = useState(false)
  const [erreurEnvoi, setErreurEnvoi] = useState('')

  const valider = () => {
    const e = {}
    if (!form.nom.trim()) e.nom = 'Le nom est requis'
    if (!form.email.trim()) e.email = "L'email est requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
    if (!form.message.trim()) e.message = 'Le message est requis'
    else if (form.message.trim().length < 10) e.message = 'Message trop court (min 10 caractères)'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = valider()
    if (Object.keys(e2).length > 0) { setErreurs(e2); return }

    setLoading(true)
    setErreurEnvoi('')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.nom,
          from_email: form.email,
          message: form.message,
          title: `Message de ${form.nom}`,
          email: form.email,
        },
        PUBLIC_KEY
      )
      setEnvoye(true)
      setForm({ nom: '', email: '', message: '' })
      setErreurs({})
    } catch (error) {
      setErreurEnvoi('Erreur lors de l\'envoi. Réessayez ou contactez-moi directement par email.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (erreurs[e.target.name]) setErreurs({ ...erreurs, [e.target.name]: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <Background variant="dark" />
      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-2">Travaillons ensemble</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 mb-6" />
          <p className="text-gray-400 max-w-md mx-auto">
            Disponible pour des opportunités, stages ou collaborations. N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Liens */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-violet-500 rounded-full inline-block" />
              Mes coordonnées
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infos.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`flex items-center gap-3 p-4 bg-gray-900/80 backdrop-blur border border-gray-800 ${info.couleur} rounded-xl transition-all duration-300 group hover:shadow-lg`}
                >
                  <span className={`text-xl ${info.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                    {info.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs mb-0.5">{info.label}</p>
                    <p className="text-gray-200 text-xs font-medium truncate group-hover:text-white transition-colors">
                      {info.valeur}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-indigo-500 rounded-full inline-block" />
              Envoyer un message
            </h3>

            {envoye ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-64 bg-gray-900/80 border border-green-700/40 rounded-2xl p-8 text-center"
              >
                <FaCheckCircle className="text-green-400 text-5xl mb-4" />
                <h4 className="text-white font-semibold text-lg mb-2">Message envoyé ! ✅</h4>
                <p className="text-gray-400 text-sm mb-6">Merci ! Je vous répondrai dans les plus brefs délais.</p>
                <button
                  onClick={() => setEnvoye(false)}
                  className="px-6 py-2 border border-gray-700 hover:border-violet-500 text-gray-400 hover:text-violet-400 rounded-full text-sm transition-all"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl p-8 space-y-5">

                {/* Nom */}
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">Votre nom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Ex: Jean Dupont"
                    className={`w-full bg-gray-800/60 border ${erreurs.nom ? 'border-red-500' : 'border-gray-700'} focus:border-violet-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200`}
                  />
                  {erreurs.nom && <p className="text-red-400 text-xs mt-1">{erreurs.nom}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">Adresse email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Ex: jean@gmail.com"
                    className={`w-full bg-gray-800/60 border ${erreurs.email ? 'border-red-500' : 'border-gray-700'} focus:border-violet-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200`}
                  />
                  {erreurs.email && <p className="text-red-400 text-xs mt-1">{erreurs.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">Votre message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={5}
                    className={`w-full bg-gray-800/60 border ${erreurs.message ? 'border-red-500' : 'border-gray-700'} focus:border-violet-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {erreurs.message ? <p className="text-red-400 text-xs">{erreurs.message}</p> : <span />}
                    <span className="text-gray-600 text-xs">{form.message.length} caractères</span>
                  </div>
                </div>

                {/* Erreur envoi */}
                {erreurEnvoi && (
                  <p className="text-red-400 text-xs bg-red-900/20 border border-red-800 rounded-lg px-3 py-2">
                    ⚠️ {erreurEnvoi}
                  </p>
                )}

                {/* Bouton */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3.5 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-700/30 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <><FaEnvelope /> Envoyer le message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <p className="text-center text-gray-700 text-xs mt-16">
          © 2026 Avotriniaina Miadanarivo · Développeur d'Application
        </p>
      </div>
    </section>
  )
}
