import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { reviews, reviewSource } from '../../constants/reviews.constant'

function ReviewCard({ review, duplicate = false }) {
  return (
    <article className="review-card" aria-hidden={duplicate ? 'true' : undefined}>
      <div className="review-card-top">
        <span className="review-stars">GOOGLE REVIEW</span>
        <span className="review-context">{review.context}</span>
      </div>
      <blockquote>“{review.quote}”</blockquote>
      <div className="review-card-bottom"><strong>{review.author}</strong><a href={reviewSource} target="_blank" rel="noreferrer" tabIndex={duplicate ? -1 : 0} aria-label={`View Google listing for review by ${review.author}`}><ArrowUpRight size={17} /></a></div>
    </article>
  )
}

export default function ReviewFlow() {
  const [interacting, setInteracting] = useState(false)
  return (
    <section className="reviews-section section-pad" id="reviews" aria-labelledby="reviews-heading">
      <div className="shell section-heading reviews-heading">
        <div><span className="eyebrow">WORDS FROM THE TABLE</span><h2 id="reviews-heading">The feeling <em>stays.</em></h2></div>
        <a href={reviewSource} target="_blank" rel="noreferrer" className="text-link">Read on Google <ArrowUpRight size={17} /></a>
      </div>
      <div className={`review-marquee ${interacting ? 'is-paused' : ''}`} onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false) }} onTouchStart={() => setInteracting(true)} onTouchEnd={() => setInteracting(false)} onTouchCancel={() => setInteracting(false)}>
        <div className="review-track">
          {reviews.map(review => <ReviewCard key={review.author} review={review} />)}
          {reviews.map(review => <ReviewCard key={`${review.author}-repeat`} review={review} duplicate />)}
        </div>
      </div>
      <div className="shell reviews-note">Review excerpts supplied for this concept and edited for length. Link opens the café’s Google listing.</div>
    </section>
  )
}
