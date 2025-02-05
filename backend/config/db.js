const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/moneyTrack'; 

const dbConnect = async ()=>{
    try {
        await mongoose.connect(mongoURI, {
 
        });
        console.log('✅ Conectado a MongoDB');
      } catch (err) {
        console.error('❌ Error al conectar a MongoDB:', err.message);
        process.exit(1); 
      }
    };

module.exports = dbConnect