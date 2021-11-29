
 - `von-network/docker-compose.yml`

```dockerfile
  webserver:
    image: von-network-base
    command: 'bash -c ''sleep 10; ./scripts/start_webserver.sh;'''
    environment:
      - IP=${IP}
      - IPS=${IPS}
      - DOCKERHOST=${DOCKERHOST}
      - LOG_LEVEL=${LOG_LEVEL}
      - RUST_LOG=${RUST_LOG}
      - GENESIS_URL=${GENESIS_URL}
      - ANONYMOUS=${ANONYMOUS}
      - LEDGER_SEED=${LEDGER_SEED}
      - LEDGER_CACHE_PATH=${LEDGER_CACHE_PATH}
      - MAX_FETCH=${MAX_FETCH:-50000}
      - RESYNC_TIME=${RESYNC_TIME:-120}
      - REGISTER_NEW_DIDS=${REGISTER_NEW_DIDS:-True}
      - LEDGER_INSTANCE_NAME=${LEDGER_INSTANCE_NAME:-localhost}
      - WEB_ANALYTICS_SCRIPT=${WEB_ANALYTICS_SCRIPT}
      - INFO_SITE_TEXT=${INFO_SITE_TEXT}
      - INFO_SITE_URL=${INFO_SITE_URL}
    networks:
      - von
    ports:
      - ${WEB_SERVER_HOST_PORT:-9000}:8000
    volumes:
      - ./config:/home/indy/config
      - ./server:/home/indy/server
      - webserver-cli:/home/indy/.indy-cli
      - webserver-ledger:/home/indy/ledger
      - ../../genesis/local.txn:/home/indy/ledger/sandbox/pool_transactions_genesis
```

# `data-holding-institution`
```
"did": "2LcdFPTUDjuqsn6CHzXs5p",
"verkey": "jJYEu8G8zRDsBo2WeGexHsPVnWzhZdTcKE4mUBkqdK3",
```