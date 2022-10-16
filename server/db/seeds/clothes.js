exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('clothes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('clothes').insert([
        { id: 1, layers: '1 light layer', condition: 'hot' },
        { id: 2, layers: '1 layer', condition: 'pleasant' },
        { id: 3, layers: '1-2 layers', condition: 'moderate' },
        { id: 4, layers: '2-3 layers', condition: 'chilly' },
        { id: 5, layers: '3+ layers', condition: 'freezing' },
        { id: 6, layers: 'stay inside', condition: 'below freezing' },
        { id: 7, layers: 'find aircon', condition: 'too hot' }
      ])
    })
}
