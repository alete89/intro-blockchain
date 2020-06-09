# Configuración de Geth dockerizado

## Pre-requisitos

Asumimos que tenés instalado y funcionando en tu máquina _Docker_

### Inicio

Tenemos copiado el archivo genesis.json, que debería tener esta apariencia

```json
{
  "config": {
    "chainId": 143,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0
  },
  "alloc": {},
  "difficulty": "0x20000",
  "gasLimit": "0x8880000"
}
```

### Levantamos el entorno

```
docker-compose up
```

## Cómo sigo

Ahora podés conectarte a tu instancia de blockchain desde otro cliente, también dockerizado:

```
docker run --name client --rm -it -v //:/proyecto ethereum/client-go attach ipc://proyecto/data/geth.ipc
```

Y seguir los mismos pasos que [ACÁ](../pages/entorno.md)
