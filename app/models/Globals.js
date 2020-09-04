const { Model } = require('objection');
const knex = require('./../../database/knex');
const moment = require('moment')

Model.knex(knex)

class GlobalsModel extends Model {
  static get tableName() {
    return 'globals';
  }

  static get idColumn() {
    return 'name';
  }

  $beforeInsert () {
    this.created_at = moment().format("YYYY-MM-DD HH:mm:ss")
    this.updated_at = moment().format("YYYY-MM-DD HH:mm:ss")
  }

  $beforeUpdate () {
    this.updated_at = moment().format("YYYY-MM-DD HH:mm:ss");
  }
}

module.exports = GlobalsModel;