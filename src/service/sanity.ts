import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    token: process.env.SANITY_STUDIO_TOKEN,
    apiVersion: '2024-05-16',
    useCdn: false
})

