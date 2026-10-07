// Peter
const peterWidth = 8;
const peterHeight = 10;
const peterDepth = 10;
const peterVolume = peterWidth * peterHeight * peterDepth;
const peterGardenSize = 100;
const peterPaidPrice = 2500000;
const peterHousePrice = peterVolume * 2.5 * 1000 + peterGardenSize * 300;
if (peterPaidPrice > peterHousePrice) {
  console.log("Peter is paying too much.");
} else {
  console.log("Peter is paying too little.");
}

// Julia
const juliaWidth = 5;
const juliaHeight = 8;
const juliaDepth = 11;
const juliaVolume = juliaWidth * juliaHeight * juliaDepth;
const juliaGardenSize = 70;
const juliaPaidPrice = 1000000;
const juliaHousePrice = juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;
if (juliaPaidPrice > juliaHousePrice) {
  console.log("Julia is paying too much.");
} else {
  console.log("Julia is paying too little.");
}
