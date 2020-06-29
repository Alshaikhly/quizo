// let showForm = false;

// const submitQuiz = function(data) {
//   return $.ajax({
//     method: "POST",
//     url: "/quizzes",
//     data,
//   });
// }

// $(document).ready(function() {
//   $("#create-quiz-button").click(function() {
//     if (!showForm) {
//       showForm = true;
//       $("#quiz-form").slideDown("fast");
//     } else {
//       showForm = false;
//       $("#quiz-form").slideUp("fast");
//     }
//   });

//   $($create-quiz-form).on('submit', function(event) {
//     event.preventDefault();
//     const data = $(this).serialize;
//     submitQuiz(data)
//     .then(function() {
//       console.log(data);
//     })
//   })
// });







// api routes
module.exports = function(router, database) {

  router.get('/properties', (req, res) => {
    database.getAllProperties(req.query, 20)
    .then(properties => res.send({properties}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

  router.get('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }
    database.getAllReservations(userId)
    .then(reservations => res.send({reservations}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

  router.post('/properties', (req, res) => {
    const userId = req.session.userId;
    database.addProperty({...req.body, owner_id: userId})
      .then(property => {
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });

  return router;
}


/* database queries
const db = require('../db')


/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return db.query(`
  SELECT * FROM users
  WHERE email = $1;
  `, [email])
  .then(res => res.rows[0]);
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return db.query(`
  SELECT * FROM users
  WHERE id = $1;
  `, [id])
  .then(res => res.rows[0]);
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const query = {
    text: 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *;',
    values: [user.name, user.email, user.password]
  }
  return db.query(query)
  .then(res => res.rows[0]);
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return db.query(`
SELECT properties.*, reservations.*, avg(rating) as average_rating
FROM reservations
JOIN properties ON reservations.property_id = properties.id
JOIN property_reviews ON properties.id = property_reviews.property_id
WHERE reservations.guest_id = $1
AND reservations.end_date < now()::date
GROUP BY properties.id, reservations.id
ORDER BY reservations.start_date
LIMIT $2;`, [guest_id, limit])
.then(res => res.rows)
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  const queryParams = [];

  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  // 3
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParams.length} `;
  }

  if (options.owner) {
    queryParams.push(`${options.owner}`);
    queryString += `AND owner_id = $${queryParams.length}`
  }

  if (options.minimum_price_per_night) {
    queryParams.push(`${options.minimum_price_per_night}`)
    queryString += `AND cost_per_night > $${queryParams.length}`
  }

  if (options.maximum_price_per_night) {
    queryParams.push(`${options.maximum_price_per_night}`)
    queryString += `AND cost_per_night < $${queryParams.length}`
  }

  if (options.minimum_rating) {
    queryParams.push(`${options.minimum_rating}`)
    queryString += `AND rating >= $${queryParams.length}`
  }

  // 4
  queryParams.push(limit);
  queryString += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;

  // 6
  return db.query(queryString, queryParams)
  .then(res => res.rows);
}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const query = {
    text: `INSERT INTO properties (
    title, description, owner_id, cover_photo_url, thumbnail_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, active, province, city, country, street, post_code)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *;`,
    values: [property.title, property.description, property.owner_id, property.cover_photo_url, property.thumbnail_photo_url,  property.cost_per_night, property.parking_spaces, property.number_of_bathrooms, property.number_of_bedrooms, true, property.province, property.city, property.country, property.street, property.post_code]
  }
  console.log(property);
  return db.query(query)
  .then(res => res.rows);
}
exports.addProperty = addProperty;
