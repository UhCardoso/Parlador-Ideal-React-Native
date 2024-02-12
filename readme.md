# Aplicativo Android Parlador ideal
Essa aplicação consome a API desenvolvida em outro projeto. Para acessar o repositório da API Parlador Ideal [clique aqui](https://github.com/UhCardoso/API-Parlador-Ideal)
# ÍNDICE
- 1. SOBRE O PROJETO
- 2. PREPARANDO AMBIENTE PARA EXECUTAR APLICATIVO
    - 2.1. Instalando Expo no computador
    - 2.2 Baixando Expo da PlayStore
    - 2.3 Executando emulador
- 3. RODANDO APLICAÇÃO PARLADOR IDEAL
    - 3.1 Baixando repositório GitHub
    - 3.2 Testando aplicação no android

## 1 - SOBRE O PROJETO
 O Parlador Ideal, consiste em um projeto de Software,  que visa facilitar a troca de ideias libertárias do grupo em questão. Então foi criado um software de blog para que as pessoas do grupo possam compartilhar suas ideias. Para contruir o software foram usadas tecnologias de Frontend e Backend.
<div style="text-align: center;">   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fapplogin.jpg?alt=media&token=25243eed-e669-40a4-bd35-e2a46e16f316" heigth="200" width="200">
</div>

Neste repositório, detalhei o passo a passo para configurar o projeto, no qual consiste em uma aplicação React Native usando a ferramenta Expo.

## 2 - PREPARANDO AMBIENTE PARA EXECUTAR APLICATIVO
Antes de iniciarmos, verifique se você tem o [NodeJS](https://nodejs.org/en/download) instalado em seu computador.

Para executarmos o aplicativo, sem muitas dificuldades, vamos executar a ferramenta expo no nosso computador e em seguida baixar o aplicativo Expo diponível na Play Store para rodarmos o projeto no nosso dispositívo físico, ou você pode executar o emulator android caso você tenha o SDK instalado na sua máquina. Após tudo isso vamos baixar o repositório GitHub do nosso projeto. Siga o passo a passo abaixo:

### 2.1 Instalando Expo no computador
Abra o prompt cmd, dê o comando e aguarde a instalação:
```
npm install --global expo-cli
```
### 2.2 Baixando Expo da PlayStore
Entre na Play Store e baixe o aplicativo Expo para rodarmos e testarmos nossa aplicação no dispositivo físico.
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fexpo.jpg?alt=media&token=67c7be3b-7b41-4362-8c3a-8a91659e03b9" heigth="200" width="200">
</div>

### 2.3 Executando emulador
Caso você tenha um emulador android baixado em seu computador e prefira executar a aplicação nele, você pode executar o seguinte comando:
```
cd C:\Users\<seu usuário>\AppData\Local\Android\Sdk\emulator
```
Execute o comando abaixo para ver os emuladores disponíveis:
```
emulator -list-avds
```

Execute o comando abaixo para executar o emulador android:
```
emulator -avd nome-do-emulador
```

## 3 - RODANDO APLICAÇÃO PARLADOR IDEAL
Agora vamos rodar nossa aplicação no Android para testarmos as funcionalidades dela.
### 3.1 Baixando repositório GitHub
Execute o comando abaixo no prompt para baixar o repositório:
```
git clone https://github.com/UhCardoso/Parlador-Ideal-React-Native.git
```

Entre na pasta do projeto:
```
cd Parlador-Ideal-React-Native
```

Agora dê o comando para instalar as dependências do projeto:

```
npm install
```

### 3.2 Testando aplicação no android
Vamos testar o Parlador Ideal na aplicação android.

Antes de tudo abra o seu prompt de comando para saber em qual IP a sua máquina está rodando. Para isso, rode o seguinte comando:
```
ipconfig
```
E veja qual o ip da sua máquina, para configurarmos o arquivo de conexão com a nossa API.
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fip.png?alt=media&token=acf78d96-186d-42ae-a802-2eb91ffd5645" heigth="600" width="600">
</div>

Vá até o arquivo "```api.ts```" no caminho "```src\services```" do nosso projeto e abra-o.

Na opção "```BaseURL```" cole o endereço IP do seu computador e apósos dois pontos, coloque a porta ```8989``` que foi a porta da API Laravel configurada [neste outro repositório](https://github.com/UhCardoso/API-Parlador-Ideal). Veja o exemplo da rota abaixo:
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fconfapi.png?alt=media&token=db165bb1-5834-4939-bacb-bcf9274ee5d6" heigth="400" width="400">
</div>

Agora dê comando para iniciar a aplicação:
```
npx expo start
```

Ao terminar de executar o comando, você poderá ler o QRcode através do seu aplicativo Expo (instalado na Play Store) para abrir a aplicação em seu dispositivo físico.

Ou você pode clicar na letra "```A```" do teclado para iniciar a instalação do aplicativo em seu emulador android no computador.

## 4 - Resultados da aplicação
- Tela inicial
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fapplogin.jpg?alt=media&token=25243eed-e669-40a4-bd35-e2a46e16f316" heigth="200" width="200">
</div><br><Br>

- Tela de login
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Flogin.jpg?alt=media&token=df0f3b82-14ab-410e-be70-f2bdcaa86f3a" heigth="200" width="200">
</div><br><Br>

- Tela de registrar usuário
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fregistro.jpg?alt=media&token=20ea2b11-b703-475b-a4ee-02f27934120a" heigth="200" width="200">
</div><br><Br>

- Tela de criar postagem
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Feditar.jpg?alt=media&token=c8e7b671-14c6-45bb-a699-9c528ce8e59a" heigth="200" width="200">
</div><br><Br>

- Tela de listagem de posts
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fposts.jpg?alt=media&token=518888ea-8f6a-4350-86d8-8f081199f4d3" heigth="200" width="200">
</div><br><Br>

- Tela de atualizar postagem
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fedit.jpg?alt=media&token=5b6219c2-20f3-4297-bc5e-dae38d3f513f" heigth="200" width="200">
</div><br><Br>

- Opção de excluir postagens
<div>   
    <img src="https://firebasestorage.googleapis.com/v0/b/werlen-dev.appspot.com/o/projects%2Freadmes%2Fparlador%20ideal%2Fexcluir.jpg?alt=media&token=c35f279b-d1e5-44d8-9fe3-44dfd8a11178" heigth="200" width="200">
</div><br><Br>
