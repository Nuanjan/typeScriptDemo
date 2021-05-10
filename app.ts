
//Literal type mean constant name can't change
const myName = "Noon";

// Object type to specified the object we can just specified type of the property in our object.
const person: {
    name: string;
    age: number;
} = {
    name:"Noon",
    age: 30
}

// onother way to specified object type by create your own type.
type Person= {
    name: string,
    age: number
} 

const person1: Person = {
    name: "Noon",
    age: 20
}

const addFunctionTs = (num1: number, num2: number) => {return num1+num2};

const resultTs = addFunction(1,4);

//Union type
type DynamicAge = string | number;

// intersection type
type Nickname = string;
type Age = number;

type ThaiPerson = Nickname & Age;

// intersection object
type Kid = {
    name: string;
    age: number;
}

type NickName = {
    nickname: string;
}

const human: Kid & NickName = {
    name: "Noon",
    age: 5,
    nickname: "Ba"
};

const friend1: DynamicAge = "Noon";
const friend2: DynamicAge = 30;

type NestedObject = {
    me: {name: string; age: number; boyfriends: string[]; x: {key: string}};
}

// Literal type

type Gender = "female" | "male";
const noon: Gender = "female";

// you can return function with the type
// if the type return type something else than number ts will give an error

const addFunctionTsReturnType = (num1: number, num2: number): number => {return num1+num2};

const greeting = (text: string): void => {
console.log(text)
};

// never normaly use for throw
const logging = (data: string | number): never => {
    throw new Error("error happended!");
};

//interface

type Mytype = string | boolean | "Me";

interface myPerson {
    name: string;
    age: number;
    isMarry: boolean;
}

class NoonFamily implements myPerson {
    name = "";
    age = 0;
    isMarry = false;

    constructor(name: string, age: number, isMarry: boolean = false) {
        this.name = name;
        this.age = age;
        this.isMarry = isMarry;

    }
}

// Unknown type