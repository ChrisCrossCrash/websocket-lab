# WebSocket Lab

WebSocket Lab is a straightforward tool for running a WebSocket server when you need to test WebSocket clients. Think of it like a [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for WebSocket that you run locally.

## Usage

Start the WebSocket server on port 8181 with this command:

```bash
npx websocket-lab
```

> [!TIP]
> You can find more options, like how to run on a different port, by running `npx websocket-lab --help`.

That's it! Your WebSocket server is up and running. Test your WebSocket clients hassle-free.

> [!NOTE]
> To use WebSocket Lab, you must have Node.js installed on your system. If you don't have Node.js installed, you can download and install it from https://nodejs.org/.

### Interacting with the WebSocket Server

Once the server is running, you can connect to it using any WebSocket client. Here's a simple example using JavaScript in a browser:

1. Open your browser and navigate to [`about:blank`](about:blank).
2. Open the browser's developer console.
3. Copy and paste the following JavaScript code into the console:

```javascript
// Create a new WebSocket instance, connecting to the server running on port 8181
const socket = new WebSocket('ws://localhost:8181')

// Listen for the 'open' event to send a message
socket.onopen = function (event) {
  console.log('Connection established')

  // Now it's safe to send a message
  socket.send('Hello, WebSocket Lab!')
}

// Listen for messages from the server
socket.onmessage = function (event) {
  console.log('Message from server:', event.data)
}

// To close the connection, use `socket.close()`
```

## License

WebSocket Lab is licensed under the MIT License. See the [LICENSE](LICENSE) for details.
