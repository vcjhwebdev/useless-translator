function binaryAgent(str) {

var binString = '';

str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
return binString;
}
binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100');
//translates to "Aren't"
