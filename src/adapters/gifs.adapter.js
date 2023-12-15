/**
 * @description Adapts a Gif object to a simpler object
 * @example AdaptedGif = {
 * id: 'someId',
 * title: 'someTitle',
 * url: 'someUrl'
 * }
 * @typedef {Object} Gif
 * @property {string} id
 * @property {string} title
 * @property {Object} images
 * @typedef {Object} AdaptedGif
 * @property {string} id
 * @property {string} title
 * @property {string} url
 * @param {Gif} gif
 * @returns {AdaptedGif}
 */

export const createGifAdapter = (gif) => ({
  id: gif.id,
  title: gif.title,
  url: gif?.images?.downsized_medium?.url
})
