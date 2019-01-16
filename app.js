const argv = require('./config/yargs').argv;
const colores = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(`Listar tabla del ${argv.base} con límite ${argv.limite}`);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colores.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(process.argv);

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.limite);

//console.log('Límite', argv.limite);