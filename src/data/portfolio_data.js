import life_image from '../assets/denisa_img/life.jpeg'
import life2_image from '../assets/denisa_img/life2.jpeg'
import life3_image from '../assets/denisa_img/life3.jpeg'
import bs1_image from '../assets/denisa_img/bs1.jpeg'
import bs2_image from '../assets/denisa_img/bs2.jpeg'
import bs3_image from '../assets/denisa_img/bs3.jpeg'

/** @typedef {{ id: string, category: string, title: string, description: string, image: string, photographer?: string }} PortfolioItem */

/** @type {PortfolioItem[]} */
export const portfolio_items = [
  {
    id: '1',
    category: 'brand_shoots',
    title: 'The New Guard',
    description: 'Redefining minimalism in the digital age — monochrome studio series.',
    image: life2_image,
    photographer: '@andres_borella',
  },
  {
    id: '2',
    category: 'collaboration',
    title: 'Structural Elegance',
    description: 'Architectural lines and couture silhouettes for SS lookbook.',
    image: bs1_image,
    photographer: '@ivanodp_photo',
  },
  {
    id: '3',
    category: 'brand_shoots',
    title: 'Inner Light',
    description: 'Natural light on location — soft, intimate frames.',
    image: life_image,
    photographer: '@andres_borella',
  },
  {
    id: '4',
    category: 'collaboration',
    title: 'Studio Noir',
    description: 'Edgy black and white editorial — structured tailoring and striking pose.',
    image: bs2_image,
    photographer: '@_antonio_bellan',
  },
  {
    id: '5',
    category: 'collaboration',
    title: 'Runway Adjacent',
    description: 'High-contrast studio portraits for emerging designer label.',
    image: bs3_image,
    photographer: '@_antonio_bellan',
  },
  {
    id: '6',
    category: 'collaboration',
    title: 'Veil & Form',
    description: 'Study of texture, movement, and negative space.',
    image: life3_image,
    photographer: '@ph_milesi',
  },
]

export const category_labels = {
  all: 'All',
  collaboration: 'Collaboration',
  brand_shoots: 'Brand shoots',
}
