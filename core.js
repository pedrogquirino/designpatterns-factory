const createDatabaseConnection = require('./database.js');
const createWebServer = require('./webserver.js');



function createCore(configurations = {}) {
  const database = configurations.database || createDatabaseConnection();
  const webserver = configurations.webserver || createWebServer();

  function start() {
    console.log('> [core] Starting...');
    database.start();
    webserver.start();
    console.log('> [core] Starting done! System runging!');
  }

  function stop() {
    console.log('> [core] Stopping...');
    webserver.stop();
    webserver.start();
    console.log('> [core] Stopping done!');
  }

  return {
    start,
    stop
  }
} 

module.exports = createCore;