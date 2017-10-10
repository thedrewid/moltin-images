const MoltinGateway = require('@moltin/sdk').gateway;


const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT,
  client_secret: process.env.MOLTIN_SECRET,
});

