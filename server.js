import express from 'express';
import cors from 'cors';
import clientesRoutes from './routes/cliente.js';

const app = express();

// Configuração do CORS
const corsOptions = {
    origin: 'https://oficina-front-gules.vercel.app', // Substitua pela URL real do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],    // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/cliente', clientesRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando');
});

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}

export default app;