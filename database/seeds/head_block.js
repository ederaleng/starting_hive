const moment = require('moment')

exports.seed = function(knex) {
  return knex('globals').del()
    .then(function () {
      
      return knex('globals').insert([
        {
          name: 'hive_head_block',
          value: "0",
          created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
          updated_at: moment().format("YYYY-MM-DD HH:mm:ss")
        }
      ]);

    });
};
