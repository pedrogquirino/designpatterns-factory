function DataBaseConnection() {
  function start() {
    console.log('> [database] Starting...');
    console.log('> [database] Connecting to postgres...');
    console.log('> [database] Running migrations...');
    console.log('> [database] Starting done!');

    throw new Error('Connection failed.');
  }

  function stop() {
    console.log('> [database] Stopping...');
    console.log('> [database] Closing Postgres conneciton...');
    console.log('> [database] Stopping done!');
  }

  return  {
    start,
    stop
  }
}

module.exports = DataBaseConnection;