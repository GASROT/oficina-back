import express from 'express';
import cors from 'cors';
import clientesRoutes from './routes/cliente.js';

const app = express();

app.use(cors());
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