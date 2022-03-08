exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        { id: 1, activity: 'walking', type: 'outdoor' },
        { id: 2, activity: 'running', type: 'outdoor' },
        { id: 3, activity: 'outdoor sports', type: 'outdoor' },
        { id: 4, activity: 'take an umbrella', type: 'indoor' },
        { id: 5, activity: 'do some baking', type: 'indoor' },
        { id: 6, activity: 'grocery shopping', type: 'indoor' },
        { id: 7, activity: 'indoor sports', type: 'indoor' },
        { id: 8, activity: 'read a book', type: 'shelter' },
        { id: 9, activity: 'watch a movie', type: 'shelter' },
        { id: 10, activity: 'stay inside', type: 'shelter' }
      ])
    })
}
