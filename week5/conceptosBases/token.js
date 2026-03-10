// Parsing a JWT
const sampleJwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ.SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA';

const jwtArray = sampleJwt.split('.');
const [header, payload, signature] = jwtArray;

console.log(header); // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
console.log(payload); // "eyJlbWFpbCI6ImpvaG5ueUBnbWFpbC5jb20ifQ"
console.log(signature); // "SkuHIxgU1sDTrNKTTUIu9yDohUu8h0_4mbHiOMaUKwA"

// Decoding a JWT's header and payload
const decodedHeader = atob(header);
console.log(decodedHeader); // {"alg":"HS256","typ":"JWT"}

const decodedPayload = atob(payload);
console.log(decodedPayload); // {"email":"johnny@gmail.com"}

const signature = require('crypto')
  .createHmac('sha256', privateKey)
  .update(encodedHeader + '.' + encodedPayload)
  .digest('base64');
