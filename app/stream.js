// hive
const { hive } = require('./helpers/blockchain-hive');
const { operations } = require('./controllers/blockchain/Operations');
const { globals } = require('./controllers/blockchain/Globals');

hive.stream({
  save_state: globals.save_block,
  load_state: globals.load_block,
  on_op: operations.init
})

// ethereum