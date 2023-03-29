const express = require('express')
const path = require('path');
const cors = require('cors')

const app = express()
app.use(express.static('build'))
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
