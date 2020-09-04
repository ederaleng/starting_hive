const _ = require('lodash')

class Operations {
  async init(op, block_num, block_id, previous, transaction_id, block_time) {
    let type_op = _.get(op, '[0]')
    let data_op = _.get(op, '[1]')
  }
}

const operations = new Operations()

module.exports = { operations }