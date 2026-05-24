const CLOUD = 'dvfn2i84f'

/** Build a Cloudinary image URL from a public ID (no folder prefix). */
export function cloudUrl(publicId, opts = '') {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto${opts}/${publicId}`
}

/** Flipbook page (max width 800px). */
export function cloudFlipPage(publicId) {
  return cloudUrl(publicId, ',w_800')
}

/** Card / cover thumbnail. */
export function cloudCover(publicId) {
  return cloudUrl(publicId, ',w_600')
}
