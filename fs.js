const fs = require('fs')

var first = fs.readFileSync('./data/first.txt', 'utf-8')

var second = fs.readFileSync('./data/second.txt')

console.log(first)

console.log(second.toString())
contenido='this is a third file god'
fs.writeFileSync('./data/third.txt', contenido, {
    flag: 'a'
})