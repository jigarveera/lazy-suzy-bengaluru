import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { featured } from '../../constants/site.constant'

export default function MenuRotator() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return undefined
    const interval = window.setInterval(() => setActive(index => (index + 1) % featured.length), 2000)
    return () => window.clearInterval(interval)
  }, [paused, reducedMotion])

  return (
    <section className="menu-feature section-pad" id="featured" aria-labelledby="featured-heading">
      <div className="shell menu-feature-grid">
        <div className="feature-intro">
          <span className="eyebrow">A FEW FAVOURITES</span>
          <h2 id="featured-heading">Something for <em>every mood.</em></h2>
          <p>From a proper brunch to the last spoonful of dessert, take your time choosing.</p>
          <Link to="/shop" className="button button-outline">Browse the menu <ArrowUpRight size={17} /></Link>
        </div>
        <div className="rotator-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }} onTouchStart={() => setPaused(true)} onTouchEnd={() => setPaused(false)} onTouchCancel={() => setPaused(false)}>
          <div className="rotator-stage" aria-live="off">
            <div className="rotator-circle" aria-hidden="true" />
            {featured.map((item, index) => (
              <article className={`rotator-slide ${active === index ? 'is-active' : index < active ? 'is-past' : ''}`} key={item.name} aria-hidden={active !== index}>
                <div className="rotator-visual"><img src={item.image} alt="" loading={index ? 'lazy' : 'eager'} /></div>
                <div className="rotator-copy"><span>{item.category}</span><h3>{item.name}</h3><p>₹{item.price}</p></div>
              </article>
            ))}
          </div>
          <div className="rotator-controls">
            <div className="rotator-dots" aria-label="Featured items">
              {featured.map((item, index) => <button key={item.name} className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} aria-label={`Show ${item.name}`} aria-current={index === active ? 'true' : undefined} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
