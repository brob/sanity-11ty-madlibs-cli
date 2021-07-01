const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: '1priu0fx',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

