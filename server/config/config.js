
// =================
//Puerto
//================
process.env.PORT = process.env.PORT || 3000;


// =================
//Entorno
//================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =====================
//Vencimiento del Token
//======================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// =====================
//SEED de autenticación
//======================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// =================
//Base de datos
//================
let urlDB;
if( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe';
} else{
    // urlDB = 'mongodb+srv://strider:HVCmoB3Ooxn0s06O@cafe-ftibt.mongodb.net/test'; SE DEJA DE UTILIZAR ESTA URL PARA QUE NO SE VEAN CONTRASEÑAS EN GITHUB
    urlDB = process.env.NODE_ENV = process.env.MONGO_URI;
}
process.env.urlDB = urlDB;


