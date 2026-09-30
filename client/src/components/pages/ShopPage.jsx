import { useMemo, useState } from 'react'
import { ArrowUpRight, ArrowRight, Search, SlidersHorizontal, UtensilsCrossed, X } from 'lucide-react'
import { Header, Footer } from '../ui/SiteChrome'
import { menuSections } from '../../constants/menu-view'
import { photos, site } from '../../constants/site.constant'

const itemImages = {
  'Signature Salisbury lamb burger': photos.burgerOriginal,
  'Lazy Suzy Benedict': '/images/suzy-benedict-source.jpg',
  'Raspberry Chilly': photos.hotChocolateOriginal,
}

function ItemCard({ item }) {
  const image = itemImages[item.name] || (item.category === 'Signature Pancakes' && item.name === 'Chocolate' ? '/images/suzy-pancakes-source.png' : null)
  return (
    <article className="menu-card">
      <div className={`menu-card-photo ${image ? '' : 'no-photo'}`}>
        {image ? <img src={image} alt={`Lazy Suzy ${item.name}`} loading="lazy" /> : <><UtensilsCrossed size={27} strokeWidth={1.3} aria-hidden="true" /><span>No verified photo yet</span></>}
      </div>
      <div className="menu-card-body">
        <div className="menu-card-meta"><span>{item.subcategory || item.category}</span><span className="diet-label">{item.vegan ? 'VEGAN' : item.vegetarian ? 'VEG' : ''}</span></div>
        <h3>{item.name}</h3>
        {item.description && <p>{item.description}</p>}
        {item.note && <p className="menu-card-note">{item.note}</p>}
        {item.needsConfirmation && <p className="menu-card-note">Current availability to confirm</p>}
        <div className="menu-card-bottom"><strong>{typeof item.price === 'number' ? `₹${item.price}` : 'Price on enquiry'}</strong><span>At the café</span></div>
      </div>
    </article>
  )
}

export default function ShopPage() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState('all')

  const visible = useMemo(() => menuSections
    .filter(section => selected === 'all' || section.id === selected)
    .map(section => ({ ...section, items: section.items.filter(item => {
      const matchesQuery = `${item.name} ${item.description || ''} ${item.subcategory || ''}`.toLowerCase().includes(query.trim().toLowerCase())
      const matchesFilter = filter === 'all' || (filter === 'vegan' ? item.vegan : item.vegetarian || item.vegan)
      return matchesQuery && matchesFilter
    }) }))
    .filter(section => section.items.length > 0), [query, filter, selected])

  const count = visible.reduce((total, section) => total + section.items.length, 0)

  return (
    <div className="site-page shop-page">
      <Header />
      <main>
        <section className="shop-hero">
          <div className="shell shop-hero-grid">
            <div><span className="eyebrow">EXPLORE THE MENU</span><h1>A little of <em>everything.</em></h1><p>Something savoury, something sweet, and a reason to stay for one more cup.</p><div className="shop-hero-cta"><a className="button button-yellow" href={site.dineout} target="_blank" rel="noreferrer">Reserve on Dineout <ArrowUpRight size={17} /></a><a className="button button-ghost" href={site.phoneHref}>Call the café <ArrowRight size={17} /></a></div></div>
            <div className="shop-hero-image"><img src={photos.hotChocolate} alt="Hot chocolate at Lazy Suzy" /><span>DELI · CAFÉ · PÂTISSERIE</span></div>
          </div>
        </section>
        <div className="shop-toolbar-wrap">
          <div className="shell shop-toolbar">
            <div className="shop-search"><Search size={19} aria-hidden="true" /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Find your next favourite" aria-label="Search the menu" />{query && <button onClick={() => setQuery('')} aria-label="Clear search"><X size={17} /></button>}</div>
            <div className="shop-filters"><SlidersHorizontal size={17} aria-hidden="true" /><button className={filter === 'all' ? 'is-active' : ''} onClick={() => setFilter('all')} aria-pressed={filter === 'all'}>All</button><button className={filter === 'vegetarian' ? 'is-active' : ''} onClick={() => setFilter('vegetarian')} aria-pressed={filter === 'vegetarian'}>Vegetarian</button><button className={filter === 'vegan' ? 'is-active' : ''} onClick={() => setFilter('vegan')} aria-pressed={filter === 'vegan'}>Vegan</button></div>
          </div>
          <div className="shell category-index" aria-label="Menu categories"><button className={selected === 'all' ? 'is-active' : ''} onClick={() => setSelected('all')}>All categories</button>{menuSections.map(section => <button key={section.id} className={selected === section.id ? 'is-active' : ''} onClick={() => setSelected(section.id)}>{section.title}</button>)}</div>
        </div>
        <div className="shell menu-results"><p role="status">Showing {count} menu {count === 1 ? 'item' : 'items'} · prices from supplied menu photographs</p><p>Prices exclude applicable taxes. Confirm current availability and prices with the café.</p></div>
        <div className="shell menu-sections">
          {visible.length ? visible.map(section => <section className="menu-section" key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}><div className="menu-section-heading"><div><span className="eyebrow">THE LAZY SUZY MENU</span><h2 id={`${section.id}-heading`}>{section.title}</h2>{section.note && <p>{section.note}</p>}</div><span>{String(section.items.length).padStart(2, '0')} ITEMS</span></div><div className="menu-grid">{section.items.map((item, index) => <ItemCard key={`${section.id}-${item.subcategory || ''}-${item.name}-${index}`} item={item} />)}</div></section>) : <div className="empty-results"><h2>Nothing matched that search.</h2><p>Try another dish or clear your filters.</p><button className="button button-outline" onClick={() => { setQuery(''); setFilter('all'); setSelected('all') }}>Show the whole menu</button></div>}
        </div>
        <div className="shell shop-note"><p>Looking for the seasonal Christmas set menu? It appears in an older supplied photograph, so it is kept out of this regular menu until the café confirms current availability.</p><a href={site.instagram} target="_blank" rel="noreferrer">Check café updates <ArrowUpRight size={16} /></a></div>
      </main>
      <Footer />
    </div>
  )
}
