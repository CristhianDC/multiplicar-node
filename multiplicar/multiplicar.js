const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => { 
    console.log(`=== Tabla de ${base} ===`.green);   
        for(let i = 1; i <= limite; i++){
            console.log(`${base} * ${i} = ${base*i}`);
        }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) =>{

        if(!Number(base)){
            reject(`El valor ${base}, no es un número para Base!!!`);
            return;
        }
        else if(!Number(limite)){
            reject(`El valor ${limite}, no es un número para Limite!!!`);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
            resolve(colors.green(`tabla-${base}.txt`));
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}