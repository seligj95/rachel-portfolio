const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.WEBSITES_HOSTNAME || 'localhost'
const port = process.env.PORT || 3000

// When deployed to Azure, we need to trust the proxy
const app = next({ 
  dev, 
  hostname, 
  port,
  conf: {
    // Trust proxy headers from Azure Load Balancer
    experimental: {
      trustHost: true
    }
  }
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true)
      
      // Handle the request
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
    console.log(`> Environment: ${process.env.NODE_ENV}`)
    console.log(`> Process PID: ${process.pid}`)
  })
  .on('error', (err) => {
    console.error('Server error:', err)
  })
})
.catch((ex) => {
  console.error('Failed to start server:', ex)
  process.exit(1)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully')
  process.exit(0)
})
