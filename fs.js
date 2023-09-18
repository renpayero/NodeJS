const fs = require('fs')

// var first = fs.readFileSync('./data/first.txt', 'utf-8')

// var second = fs.readFileSync('./data/second.txt')

// console.log(first)

// console.log(second.toString())
// contenido='this is a third file god'

// fs.writeFileSync('./data/third.txt', contenido, {
//     flag: 'a'
// })



fs.readFile('./data/first.txt', function(error, data){ //esta funcion es un callback
    if (error){
        console.log(error)
    }
    else
        console.log(data.toString())
    fs.writeFile('./data/newfile.txt', 'archivo creado desde fs', function(error,data){
        console.log(error)
        console.log(data)
    })
})

// CALLBACKS HELL ESTA MALL!!!!!!!!!!!!!!