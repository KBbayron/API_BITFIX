const { Server } = require('./server')
const routes = require('./src/routes/index')

const { PORT } = require('./src/config/config')

const server = new Server(PORT, routes)

async function main() {
  await server.listen()
}

main()