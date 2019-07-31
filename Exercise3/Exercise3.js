var input = "The quick brown QA jumps over the sleeping Developer";
//var input = "bcdfghjklmnpqrstvwxyzbcdfghjklmnpqrstvwxyzbcdfghjklmnpqrstvwxyz";
//var input= "aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou";

if (input.length >= 50) {
    var wordCount = countWords(input);
    var consonantCount = count(input, /[bcdfghjklmnpqrstvwxyz]/);
    var vowelCount = count(input, /[aeiou]/);

    var out = theTag`Input: ${input}
 Number of word(s) found: ${wordCount}
 Number of consonant(s) found: ${consonantCount}
 Number of vowel(s) found: ${vowelCount}`;

    console.log(out);
}
else
    console.log("Length must be greater than 50.");



function theTag(strings, input, wc, cc, vc) {
    var [i, w, c, v] = strings;
    var s = `${i}${input}${w}${wc}${cc != 0 ? `${c}${cc}` : ""}${vc != 0 ? `${v}${vc}` : ""}`;

    return s;
}

function countWords(input) {
    return input.split(' ').length;
}

function count(input, expression) {
    var str = input.toLowerCase();
    var count = 0;

    // replace for with for..of
    for (let c of input.toLowerCase()) {
        if (c.match(expression))
            count++;
    }

    return count;
}