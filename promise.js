const {readFile} = require('fs/promises')


// let getText = function(pathFile){
//     return new Promise(function(resolve, reject){
//         readFile('./data/first.txt', 'utf-8', function(error,data){
//             if (error){
//                 reject(error)
//             }
//             resolve(data)
//         })
//     })
// }

// let resultado = function(result){
//     console.log(result)
// }
// let errorF = function(){
//     console.log(error)
// }
// getText('./data/first.txt').then(resultado()).catch(errorF())

// getText('./data/first.txt').then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})

async function read(){
    try{
        const result = await readFile('./data/first.txt', 'utf-8')
        console.log(result)
        const restult2 = await readFile('./data/second.txt', 'utf-8')
        console.log(restult2)
        const result3 = await readFile('./data/newfile.txt', 'utf-8')
        console.log(result3)
        const result4 = await readFile('./data/third.txt', 'utf-8')
        console.log(result4)
    }catch(error){
        console.log(error)
    }
}

read()