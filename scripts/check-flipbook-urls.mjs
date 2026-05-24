import fs from 'fs'
import https from 'https'

const src = fs.readFileSync('components/MagazineFlip.vue', 'utf8')

const books = []
let current = null
for (const line of src.split('\n')) {
  const bookStart = line.match(/^\s+id: '([^']+)'/)
  if (bookStart) {
    current = { id: bookStart[1], pages: [], cover: null }
    books.push(current)
  }
  const cover = line.match(/cover: cloudCover\('([^']+)'\)/)
  if (cover && current) current.cover = cover[1]
  const page = line.match(/f_auto,q_auto,w_800\/([^']+)/)
  if (page && current) current.pages.push(page[1])
}

function head(url) {
  return new Promise((resolve) => {
    https
      .request(url, { method: 'HEAD', timeout: 12000 }, (res) => {
        resolve(res.statusCode)
      })
      .on('error', () => resolve(0))
      .end()
  })
}

const cloud = (id, opts = ',w_800') =>
  `https://res.cloudinary.com/dvfn2i84f/image/upload/f_auto,q_auto${opts}/${id}`

for (const book of books) {
  if (!book.pages.length && !book.cover) continue
  console.log(`\n=== ${book.id} ===`)
  if (book.cover) {
    const code = await head(cloud(book.cover, ',w_600'))
    if (code !== 200) console.log(`COVER FAIL (${code}): ${book.cover}`)
    else console.log(`COVER OK: ${book.cover}`)
  }
  const failed = []
  for (let i = 0; i < book.pages.length; i++) {
    const id = book.pages[i]
    const code = await head(cloud(id))
    if (code !== 200) failed.push({ index: i + 1, id, code })
  }
  if (failed.length) {
    console.log(`Pages broken: ${failed.length} / ${book.pages.length}`)
    for (const f of failed) console.log(`  #${f.index} (${f.code}) ${f.id}`)
  } else if (book.pages.length) {
    console.log(`All ${book.pages.length} flip pages OK`)
  }
}
