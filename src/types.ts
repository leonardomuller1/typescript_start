//types - basicos

const id: number = 10;
const curso: string = "FSC";
const isPublished: boolean = true;

let id2: any; // nao recomendado usar

//types - arrays
const numbers: number[] = [1, 23, 2, 432];
const strings: string[] = ["a", "b", "c"];
const booleans: boolean[] = [true, false];
const anyValues: any[] = [1, 23, "t234", true];

//types tuples
/**
 * NÃO É MUITO USADO
 */
const employee: [number, string, boolean] = [1, "Leonardo", true];
const employees: [number, string, boolean][] = [
  [1, "134", true],
  [5, "oi", false],
];

//types - unions
const uid: number | string = "5";

//types - Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const direction1 = Direction.Up;
console.log(direction1);

// type assertion
const cid: any = 1;
const custormerId = cid as string;

const custormerIds = [1, 2, 3];

//type - funcions
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
//void

const printMessage = (message: string): void => {
  console.log(message);
};
