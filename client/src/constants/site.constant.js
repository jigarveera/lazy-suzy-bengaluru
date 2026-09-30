export const site = {
  name: 'Lazy Suzy',
  location: 'Indiranagar, Bengaluru',
  address: 'No. 36, 4th Main Corner, 80 Feet Road, HAL 3rd Stage, Indiranagar, Bengaluru 560075',
  phone: '+91 80730 32246',
  phoneHref: 'tel:+918073032246',
  instagram: 'https://www.instagram.com/lazysuzyblr/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Lazy+Suzy+Indiranagar+Bengaluru',
  mapsEmbed: 'https://www.google.com/maps?q=Lazy%20Suzy%2C%20Indiranagar%2C%20Bengaluru&z=16&output=embed',
  dineout: 'https://www.swiggy.com/restaurants/bangalore/indiranagar/lazy-suzy-23322/dineout',
  zomato: 'https://www.zomato.com/bangalore/lazy-suzy-indiranagar',
  googleReviews: 'https://share.google/GTu2s9JeokFMzUWZt',
}

export const photos = {
  burger: '/images/suzy-burger-cutout.png',
  burgerOriginal: '/images/suzy-burger-source.jpg',
  hotChocolate: '/images/suzy-hot-chocolate-cutout.png',
  hotChocolateOriginal: '/images/suzy-raspberry-hot-chocolate-source.jpg',
  benedict: '/images/suzy-benedict-cutout.png',
  pancakes: '/images/suzy-pancakes-cutout.png',
  desserts: '/images/suzy-dessert-source.jpg',
  table: '/images/suzy-table-source.jpg',
  interior: '/images/suzy-interior-source.jpg',
}

// These are named items in the supplied menu. Images are documented separately.
export const featured = [
  { name: 'Signature Salisbury lamb burger', category: 'Gourmet Burgers', price: 510, image: photos.burger, photoCredit: 'Indulge Express' },
  { name: 'Lazy Suzy Benedict', category: 'Eggs to order', price: 295, image: photos.benedict, photoCredit: 'Zomato diner photo' },
  { name: 'Chocolate pancakes', category: 'Signature Pancakes', price: 245, image: photos.pancakes, photoCredit: 'MouthShut diner photo' },
  { name: 'Raspberry Chilly', category: 'Hot Chocolate', price: 310, image: photos.hotChocolate, photoCredit: 'Femina' },
]
