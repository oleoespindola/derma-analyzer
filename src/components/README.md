⬆️ [Voltar ao início](../../README.md)

# Components

Este pacote cont m componentes reutiliz veis do React, incluindo um bot o personaliz vel, um link, um componente de hist rico de imagens analisadas, um componente de entrada de imagem, um componente de aviso e componentes de autentica o.

# Sumário

* [Button](#button)
* [GitHub](#github)
* [HistoryComponent](#historycomponent)
* [ImgInput](#imginput)
* [Link](#link)
* [Warning](#warning)

## Button

Componente de botão personalizável.

## GitHub

Componente que renderiza um link para o repositório do Derma Analyzer e API.

## HistoryComponent

Componente que renderiza um item do histórico de análises.
Ele precisa do `imageURL`, `createdAt` e `prediction` para renderizar o item do histórico corretamente.

## ImgInput

Componente que renderiza um input para upload de imagens.

## Link

Componente que renderiza um link para outra página, basicamente uma tag `<a>` personalizada.

## Warning

Componente que renderiza um aviso de erro. Ele recebe um argumento `text`, que é a mensagem a ser exibida no aviso.
