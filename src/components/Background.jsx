// Composant Background animé — à utiliser dans toutes les sections
export default function Background({ variant = 'default' }) {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: `${Math.random() * 4 + 2}s`,
    delay: `${Math.random() * 4}s`,
  }))

  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    size: Math.random() * 6 + 3,
    floatClass: i % 2 === 0 ? 'float-1' : 'float-2',
    delay: `${i * 0.8}s`,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Gradient de fond */}
      {variant === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
      )}

      {/* Glow principal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-700/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-700/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-3xl" />

      {/* Étoiles scintillantes */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--duration': star.duration,
            '--delay': star.delay,
          }}
        />
      ))}

      {/* Particules flottantes violettes */}
      {particles.map(p => (
        <div
          key={p.id}
          className={`absolute rounded-full bg-violet-500/20 backdrop-blur-sm ${p.floatClass}`}
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Lignes de scan horizontales */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(124,58,237,0.3) 2px, rgba(124,58,237,0.3) 4px)',
        }}
      />
    </div>
  )
}
