#!/bin/bash

set -e # Exit on first error

MODE=$1
shift

if [ "$MODE" == "build" ]; then
  python3 -m venv acapyenv
  source ./acapyenv/bin/activate
  pip install --upgrade pip
  pip install aries_cloudagent
  pip install aiohttp
  sudo apt-get install sqlite3 libsqlite3-dev
  pip install -r requirements.txt -r requirements.askar.txt -r requirements.bbs.txt -r requirements.dev.txt -r requirements.indy.txt
elif [ "$MODE" == "start" ]; then
  source ./acapyenv/bin/activate
elif [ "$MODE" == "remove" ]; then
  deactivate
  rm -rf ./acapyenv
else
  echo " "
  echo "MODE ERROR : Please Check mode name..."
  echo " "
  echo "usage ./acapy-venv.sh build"
  echo "usage ./acapy-venv.sh start"
  echo "usage ./acapy-venv.sh start OR remove"
  echo " "
  exit 1
fi