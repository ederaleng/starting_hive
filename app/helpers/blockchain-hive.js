const { Hive } = require('@splinterlands/hive-interface');

const hive = new Hive({
	logging_level: 3,
  rpc_error_limit: 5,
  rpc_nodes: process.env.RPC_NODES.split(','),
});

module.exports = { hive }