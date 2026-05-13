import prisma from '../database/prisma.js';

async function listarClientes(req, res) {

    try {

        const clientes = await prisma.cliente.findMany();

        res.status(200).json(clientes);

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });

    }

}

async function cadastrarCliente(req, res) {

    try {

        const { nome, endereco, veiculo, total } = req.body;

        const cliente = await prisma.cliente.create({
            data: {
                nome,
                endereco,
                veiculo,
                total: Number(total)
            }
        });

        res.status(201).json({
            mensagem: 'Cliente cadastrado',
            cliente
        });

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });

    }

}

export default {
    listarClientes,
    cadastrarCliente
};