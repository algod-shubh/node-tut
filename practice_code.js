//console.log(__dirname)


// const john = 'abc';
// const susan = 'wfwr';
// const naman = 'ewrfgrwe'

// const names = require('./helper');
// //const { john, susan, naman } = require('./helper');

// const dict = require('./helper_3')
// const getname = require('./helper_2');

// console.log(names);
// console.log(dict);

// // const getname = require('./helper_2')

// // const nnameame = (name) =>{
// //     console.log(`hi ${name}`);
// // }

// getname(names.john);
// getname(names.susan);
// getname(names.naman)                    
// // nnameame(john);
// // nnameame(susan);
// // nnameame(naman);

// const os = require('os');

// const user = os.userInfo();
// console.log(user)

//method returns the system uptime in seconds

// console.log(`system uptime is ${os.uptime
// }`)

// const id = os.cpus
// const time = os.freemem
// //const user = os.cpus

// const abc = os.homedir
// const abx = os.hostname
// console.log(id,time,user,abc,abx)


// const path = require('path')

// const abs = path.resolve(__dirname,'Desktop','JWt_tokEN')
// console.log(abs)






const fs = require('fs')
//const writefile = require('fs')
const first = fs.readFile('./content/subfolder/second.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    else{
        console.log(result)
    }
})


//const first = fs.readFile('./content/first.txt', ')
console.log(first)