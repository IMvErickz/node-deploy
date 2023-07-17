import Fastify from 'fastify'
import Cors from '@fastify/cors'

async function Main() {
    const app = Fastify({
        logger: true
    })

    app.register(Cors, {
        origin: true
    })


    app.get('/user', async (request, reply) => {
        reply.status(201).send({ Word: 'Hello Word' })
    })

    app.get('/cod', async (request, reply) => {
        reply.status(201).send('Feito')
    })

    app.listen({ port: 3333 })
}

Main()