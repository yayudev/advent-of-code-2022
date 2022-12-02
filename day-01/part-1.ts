import { readInputData } from "./utils";

function findHighestCalories(data: string[]): number {
  let maxCaloriesCount = 0;
  let currentElfCalories: number = 0;

  for (let row of data) {
    // If row has data, just sum it.
    if (row) {
      currentElfCalories += Number.parseInt(row, 10);
      continue;
    }

    // If row is empty, check if it's the highest and reset the count
    if (currentElfCalories > maxCaloriesCount) {
      maxCaloriesCount = currentElfCalories;
    }

    currentElfCalories = 0;
  }

  return maxCaloriesCount;
}

async function findHighestCaloriesCountInFile(
  filename: string
): Promise<number> {
  const data = await readInputData(filename);
  const highestCount = await findHighestCalories(data);

  return highestCount;
}

findHighestCaloriesCountInFile("real-input.txt").then((result) => {
  console.log(result);
});
