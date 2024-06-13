import React from 'react'
 
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Next.js Sticker',
  image: 'https://nextjs.org/imgs/sticker.png',
  description: 'Dynamic at the speed of static.',
}

const Necrt = () => {
  return (
    <section>
    {/* Add JSON-LD to your page */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    coming
  </section>
  )
}

export default Necrt