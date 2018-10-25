// Require app dependencies
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  // Parse request URL
  const parsedUrl = url.parse(req.url, true)

  // Get request path
  const path = parsedUrl.pathname

  // trim request path
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')

  // Compare if current path equals hello, if true, show greeting, else, return 404
  if (trimmedPath.toLowerCase() === 'hello') {
    let greeting = { message : 'Hello there! This is my first assignment in Node.js Master Class on Pirple' }

    // Convert greeting to JSON
    const responseJSON = JSON.stringify(greeting)

    // Respond with greeting
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(responseJSON)
  } else {
    res.writeHead(404)
    res.end()
  }
})

// Start the server on port 3000 (localhost:3000)
server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
