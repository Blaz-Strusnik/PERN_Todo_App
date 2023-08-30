const bcrypt = require('bcrypt');

// The password you want to hash
const plainPassword = 'password123';

// Generate a salt to be used for hashing
const saltRounds = 10;

bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
  if (err) {
    console.error('Error generating hash:', err);
  } else {
    console.log('Generated Hash:', hash);
  }
});
