import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {

    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`#> Conectado ao banco de dados: ${connection.connection.db.databaseName}`);
    } catch (err) {
        console.error('#> Erro ao conectar ao banco de dados:', err);
        process.exit(1)
    }
};

export default connectDB;