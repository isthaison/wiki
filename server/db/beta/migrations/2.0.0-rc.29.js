/* global WIKI */

exports.up = knex => {
  return knex.schema
    .table('pages', table => {
      switch (WIKI.config.db.type) {
        case 'mariadb':
        case 'mysql':
          table.specificType('content', 'LONGTEXT').alter()
          table.specificType('render', 'LONGTEXT').alter()
          break
        case 'mssql':
          table.specificType('content', 'NVARCHAR(max)').alter()
          table.specificType('render', 'NVARCHAR(max)').alter()
          break
      }
    })
}

exports.down = knex => { }
