# typescript
some examples in typescript


na pasta do projeto
npm ini -y
npm install typescript -D    ( modo desenvolvedor)

npx tsc -init                   (abreviacao de typescript)
npm install ts-node-dev -D      (alteracoes n precisa reinicializar o arquico)

ir no arquivo package.json , na linha test error mudar pra: 
"dev":"tsnd --transpile-only --ignore-watch node_modules index.ts"


entra na pasta do projeto cmd:(ignora o node_modules,porque ele ja entende javascript, sempre pra desenvolver,ai ignora)
tsnd --transpile-only --ignore-watch node_modules index.ts

depois:(dev é o nome da aplicacao "scripts" no package.json,que mudamos a linha err do transpilação)
npm run dev

