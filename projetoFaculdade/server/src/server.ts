import express, { request, response } from 'express'
import cors from 'cors'
import { Prisma, PrismaClient } from '@prisma/client'

import * as EmailValidator from 'email-validator'

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
    log: ['query']
  })

/////////////////////////////////////////////    PRODUCT ROUTES

app.get('/products', async (request, response) => {
    const products = await prisma.product.findMany()
    
    return response.status(200).json([products])
})

app.get('/products/:id', async (request, response) => {
    const product = await prisma.product.findUnique({
        where: {
            id: request.params.id
        }
    })
    if(!product) {
        return response.status(404).json({
            error: "Product does not exist!"
        })
    }
    return response.status(200).json(product)
})


app.patch('/product/:id', async (request, response) => {
    const body: any = request.body

    const {name, price, description, photosUrl} = body


    const product = await prisma.product.update({
        where: {
            id: request.params.id,
        },
        data: {
            name,
            price,
            description,
            photosUrl,
        }
    })

    return response.status(200).json(product)
})


app.post('/product',async (request, response) => {
    const body: any = request.body

    const product = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price,
            description: body.description,
            photosUrl: body.photosUrl,
        }
    })
    if(product) {
        return response.status(201).json(product)
    }
})


//////////////////////////////////////////////////////////////////////


////////////////////// ROTAS USER


app.post('/users', async (request, response) => {
    const body: any = request.body  
    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password
        }
    })
    if (EmailValidator.validate(body.email) == false) {
        return response.status(400).json({
            error: "Invalid email!"
        })
    }
      return response.status(201).json(user)
    })
    
///////////////////////////////////


app.listen(3333)