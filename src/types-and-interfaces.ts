//types
type UserType = {
  id: number;
  name: string;
  email: string;
  age?: number; //opcional
};

const user: UserType = {
  email: "email@email.com",
  id: 23,
  name: "leonardo",
  age: 19, //opcional
};

const users: UserType[] = [
  {
    email: "email@email.com",
    id: 23,
    name: "leonardo",
  },
];

//interfaces
interface UserInterface {
  id: number;
  name: string;
  email: string;
}
const user2: UserInterface = {
  id: 1,
  name: "leonardo muller",
  email: "email@email.com",
};

//interfaces with funcions
interface MathFun {
  (x: number, y: number): number;
}

const add: MathFun = (x: number, y: number) => {
  return x + y;
};

const sub: MathFun = (x: number, y: number) => {
  return x - y;
};

//interfaces com métodos

interface UserInterface2 {
  id: number;
  name: string;
  register(): string;
}

const user3: UserInterface2 = {
  id: 12,
  name: "Leonarod",
  register() {
    return "Registrado com sucesso";
  },
};

// interfaces com unions
interface AuthorInterface {
  books: string[];
}

const author: AuthorInterface & UserInterface = {
  name: "George Martin",
  books: ["Game of Thrones"],
  email: "george@gmail.com",
  id: 213,
};
