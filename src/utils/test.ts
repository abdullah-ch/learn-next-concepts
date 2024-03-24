
type param<T> =  T

const covertToArray = <T>(param: param<T>) : T[] => {
  console.log("param ===<> ", param)
  return [param]
}

const getIndexOfArrayElement = <T>(array : T[], arrayItem: T): T | undefined  => array.find(arr => arr === arrayItem);

const createArrayPair = <T,K>(input1: T, input2: K): [T,K] => {
  return [input1,input2]
}


const data = [
  {
  name: "John",
  age: 30,
  },
  {
  name: "Jane",
  age: 25}
  ];


const result = data.reduce((acc: Record<string,object>, curr, index) => {
  acc[String(index)] = {...curr}  
  return acc 
}, {})


enum QUIZ_SUBJECT {
  DSA = "DSA",
  MATHS = "MATHS",
}

const quiz = {
  [QUIZ_SUBJECT.DSA]: 2,
  [QUIZ_SUBJECT.MATHS]: 1,
};

const calculteQuizScore = <T extends typeof quiz = {
  [QUIZ_SUBJECT.DSA]: 9,
  [QUIZ_SUBJECT.MATHS]: 1,
} >(quizes: T ): number => Object.values(quizes).reduce((acc, val: number) => acc + val, 0)


// Test the function
console.log(calculteQuizScore({
  DSA: 2,
  MATHS: 22
})); // Output: 3


// Test the function
console.log(calculteQuizScore(quiz)); // Output: 3

    
// createArrayPair("1",2)

// getIndexOfArrayElement([1,2,3,5], 5)
// getIndexOfArrayElement(["a","b", "c"], "c")

// covertToArray(1)
// covertToArray("abd")
// covertToArray(true)
// covertToArray({
//   a :"bru"
// })
// covertToArray(null)
