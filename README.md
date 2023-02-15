# 💻 Status Checker | SlowPixels

<h3 align="left">Um bot do Discord que verifica o status de membros em um servidor </h3>


Este projeto consiste em um bot do Discord que realiza a verificação do status de membros em um servidor específico e envia essa informação em um canal de texto, utilizando a **biblioteca Discord.js.**

<h3 align="left"> Funcionalidades: </h3>

**O bot possui duas funcionalidades principais:**

  <li> **SLW 001:** Verificação de status de membros em um servidor. **A cada 30 segundos**, o bot atualiza o status de membros pré-definidos em um objeto e envia a informação em um canal específico, utilizando o objeto MessageEmbed da biblioteca.
  <li> **SLW 002:** Verificação de status de membros em um servidor específico, indicados por seus respectivos IDs. **A cada 30 segundos**, o bot atualiza o status de cada membro e envia a informação em um canal específico, utilizando o objeto `MessageEmbed` da biblioteca.
  
<h3 align="left">Utilização </h3>
Para utilizar o bot, é necessário criar um bot no **Discord Developer** Portal e obter o seu token de autenticação. Em seguida, crie um arquivo `.env` e defina a variável `DISCORD_TOKEN` com o token de autenticação obtido.

Além disso, é necessário configurar os IDs dos membros e do canal em que se deseja enviar as informações de status. Para o `SLW 001`, essa configuração deve ser realizada diretamente no código, alterando o objeto usersToCheck e o `ID do canal` na função `client.channels.cache.get()`. Já para o `SLW 002`, a configuração deve ser realizada no código, alterando os IDs dos membros e do canal diretamente no código.
