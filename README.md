Teste para vaga Full Pleno - Contele

Este sistema foi desenvolvido para plotar 50.000 coordenadas no mapa e agrupar de forma anão poluir a visualização do mapa.

Possui o backend feito em AdonisJS um framework NodeJs para processamento e resposta do JSON contendo todas as 50.000 coordenadas.

Instalação:

1 - No diretório ./backend, execute o comando "yarn" para instalação das dependecias.

2 - Rode o backend executando o comando "adonis serve --dev" na raiz do projeto. O backend sera executado na URL "http://localhost:3333".

3 - Acesse o diretório ./web, execute o comando "yarn" para instalação das dependecias.

4 - Rode o frontend executando o comando "yarn start". O backend sera executado na URL "http://localhost:3000".

5 - O frontend começa com uma Landing page de pagina inicial, clicando no botão de acesso é possivel acessar o mapa com os pontos. 

SOBRE O BACKEND:
   
   O AdonisJS é um framework completo possuindo suporte nativo token JWT, WebSocket, migrations e etc. Nesse teste ele foi utilizado apenas com uma rota /points e um controller para fazer a leitura do arquivo e retorna como resposta o JSON atraves do endpoint solicitado via GET.

OBRIGADO PELA OPORTUNIDADE :)
