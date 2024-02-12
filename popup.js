// const bcrypt = require('bcryptjs');
// import bcrypt from 'bcryptjs';

// Add event listener to the generate button
document.getElementById('generateButton').addEventListener('click', function() {
    // Get the input password
    var password = document.getElementById('passwordInput').value;


    // Import bcrypt.js if you are using a module bundler
// import bcrypt from 'bcryptjs';

// Sample password
// const password = 'password123';

// Generate salt
const salt = bcrypt.genSaltSync(10);

// Hash the password
const hashedPassword = bcrypt.hashSync(password, salt);

console.log('Hashed Password:', hashedPassword);


    // var hash = hashPassword(password);

      document.getElementById('hashResult').innerText = "Hash: " + hashedPassword;
    
    
    // Generate the hash
    // sha256(password).then(function(hash) {
    //   // Display the hash result
    //   document.getElementById('hashResult').innerText = "Hash: " + hash;
    // }).catch(function(error) {
    //   // Handle errors if any
    //   console.error('Error generating hash:', error);
    // });




  });



  // Function to send password to Laravel backend for hashing
function hashPassword(password) {
   
    fetch('https://codetones.com/check-hash-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hash_password: password }),
    })
    .then(response => response.json())
    .then(data => {



        document.getElementById('hashResult').innerText = "Hash data: " + data;
        //return data
        // Handle the response from the backend
        console.log('Hashed password:', data.hashed_password);
        // You can proceed with the hashed password or take further actions

        return data;
    })
    .catch(error => {
        console.error('Error hashing password:', error);
    });
}



  
  // SHA-256 hash function
  async function sha256(message) {
    const buffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
  

// Add event listener to the generate button
// document.getElementById('generateButton').addEventListener('click', function() {
//     // Get the input password
//     var password = document.getElementById('passwordInput').value;

//     console.log('password', password)
    
    
//     // Generate the hash
//     var hash = sha256(password);
    
//     // Display the hash result
//     document.getElementById('hashResult').innerText = "Hash: " + hash;
//   });


//   async function sha256(message) {
//     const buffer = new TextEncoder().encode(message);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
//     return hashHex;
//   }
  
  
  // SHA-256 hash function
//   function sha256(ascii) {
//     function rightRotate(value, amount) {
//       return (value>>>amount) | (value<<(32 - amount));
//     };

    
//     var mathPow = Math.pow;
//     var maxWord = mathPow(2, 32);
//     var lengthProperty = 'length'
//     var i, j; // Used as a counter across the whole file
//     var result = ''
  
//     var words = [];
//     var asciiBitLength = ascii[lengthProperty]*8;

    
  
    
//     //* caching results is not necessary since JavaScript engines optimize for speed
//     //but it does reduce the scope of the variable i.
//     //* consider removing the unused ascii variable in that case.
//     // var hashedMessage = sha256('hello') => "aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d"
  
//     //* Convert ascii string to utf-8
//     for (i = 0; i < ascii[lengthProperty]; i += 1) {
//       words[i >> 2] |= ascii.charCodeAt(i) << (24 - (i % 4) * 8);
//     }
  
//     words[ascii[lengthProperty] >> 2] |= 0x80 << (24 - (ascii[lengthProperty] % 4) * 8);
//     words[Math.floor((asciiBitLength + 64) / 512) + 1] = (asciiBitLength/ maxWord) | 0;
//     words[Math.floor((asciiBitLength + 64) / 512) + 1] = asciiBitLength;
  
//     var a =  1732584193;
//     var b = -271733879;
//     var c = -1732584194;
//     var d =  271733878;

//    // document.getElementById('hashResult').innerText = "password ascii: " + words
    
//     var temp, abcd, loopIndex;
//     for (i = 0; i < words[lengthProperty]; i += 16) {
//       loopIndex = i;
//       a = Math.round(a);
//       b = Math.round(b);
//       c = Math.round(c);
//       d = Math.round(d);
//       a = (abcd = a) + (((b & c) | (~b & d)) + (words[loopIndex] )   + 0x5a827999 + rightRotate(a, 5));/**/
//       d = (abcd = d) + (((a & b) | (~a & c)) + (words[loopIndex + 1] ) + 0x5a827999 + rightRotate(d, 5));/**/
//       c = (abcd = c) + (((d & a) | (~d & b)) + (words[loopIndex + 2] ) + 0x5a827999 + rightRotate(c, 5));/**/
//       b = (abcd = b) + (((c & d) | (~c & a)) + (words[loopIndex + 3] ) + 0x5a827999 + rightRotate(b, 5));/**/
//       a = (abcd = a) + (((b & c) | (~b & d)) + (words[loopIndex + 4] ) + 0x5a827999 + rightRotate(a, 5));/**/
//       d = (abcd = d) + (((a & b) | (~a & c)) + (words[loopIndex + 5] ) + 0x5a827999 + rightRotate(d, 5));/**/
//       c = (abcd = c) + (((d & a) | (~d & b)) + (words[loopIndex + 6] ) + 0x5a827999 + rightRotate(c, 5));/**/
//       b = (abcd = b) + (((c & d) | (~c & a)) + (words[loopIndex + 7] ) + 0x5a827999 + rightRotate(b, 5));/**/
//       a = (abcd = a) + (((b & c) | (~b & d)) + (words[loopIndex + 8] ) + 0x5a827999 + rightRotate(a, 5));/**/
//       d = (abcd = d) + (((a & b) | (~a & c)) + (words[loopIndex + 9] ) + 0x5a827999 + rightRotate(d, 5));/**/
//       c = (abcd = c) + (((d & a) | (~d & b)) + (words[loopIndex + 10]) + 0x5a827999 + rightRotate(c, 5));/**/
//       b = (abcd = b) + (((c & d) | (~c & a)) + (words[loopIndex + 11]) + 0x5a827999 + rightRotate(b, 5));/**/
//       a = (abcd = a) + (((b & c) | (~b & d)) + (words[loopIndex + 12]) + 0x5a827999 + rightRotate(a, 5));/**/
//       d = (abcd = d) + (((a & b) | (~a & c)) + (words[loopIndex + 13]) + 0x5a827999 + rightRotate(d, 5));/**/
//       c = (abcd = c) + (((d & a) | (~d & b)) + (words[loopIndex + 14]) + 0x5a827999 + rightRotate(c, 5));/**/
//       b = (abcd = b) + (((c & d) | (~c & a)) + (words[loopIndex + 15]) + 0x5a827999 + rightRotate(b, 5));/**/
//       a = (abcd = a) + (((b & d) | (c & ~d)) + (words[loopIndex + 0] )   + 0x6ed9eba1 + rightRotate(a, 5));/**/
//       d = (abcd = d) + (((a & c) | (b & ~c)) + (words[loopIndex + 7] )   + 0x6ed9eba1 + rightRotate(d, 5));/**/
//       c = (abcd = c) + (((d & b) | (a & ~b)) + (words[loopIndex + 14])   + 0x6ed9eba1 + rightRotate(c, 5));/**/
//       b = (abcd = b) + (((c & a) | (d & ~a)) + (words[loopIndex + 5] )   + 0x6ed9eba1 + rightRotate(b, 5));/**/
//       a = (abcd = a) + (((b & d) | (c & ~d)) + (words[loopIndex + 12])   + 0x6ed9eba1 + rightRotate(a, 5));/**/
//       d = (abcd = d) + (((a & c) | (b & ~c)) + (words[loopIndex + 3] )   + 0x6ed9eba1 + rightRotate(d, 5));/**/
//       c = (abcd = c) + (((d & b) | (a & ~b)) + (words[loopIndex + 10])   + 0x6ed9eba1 + rightRotate(c, 5));/**/
//       b = (abcd = b) + (((c & a) | (d & ~a)) + (words[loopIndex + 1] )   + 0x6ed9eba1 + rightRotate(b, 5));/**/
//       a = (abcd = a) + (((b & d) | (c & ~d)) + (words[loopIndex + 8] )   + 0x6ed9eba1 + rightRotate(a, 5));/**/
//       d = (abcd = d) + (((a & c) | (b & ~c)) + (words[loopIndex + 15])   + 0x6ed9eba1 + rightRotate(d, 5));/**/
//       c = (abcd = c) + (((d & b) | (a & ~b)) + (words[loopIndex + 6] )   + 0x6ed9eba1 + rightRotate(c, 5));/**/
//       b = (abcd = b) + (((c & a) | (d & ~a)) + (words[loopIndex + 13])   + 0x6ed9eba1 + rightRotate(b, 5));/**/
//       a = (abcd = a) + (((b & d) | (c & ~d)) + (words[loopIndex + 4] )   + 0x6ed9eba1 + rightRotate(a, 5));/**/
//       d = (abcd = d) + (((a & c) | (b & ~c)) + (words[loopIndex + 11])   + 0x6ed9eba1 + rightRotate(d, 5));/**/
//       c = (abcd = c) + (((d & b) | (a & ~b)) + (words[loopIndex + 2] )   + 0x6ed9eba1 + rightRotate(c, 5));/**/
//       b = (abcd = b) + (((c & a) | (d & ~a)) + (words[loopIndex + 9] )   + 0x6ed9eba1 + rightRotate(b, 5));/**/
  
//       a = (a + abcd) | 0;
//       b = (b + abcd) | 0;
//       c = (c + abcd) | 0;
//       d = (d + abcd) | 0;
//     }
//     return ('00000000'+(a>>>0).toString(16)).slice(-8)+
//            ('00000000'+(b>>>0).toString(16)).slice(-8)+
//            ('00000000'+(c>>>0).toString(16)).slice(-8)+
//            ('00000000'+(d>>>0).toString(16)).slice(-8);
//   }
  