const http = require("http"),
  terminus = require("@godaddy/terminus"),
  express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

function onSignal() {
  console.log("server is starting cleanup");
  return Promise.all([
    // your clean logic, like closing database connections
  ]);
}

function onShutdown() {
  console.log("cleanup finished, server is shutting down");
}

function healthcheck() {
    console.log("healthcheck");
    
    return Promise.resolve();
}

function livenessCheck() {
    console.log("livenessCheck");
    
    return Promise.resolve();
}

function readinessCheck() {
    console.log("readinessCheck");
    
    return Promise.resolve();
}

const server = http.createServer(app);

terminus(server, {
  // healtcheck options
  healthChecks: {
    "/healthcheck": healthcheck, // a promise returning function indicating service health
    "/_health/liveness": livenessCheck,
    "/_health/readiness": readinessCheck
  },

  // cleanup options
  timeout: 1000, // [optional = 5000] number of milliseconds before forcefull exiting
  signal: 'SIGINT', // [optional = 'SIGTERM'] what signal to listen for relative to shutdown
  onSignal, // [optional] cleanup function, returning a promise (used to be onSigterm)
  onShutdown, // [optional] called right before exiting

  // both
  //logger // [optional] logger function to be called with errors
});

server.listen(3030);
