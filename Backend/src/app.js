import cors from 'cors'
import express from 'express'
import { contractRouter } from './Routes/contractRouter.js'
import { customerRouter } from './Routes/customerRouter.js'
const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT ?? 1234

app.use('/customer', customerRouter)
app.use('/contract', contractRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port http:localhost:${PORT}`)
})
