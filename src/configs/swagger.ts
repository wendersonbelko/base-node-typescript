import swaggerJsDoc from 'swagger-jsdoc'

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Amazing Developer'
      },
      servers: ['http://localhost:3000']
    }
  },
  apis: ['./src/controllers/**/*.docs.ts']
}

export const swagger = swaggerJsDoc(swaggerOptions)
