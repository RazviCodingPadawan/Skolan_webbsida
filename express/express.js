const express = require ('express')
const path = require('path')

const app = express()

const handleStaticFiles = express.static(path.join(__dirname, '..', 'jensen_skolan_reactjs', 'build'))
app.use(handleStaticFiles)

app.listen(8080, () => {
    console.log('Server started!')
})