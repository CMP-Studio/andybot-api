exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable('user', function (table) {
            table.increments('id').primary()
            table.increments('fb_page_id').unique()
            table.timestamps(false, true)
        }),
    ])
    
}

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTableIfExists('user')
    ]);
}
