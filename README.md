# curso-react-redux

- Para o backend do projeto todo-app é necessário ter o mongo instalado e rodando.
 - Executar mongoBD no Mac:
   Criar a pasta /data/db na pasta do usuário;
   Executar no terminal o comando "mongod --dbpath /data/db" a partir da pasta do usuário;

- Executar mongoDB via docker:
    Baixar a imagem do mongo (docker pull mongo);
    Executar o container baseado na imagem recem baixada (docker run --name <nome> -p 27017:27017 -d mongo:latest);

- Para executar o backend em modo dev:
    Executar na raíz do projeto o comando npm run dev

- Para executar o backend em modo produção (pm2):
    Executar na raíz do projeto o comando npm run production

- Para executar o frontend em modo dev:
    Executar na raíz do projeto o comando npm run dev

- Para executar o backend em modo produção (webpack):
    Executar na raíz do projeto o comando npm run production
