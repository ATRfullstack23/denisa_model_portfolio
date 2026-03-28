import life_image from '../assets/denisa_img/life.jpeg'
import life2_image from '../assets/denisa_img/life2.jpeg'
import life3_image from '../assets/denisa_img/life3.jpeg'
import bs1_image from '../assets/denisa_img/bs1.jpeg'
import bs2_image from '../assets/denisa_img/bs2.jpeg'
import bs3_image from '../assets/denisa_img/bs3.jpeg'

/** @typedef {{ id: string, category: string, title: string, description: string, image: string }} PortfolioItem */

/** @type {PortfolioItem[]} */
export const portfolio_items = [
  {
    id: '1',
    category: 'lifestyle',
    title: 'The New Guard',
    description: 'Redefining minimalism in the digital age — monochrome studio series.',
    image: life2_image,
  },
  {
    id: '2',
    category: 'brand_shoots',
    title: 'Structural Elegance',
    description: 'Architectural lines and couture silhouettes for SS lookbook.',
    image: bs1_image,
  },
  {
    id: '3',
    category: 'lifestyle',
    title: 'Inner Light',
    description: 'Natural light on location — soft, intimate frames.',
    image: life_image,
  },
  {
    id: '4',
    category: 'brand_shoots',
    title: 'Campaign Noir',
    description: 'Luxury fragrance campaign — cinematic black and white.',
    image: bs2_image,
  },
  {
    id: '5',
    category: 'brand_shoots',
    title: 'Runway Adjacent',
    description: 'High-contrast studio portraits for emerging designer label.',
    image: bs3_image,
  },
  {
    id: '6',
    category: 'lifestyle',
    title: 'Veil & Form',
    description: 'Study of texture, movement, and negative space.',
    image: life3_image,
  },
]

export const category_labels = {
  all: 'All',
  lifestyle: 'Lifestyle',
  brand_shoots: 'Brand shoots',
}
