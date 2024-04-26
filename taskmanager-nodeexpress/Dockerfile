# Use uma imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos do pacote e o arquivo package.json
COPY package*.json ./

# Limpe o cache do npm e instale as dependências do projeto
RUN npm cache clean --force
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o aplicativo usará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [ "npm", "start" ]
