# Visualização Interativa dos Chamados e Alocação de Gasistas

## Objetivo

O objetivo desta visualização é permitir que gestores de serviço entendam de forma rápida e intuitiva:
- Quais chamados ainda não foram atendidos.
- Quais estão próximos do tempo-limite de resposta.

Esta visualização busca não apenas fornecer uma ferramenta operacional, mas também ajudar na tomada de decisão estratégica para a alocação eficiente de gasistas e recursos.

## Contexto

Dividimos em duplas os 6 integrantes do GAS&ISTAS, e essa atividade foi feito pelo João Carbone e Patrick Savoia, utilizamos dados reais de chamados e alocações de uma empresa de serviços para criar um mapa interativo que exibe:
- A localização dos gasistas.
- Os chamados em aberto e seus prazos.

### Funcionalidades

- **Zoom e Pan**: Facilita a navegação pelo mapa, permitindo focar em áreas específicas ou ter uma visão geral.

### Tecnologia

Utilizamos o D3.js, esta visualização interativa utiliza dados em formato `.json` para renderizar os gráficos. Animações e interações são implementadas com `d3.drag()` e `d3.zoom()` para uma experiência de usuário fluida e informativa.

## Como Utilizar

Para rodar:

- Instalar : [https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer]
- Clicar com botão direito no index.html
- E abrir com Live Server