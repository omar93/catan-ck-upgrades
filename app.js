import express from 'express'

const app = express()
const port = 3000

app.use(express.static('./svelte/dist/public'))

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})