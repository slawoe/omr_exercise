export default function sum(manyNumbers) {
  let result = 0; // wichtig, dass sie außerhalb der for-Schleife ist
  for (let index = 0; index < manyNumbers.length; index++) {
    const element = manyNumbers[index];
    result = element + result;
  }
  return result;
}
