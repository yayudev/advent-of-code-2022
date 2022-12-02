import { readInputData } from "./utils";

function findTop3(data: string[]): number[] {
  let top3 = [0, 0, 0];

  let currentElfCalories = 0;
  for (let row of data) {
    // If row has data, just sum it.
    if (row) {
      currentElfCalories += Number.parseInt(row, 10);
      continue;
    }

    // If row is empty, check if it's the highest and reset the count
    if (currentElfCalories > top3[0]) {
      top3[2] = top3[1];
      top3[1] = top3[0];
      top3[0] = currentElfCalories;
    } else if (currentElfCalories > top3[1]) {
      top3[2] = top3[1];
      top3[1] = currentElfCalories;
    } else if (currentElfCalories > top3[2]) {
      top3[2] = currentElfCalories;
    }

    currentElfCalories = 0;
  }

  return top3;
}

async function findTop3Total(filename: string): Promise<number> {
  const data = await readInputData(filename);
  const top3 = await findTop3(data);
  const totalSum = top3.reduce((acc, sum) => sum + acc, 0);

  return totalSum;
}

findTop3Total("real-input.txt").then((result) => {
  console.log(result);
});
