const sanityClient = require('@sanity/client');

const client = sanityClient({
    projectId: 'y05gym0u',
    dataset: 'production',
    useCdn: true
})

export default client;