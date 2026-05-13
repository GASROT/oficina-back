# 🔧 API Oficina - Backend

Sistema de gerenciamento de oficina com API RESTful desenvolvido em Node.js com Express e Prisma.

## 📋 Descrição do Projeto

API para gerenciar clientes e seus veículos em uma oficina. O sistema permite cadastrar novos clientes, listar clientes existentes e armazenar informações sobre o total de gastos em serviços.

**Estrutura:**
- Backend (Node.js + Express)
- Frontend (HTML/CSS/JavaScript) - hospedado em Vercel
- Banco de Dados (MongoDB)

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM para banco de dados
- **MongoDB** - Banco de dados NoSQL
- **CORS** - Controle de requisições entre domínios
- **Jest** - Framework de testes
- **Supertest** - Testes de requisições HTTP

## 📁 Estrutura de Pastas

```
oficina-back/
├── controllers/
│   └── clienteController.js      # Controladores com lógica de negócio
├── database/
│   └── prisma.js                 # Inicialização do cliente Prisma
├── generated/
│   └── prisma/                   # Código gerado automaticamente pelo Prisma
│       ├── client.ts             # Cliente TypeScript gerado
│       ├── models.ts             # Modelos de dados
│       ├── enums.ts              # Enumerações
│       ├── index.d.ts            # Tipos TypeScript
│       └── internal/             # Arquivos internos do Prisma
├── media/                        # Pasta para armazenar mídias (opcional)
├── prisma/
│   └── schema.prisma             # Schema do banco de dados
├── routes/
│   └── cliente.js                # Definição das rotas da API
├── tests/
│   └── server.test.js            # Testes automatizados
├── node_modules/                 # Dependências instaladas (git ignore)
├── .env                          # Variáveis de ambiente (git ignore)
├── .gitignore                    # Arquivos a ignorar no git
├── package.json                  # Dependências e scripts do projeto
├── package-lock.json             # Lock file das dependências
├── server.js                     # Arquivo principal do servidor
├── tsconfig.json                 # Configuração TypeScript
└── README.md                     # Documentação principal
```

Para uma documentação detalhada da estrutura, consulte [ESTRUTURA.md](ESTRUTURA.md).


## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v14 ou superior) - [Download aqui](https://nodejs.org)
- **npm** (gerenciador de pacotes do Node) - instala com o Node.js
- **MongoDB** - Você pode usar:
  - MongoDB Atlas (nuvem) - https://www.mongodb.com/cloud/atlas
  - MongoDB local instalado no computador

## 🚀 Como Iniciar o Projeto

### Passo 1: Clonar/Acessar o repositório

```bash
cd oficina-back
```

### Passo 2: Instalar dependências

```bash
npm install
```

### Passo 3: Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/oficina"
NODE_ENV="development"
PORT=3000
```

**Obtendo a DATABASE_URL:**
- No MongoDB Atlas, clique em "Connect" 
- Selecione "Drivers"
- Copie a connection string e substitua `<password>` e `<username>`

### Passo 4: Sincronizar o Prisma com o banco

```bash
npx prisma db push
```

### Passo 5: Iniciar o servidor

```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

## 📝 Endpoints da API

### Listar Clientes
```
GET /cliente
```
**Resposta (200):**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "nome": "João Silva",
    "endereco": "Rua A, 123",
    "veiculo": "Toyota Corolla",
    "total": 450.00
  }
]
```

### Cadastrar Cliente
```
POST /cliente
```
**Body (JSON):**
```json
{
  "nome": "Maria Santos",
  "endereco": "Av. B, 456",
  "veiculo": "Honda Civic",
  "total": 0
}
```

**Resposta (201):**
```json
{
  "mensagem": "Cliente cadastrado",
  "cliente": {
    "id": "507f1f77bcf86cd799439012",
    "nome": "Maria Santos",
    "endereco": "Av. B, 456",
    "veiculo": "Honda Civic",
    "total": 0
  }
}
```

## 📊 Modelo de Dados

### Cliente
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | String | Identificador único (MongoDB ObjectId) |
| nome | String | Nome do cliente |
| endereco | String | Endereço do cliente |
| veiculo | String | Modelo do veículo |
| total | Float | Total gasto em serviços |

## 🧪 Executar Testes

```bash
npm test
```

## 🔒 Configuração CORS

A API está configurada para aceitar requisições apenas do frontend em:
```
https://oficina-front-gules.vercel.app
```

Para modificar, edite em [server.js](server.js#L7):

```javascript
const corsOptions = {
    origin: 'sua-url-do-frontend',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200 
};
```

## 🐛 Troubleshooting

**Erro: "Cannot find module '@prisma/client'"**
```bash
npm install
npx prisma generate
```

**Erro de conexão com MongoDB**
- Verifique se o DATABASE_URL está correto no `.env`
- Confira se seu IP está autorizado no MongoDB Atlas
- Teste a conexão usando MongoDB Compass

**Porta já em uso**
```bash
# Mude a porta no .env
PORT=3001
```

## 📚 Documentação Adicional

- [Documentação Prisma](https://www.prisma.io/docs/)
- [Documentação Express](https://expressjs.com/pt-br/)
- [Documentação MongoDB](https://docs.mongodb.com/)

## 📄 Licença

Este projeto é fornecido como está para fins educacionais.

---

**Desenvolvido com ❤️ para a FATEC**





