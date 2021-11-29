function clearContainers() {
  CONTAINER_IDS=$(docker ps -a | awk '($2 ~ /indy_pool/) {print $1}')
  CONTAINER_IDS="$CONTAINER_IDS $(docker ps -a | awk '($2 ~ /von-network-base/) {print $1}')"
  if [ -z "$CONTAINER_IDS" -o "$CONTAINER_IDS" == " " ]; then
    echo "---- No containers available for deletion ----"
  else
    docker rm -f $CONTAINER_IDS
  fi
}

clearContainers

# docker build -f indy-pool.dockerfile -t indy_pool .
# docker run --name indy_pool --network von_von -itd -p 9701-9708:9701-9708 indy_pool

cd von-network

./manage build
./manage start "LEDGER_INSTANCE_NAME=Ajou Self-Sovereign"



