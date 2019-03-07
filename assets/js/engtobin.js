/*var charCodesToBin=new Array(80);
charCodesToBin["a"]="01100001";
charCodesToBin["b"]="01100010";
charCodesToBin["c"]="01100011";
charCodesToBin["d"]="01100100";
charCodesToBin["e"]="01100101";
charCodesToBin["f"]="01100110";
charCodesToBin["g"]="01100111";
charCodesToBin["h"]="01101000";
charCodesToBin["i"]="01101001";
charCodesToBin["j"]="01101010";
charCodesToBin["k"]="01101011";
charCodesToBin["l"]="01101100";
charCodesToBin["m"]="01101101";
charCodesToBin["n"]="01101110";
charCodesToBin["o"]="01101111";
charCodesToBin["p"]="01110000";
charCodesToBin["q"]="01110001";
charCodesToBin["r"]="01110010";
charCodesToBin["s"]="01110100";
charCodesToBin["t"]="01110100";
charCodesToBin["u"]="01110101";
charCodesToBin["v"]="01110110";
charCodesToBin["w"]="01110111";
charCodesToBin["x"]="01111000";
charCodesToBin["y"]="01111001";
charCodesToBin["z"]="01111010";
charCodesToBin["1"]="00110001";
charCodesToBin["2"]="00110010";
charCodesToBin["3"]="00110011";
charCodesToBin["4"]="00110100";
charCodesToBin["5"]="00110101";
charCodesToBin["6"]="00110110";
charCodesToBin["7"]="00110111";
charCodesToBin["8"]="00111000";
charCodesToBin["9"]="00111001";
charCodesToBin["0"]="00110000";
charCodesToBin["A"]="01000001";
charCodesToBin["B"]="01000010";
charCodesToBin["C"]="01000011";
charCodesToBin["D"]="01000100";
charCodesToBin["E"]="01000101";
charCodesToBin["F"]="01000110";
charCodesToBin["G"]="01000111";
charCodesToBin["H"]="01001000";
charCodesToBin["I"]="01001001";
charCodesToBin["J"]="01001010";
charCodesToBin["K"]="01001011";
charCodesToBin["L"]="01001100";
charCodesToBin["M"]="01001101";
charCodesToBin["N"]="01001110";
charCodesToBin["O"]="01001111";
charCodesToBin["P"]="01010000";
charCodesToBin["Q"]="01010001";
charCodesToBin["R"]="01010010";
charCodesToBin["S"]="01010011";
charCodesToBin["T"]="01010100";
charCodesToBin["U"]="01010101";
charCodesToBin["V"]="01010110";
charCodesToBin["W"]="01010111";
charCodesToBin["X"]="01011000";
charCodesToBin["Y"]="01011001";
charCodesToBin["Z"]="01011010";
charCodesToBin["!"]="00100001";
charCodesToBin["'\'"]="00100010";
charCodesToBin["#"]="00100011";
charCodesToBin["$"]="00100100";
charCodesToBin["%"]="00100101";
charCodesToBin["&"]="00100110";
charCodesToBin["'"]="00100111";
charCodesToBin["("]="00101000";
charCodesToBin[")"]="00101001";
charCodesToBin["*"]="00101010";
charCodesToBin["+"]="00101011";
charCodesToBin[","]="00101100";
charCodesToBin["-"]="00101101";
charCodesToBin["."]="00101110";
charCodesToBin["/"]="00101111";
charCodesToBin["?"]="00111111";
charCodesToBin["@"]="01000000";
charCodesToBin["␣"]="00100000";
charCodesToBin["_"]="01011111";

var tempToBin=''

function encodeToBin() {
  document.binary.charsToBin.value=document.binary.charsToBin.value;
  document.binary.codebox.value="";
  tempToBin=''

  var charsToBin=document.binary.charsToBin.value.split(" ").join("␣");

  for (a=0; a<charsToBin.length; a++) {
    if (charsToBin[a]!=" ") {
      if (window.charCodesToBin[charsToBin[a]]) {
        document.binary.codebox.value+=charCodesToBin[charsToBin[a]]+"    ";
        tempToBin+=charsToBin[a]+"="+charCodesToBin[charsToBin[a]]+"\n";
      }
      else
      tempToBin+=charsToBin[a]+"=(None)\n";
    }
    else tempToBin+="\n";
  }
  document.binary.codebox.value+="\n\n\Explanation:\n\n"+tempToBin
}
*/
