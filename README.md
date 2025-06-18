# Derma Analyzer

Este repositório contém o frontend do projeto Derma Analyzer, que se conecta a uma API chamada `derma-analyzer-api`. O objetivo deste projeto é permitir que os usuários enviem imagens para análise, determinando a probabilidade de a imagem estar relacionada a um possível câncer de pele.

## Sumário
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```
src/
│
├── components/          # Componentes reutilizáveis da aplicação
│   ├── Button.tsx
│   ├── ImgInput.tsx
│   ├── Link.tsx
│   ├── github.tsx
│   ├── historyComponent.tsx
│   └── warning.tsx
│
├── features/            # Funcionalidades principais do app
│   ├── analyzer/
│   │   ├── History.tsx
│   │   └── Prediction.tsx
│   └── auth/
│       ├── Login.tsx
│       └── Register.tsx
│
├── pages/               # Páginas principais da aplicação
│   ├── Analyzer.tsx
│   ├── Auth.tsx
│   └── Welcome.tsx
│
├── services/            # Configurações de serviços, como API
│   └── api.ts
│
├── styles/              # Arquivos de estilo
│   └── styles.css
│
├── App.tsx              # Componente principal da aplicação
└── main.tsx             # Ponto de entrada da aplicação
```

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/derma-analyzer.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd derma-analyzer
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

## Uso

Após iniciar o projeto, acesse `http://localhost:3000` no seu navegador para usar a aplicação. Os usuários poderão fazer login, registrar-se e enviar imagens para análise.

## Contribuição

Contribuições são bem-vindas! Se você encontrou algum bug ou tem ideias para melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

