const jwt = require('jsonwebtoken');

//! 1. Function to create and sign a JWT
function createJWT() {
  const credenciales = {
    userId: 123,
    username: 'exampleUser',
  };
  const secretKey = 'esMiSecretKey';

  // Firma el JWT con la carga útil y la clave secreta

  const token = jwt.sign(credenciales, secretKey);

  console.log('JWT Token: ', token);
}

createJWT();

//! 2. Function to verify a JWT
function verifyJWT(token) {
  const secretKey = 'esMiSecretKey'; // Replace with your secret key

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT Verification Failed:', err.message);
    } else {
      console.log('JWT Verificado y decodificado es:', decoded);
    }
  });
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtTokenToVerify =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTc3MzE1MTI5OX0.Zg4Bch_kBdNSMdiOVNcIJmd_0hqIlVKS49WM286hi0I';

// Call the function to verify the JWT
verifyJWT(jwtTokenToVerify);

//! 3. Function to decode a JWT
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  console.log('Hemos decodificado su JWT:', decoded);
}

// Replace 'yourTokenHere' with a JWT token you generated in Step 4
const jwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxlVXNlciIsImlhdCI6MTc3MzE1MTI5OX0.Zg4Bch_kBdNSMdiOVNcIJmd_0hqIlVKS49WM286hi0I';

// Call the function to decode the JWT
decodeJWT(jwtToken);
