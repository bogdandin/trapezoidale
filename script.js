$("#validateCT #calculateButton").click(function() {
  // Get values from input fields and convert them to numbers
   centerDistance = parseFloat($("#validateCT #centerDistance").val());
   smallerPulleyDiameter = parseFloat($("#validateCT  #smallerPulleyDiameter").val());
   largerPulleyDiameter = parseFloat($("#validateCT #largerPulleyDiameter").val());
   vbeltLength = calculateVbeltLength(centerDistance, smallerPulleyDiameter, largerPulleyDiameter);
console.log(vbeltLength);
 
  $("#validateCT #vbeltLength").val(vbeltLength);
});

$("#validateVB #calculateButton").click(function() {
  // Get values from input fields and convert them to numbers
   vbeltLength = parseFloat($("#validateVB #vbeltLength").val());
   smallerPulleyDiameter = parseFloat($("#validateVB  #smallerPulleyDiameter").val());
   largerPulleyDiameter = parseFloat($("#validateVB #largerPulleyDiameter").val());
   centerDistance = calculateCenterDistance(smallerPulleyDiameter, largerPulleyDiameter, vbeltLength);
console.log(vbeltLength);
 
  $("#validateVB #centerDistance").val(centerDistance);
});





function calculateVbeltLength(C, D1, D2) {
  const pi = Math.PI;
  const length = 2 * C + ((pi * (D1 + D2)) / 2) + Math.pow(D2 - D1, 2) / (4 * C);
  return length;
}
function calculateCenterDistance(D1, D2, L) {
  const pi = Math.PI;
  const numerator = L - ((pi * (D1 + D2)) / 2) - Math.pow(D2 - D1, 2) / (4 * L);
  const C = numerator / 2;
  return C;
}
