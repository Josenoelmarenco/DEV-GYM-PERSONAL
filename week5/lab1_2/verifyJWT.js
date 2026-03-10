// Function to verify a JWT
const jwt = require('jsonwebtoken');

function verifyJWT(token) {
  const secretKey = 'esMiSecretKey'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verified. Decoded:', decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTc3MzE1MTI5OX0.Zg4Bch_kBdNSMdiOVNcIJmd_0hqIlVKS49WM286hi0I';

// Call the function to verify the JWT
verifyJWT(jwtTokenToVerify);
