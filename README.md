# Derma Analyzer

Este repositório contém o frontend do projeto Derma Analyzer, que se conecta a uma API chamada `derma-analyzer-api`. O objetivo deste projeto é permitir que os usuários enviem imagens para análise, determinando a probabilidade de a imagem estar relacionada a um possível câncer de pele.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```
src/
│
├── components/
│   ├── Button.tsx
│   ├── ImgInput.tsx
│   ├── Link.tsx
│   ├── GitHub.tsx
│   ├── HistoryComponent.tsx
│   └── Warning.tsx
│
├── features/
│   ├── analyzer/
│   │   ├── History.tsx
│   │   └── Prediction.tsx
│   └── auth/
│       ├── Login.tsx
│       └── Register.tsx
│
├── guards/
│   ├── PrivateRoute.tsx
│   └── PublicRoute.tsx
│
├── pages/
│   ├── Analyzer.tsx
│   ├── Auth.tsx
│   └── Welcome.tsx
│
├── services/
│   └── api.ts
│
├── styles/
│   └── styles.css
│
```

## Sumário

- [Components](src/components/README.md)
- [Features](src/features/README.md)
- [Guards](src/guards/README.md)
- [Views](src/views/README.md)
- [Services](src/services/README.md)


## Contribuição

Contribuições são bem-vindas! Se você encontrou algum bug ou tem ideias para melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

