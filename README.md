# 📝 Todo App — Full Stack (React + Node + Mongo + Cypress)

Este é um projeto **full stack** desenvolvido com:

- **Backend:** Node.js + Express + MongoDB  
- **Frontend:** React (CRA)  
- **Testes E2E:** Cypress  
- **Testes Backend:** Jest + Supertest  
- **CI/CD:** GitHub Actions  
- **Qualidade:** Coverage + Artefatos de teste  
- **Dev Experience:** Rotas de reset para testes, seed de dados  

---

## 🚀 Funcionalidades

- Criar tarefas  
- Listar tarefas  
- Marcar como concluída  
- Excluir tarefas  
- Persistência em MongoDB  
- Testes automatizados  
- Pipeline CI completo  

---

## 📂 Estrutura do Projeto

```
/backend
  ├── routes
  ├── models
  ├── tests
  ├── seed.js
  └── server.js

/frontend
  ├── src
  ├── public
  ├── cypress
  └── package.json

.github/workflows
README.md
```

---

## 🛠️ Tecnologias

### **Backend**
- Node.js  
- Express  
- Mongoose  
- Jest  
- Supertest  

### **Frontend**
- React  
- React Scripts  
- Cypress  

### **Infra**
- MongoDB  
- GitHub Actions  

---

## ▶️ Como rodar o projeto

### **1. Instalar dependências**

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

---

### **2. Subir o backend**
```bash
cd backend
npm start
```

Ou em modo desenvolvimento (se configurado):
```bash
npm run dev
```

---

### **3. Subir o frontend**
```bash
cd frontend
npm start
```

---

### **4. Seed de dados (opcional)**
```bash
cd backend
npm run seed
```

---

## 🧪 Testes

### **Backend (Jest)**
```bash
cd backend
npm test
```

### **Frontend (Cypress - headless)**
```bash
cd frontend
npm run cypress:run
```

### **Frontend (Cypress - interface)**
```bash
cd frontend
npm run cypress:open
```

---

## 🧹 Resetar banco (para testes)

O backend possui uma rota especial para testes:

```bash
POST http://localhost:4000/test/reset
```

Você pode chamar via curl:

```bash
curl -X POST http://localhost:4000/test/reset
```

---

## 🔄 CI/CD

O projeto inclui:

- Testes backend com cobertura  
- Testes Cypress  
- Upload de artefatos  
- MongoDB como serviço  
- Execução paralela de jobs  

Arquivo: `.github/workflows/ci.yml`

---

## 📄 Licença

Este projeto é open-source e pode ser usado livremente.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Gustavo & Copilot**.
