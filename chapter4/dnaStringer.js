/DNA STRINGER
//Go from DNA to RNA

//ACGGGTAGG - Gives:
//UGCCCAUCC - Gives:
//(TGCCCATCC)
//cys|pro|pho

//DNA to RNA - simple for loop.
//RNA to Amino Acids - temp variable stores 3 RNA at a time, cross references the dictionary of amino acids.

function randomDna(x) {
  var dna = ""
  for (var i = 0; i <=x; i++) {
    var randomnum = Math.floor(Math.random() * 3.9)
    if (randomnum == 0) {
      dna += "a"
    }
    else if (randomnum == 1) {
      dna += "g"
    }
    else if (randomnum == 2) {
      dna += "t"
    }
    else if (randomnum == 3) {
      dna += "c"
    }
  }
  return dna
}

var dna1 = "AAAAAG"

var codons = {
	'Phe' : ['uuu', 'uuc'],
	'Leu' : ['uua', 'uug', 'cuu', 'cuc', 'cua', 'cug'],
	'Ile' : ['auu', 'auc', 'aua'],
	'Met' : ['aug'],
	'Val' : ['guu', 'guc', 'gua', 'gug'],
	'Ser' : ['ucu', 'ucc', 'uca', 'ucg'],
	'Pro' : ['ccu', 'ccc', 'cca', 'ccg'],
	'Thr' : ['acu', 'acc', 'aca', 'acg'],
	'Ala' : ['gcu', 'gcc', 'gca', 'gcg'],
	'Tyr' : ['uau', 'uac'],
	'stop' : ['uaa', 'uag', 'uga'],
	'His' : ['cau', 'cac'],
	'Gln' : ['caa', 'cag'],
	'Asn' : ['aau', 'aac'],
	'Lys' : ['aaa', 'aag'],
	'Asp' : ['gau', 'gac'],
	'Glu' : ['gaa', 'gag'],
	'Cys' : ['ugu', 'ugc'],
	'Trp' : ['ugg'],
	'Arg' : ['cgu', 'cgc', 'cga', 'cgg', 'aga', 'agg'],
	'Ser' : ['agu', 'agc'],
	'Gly' : ['ggu', 'ggc', 'gga', 'ggg']
}


function dnaStringer(dna) {

  //DNA TO RNA
  var rna = ""
  for(var i = 0; i < dna.length; i++) {//Cycles through DNA & pushes corresponding RNA to new string.
    if (dna[i].toLowerCase() == "a") {
      rna += "u";
    }
    else if (dna[i].toLowerCase() == "c") {
      rna += "g";
    }
    else if (dna[i].toLowerCase() == "g") {
      rna += "c";
    }
    else if (dna[i].toLowerCase() == "t") {
      rna += "a";
    }
  }
  console.log("Rna is:", rna);

  //RNA TO AMINO ACIDS
  var temprna = "";
  var aminoacids = "";
  for (var j = 0; j < rna.length; j++) {
    // console.log("temprna is", temprna, "aminoacids is", aminoacids, "j is", j, "temprna.length is", temprna.length)
    if (temprna.length <= 3) {
      temprna += rna[j];
    }

    if (temprna.length == 3) {
      // console.log("triggered")
      //DICTIONARY REFERENCE HERE OR WHATEVER
      for (var codon in codons) { //codon is key

        for (var i = 0; i < codons[codon].length; i++) {
          if (temprna == codons[codon][i]) {
            aminoacids += codon;
            temprna = "";
            }
          }
         if (temprna.length == 3) {
            aminoacids += "mutated";
            temprna = "";
          }
        }

      }

      if (temprna.length > 0  && j == rna.length - 1) {
        console.log("You got some leftover rna buddy...", temprna)
      }
    }
  return aminoacids;
}

console.log(dnaStringer(dna1));

console.log(dnaStringer(randomDna(21)));

//HW: INVERT HASH (ASSOCIATED ARRAY) Complicated ish.
//WRITE A FUNCTION THAT TAKES THE GIGANTIC DICTIONARY AND MAKES IT SO IT IS A DICTIONARY OF KEYS OF TAG AND VALUES OF STOP?!
//Duplicate values but no duplicate keys...?

//WRITE A RANDOM DNA GENERATION FUNCTION.