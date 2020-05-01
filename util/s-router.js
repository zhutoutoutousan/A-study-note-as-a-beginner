const fs = require('fs');


async function print(path) {
    const dir = await fs.promises.opendir(path);
    console.log(dir)
    for await ( const dirent of dir) {
        console.log(`${__dirname}\\${dirent.name}`)
        if(fs.stat.isDirectory(`${__dirname}\\${dirent.name}`) === true){
            console.log(`This path is a directory, the name is ${dirent.name}`);
        }
        else if(fs.stat.isFile(`${__dirname}\\${dirent.name}`) === true){
            console.log(`This path is a file, the name is ${dirent.name}`);
        }
        else{
            console.log(`This path is neither a directory nor a file`);
        }
    }
}

print('./').catch(console.error);