var contestants = [
  { name: 'Newton', score: 6},
  { name: 'Carpenter', score: 5},
  { name: 'Osborn', score: 7},
  { name: 'May', score: 8},
  { name: 'Delgado', score: 8},
  { name: 'Ian', score: 8},
  { name: 'Finley', score: 7},
  { name: 'Simon', score: 10}
];

contestants.sort(function({score: a}, {score: b}) {
  return b - a;
});

console.log(contestants);

// for NO tied scores
//var [o1, o2, o3] = contestants;
//printRanking(1, o1);
//printRanking(2, o2);
//printRanking(2, o2);

var tiedCount = 1;
var pos = 1;
for (var i = 0; i < contestants.length; i++) {
    var cur = contestants[i]
    var next = contestants[i + 1];

    if (next) {
        if (cur.score != next.score) {
            if (tiedCount == 1) {
                printRanking(pos, cur);
            }
            else {
                printRanking(pos, { name: tiedCount, score: cur.score });
                tiedCount = 1;
            }

            pos++;

            if (pos == 4) break;
        }
        else {
            tiedCount++;
        }
    }
}

function printRanking(pos, {name, score})
{
  var posString = pos == 1 ? "1st" : (pos == 2 ? "2nd" : "3rd");
  console.log(`(${posString}) ${name} scored ${score} out of 10`);
}