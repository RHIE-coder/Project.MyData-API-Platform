aca-py start \
   --endpoint http://127.0.0.1:8830 \
   --label data-subject.agent \
   --inbound-transport http 0.0.0.0 8830 \
   --outbound-transport http \
   --admin 0.0.0.0 8831 \
   --admin-insecure-mode \
   --recreate-wallet \
   --auto-provision \
   --wallet-type indy \
   --wallet-name subject_wallet \
   --wallet-key subject_wallet_key \
   --genesis-url http://localhost:9000/genesis \
   --trace-target log \
   --trace-tag acapy.events \
   --trace-label data-subject.agent.trace \
   --preserve-exchange-records \
   --auto-ping-connection \
   --auto-respond-messages \
   --auto-accept-requests \
   --auto-accept-invites \
   --auto-respond-credential-proposal \
   --auto-respond-credential-offer \
   --auto-respond-credential-request \
   --auto-store-credential