import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://klc-app.vercel.app',
      lastModified: new Date(),
    },
    // {
    //   url: 'https://acme.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://acme.com/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ]
}