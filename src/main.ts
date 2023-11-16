#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as WebSocket from 'ws'
import http from 'http'

// Extract the port number from the command line arguments.
const argv = yargs(hideBin(process.argv))
  .option('port', {
    alias: 'p',
    describe: 'Port to run the WebSocket server on',
    type: 'number',
    default: 8181,
  })
  .parseSync()

const PORT = argv.port

// Create an HTTP server that will serve as the foundation for WebSocket communication.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('WebSocket server is running')
})

// Create a WebSocket server instance and attach it to the HTTP server.
const wss = new WebSocket.Server({ server })

// Event listener for when a client establishes a WebSocket connection.
wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected')

  // Handle incoming messages from the connected client.
  ws.on('message', (message: string) => {
    console.log(`Received message: ${message}`)

    // Send the received message back to the client.
    ws.send(`Server says: ${message}`)
  })

  // Event listener for when the WebSocket connection is closed.
  ws.on('close', () => {
    console.log('Client disconnected')
  })
})

// Start the HTTP server and listen for WebSocket connections on the specified port.
server.listen(PORT, () => {
  console.log(`WebSocket server is listening on port ${PORT}`)
})
