const GlobalsModel = require('../../models/Globals')
const _ = require('lodash')

class Globals {
  async save_block (last_block) {    
    try {
      await GlobalsModel.query().update({ value: last_block }).where("name", "hive_head_block");
    } catch (error) {
      console.log(error)
    }
  }

  async load_block () {
    let last_block, result;
    try {
      result = await GlobalsModel.query().findOne('name', 'hive_head_block');
      last_block = JSON.parse(_.get(result, 'value', 0))
    } catch (error) {
      console.log(error)
    }
    if(last_block !== 0) {
      console.log(`Starting from the block: ${_.get(last_block, 'last_block')} `)
    }
    return last_block
  }
}

const globals = new Globals()

module.exports = { globals }