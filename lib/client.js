import sanityClient from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'rsy6rarl',
    dataset: 'production',
    apiVersion: '2022-04-24',
    useCdn: true,
    token: process.env.SANITY_TOKEN
})

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);