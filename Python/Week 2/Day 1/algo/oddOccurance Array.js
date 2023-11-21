import makeFrequencyTable from "./makeFrequencyTable";

function oddOccuranceArray(arr) {
  var freqTable = makeFrequencyTable(arr);
  for (var key in freqTable) {
    if (freqTable[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}
