const {readFile} = require('fs')



let getText = function(pathFile){
    return new Promise(function(resolve, reject){
        readFile('./data/first.txt', 'utf-8', function(error,data){
            if (error){
                reject(error)
            }
            resolve(data)
        })
    })
}

let resultado = function(result){
    console.log(result)
}
let errorF = function(){
    console.log(error)
}
// getText('./data/first.txt').then(resultado()).catch(errorF())

getText('./data/first.txt').then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})

