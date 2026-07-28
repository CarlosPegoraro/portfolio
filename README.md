# Instalação do projeto

## Local/Desenvolvimento

### Sem Docker 

- `npm i` ou `bun i`
- `npm run dev -- --host 0.0.0.0` ou `bun run dev -- --host 0.0.0.0`

### Com docker

- `docker compose -f docker/compose.yaml up --build`

## Produção
- `docker compose -f docker/compose.prod.yaml up --build`