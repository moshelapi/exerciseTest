import { expect, test, describe } from "vitest";
import { length, palindrome, sort, sqrt, sumArray, fetchUserData,fibonacci } from "./exe";

// exe1
test("length off messi equal 5", () => {
  expect(length("messi")).toBe(5);
});
// exe2
test("if palindrome?", () => {
  expect(palindrome("abba")).toBe(true);
});
// exe3
test("sort array", () => {
  expect(sort([5, 44, 2, 22, 333])).toStrictEqual([2, 5, 22, 44, 333]);
});
// exe4
describe("sqrt", () => {
  test("sqrt of number", () => {
    expect(sqrt(9)).toBe(3);
  });

  test("Positive number ? ", () => {
    expect(sqrt(-3)).toBe(false);
  });
});

// exe5

describe("sumArray", () => {
  test("sum of [5,4,3] equal to 6", () => {
    expect(sumArray([5, 4, 3])).toBe(12);
  });

  test("grate from 9", () => {
    expect(sumArray([5, 4, 3])).toBeGreaterThan(9);
  });
});

// exe6

describe('fetchuserdata', () => {
    test('fetchUserData throw error', async () => {
       await expect(fetchUserData(56)).rejects.toThrowError()
    })
    test('fetch user data', async () => {
        await expect(fetchUserData(2)).resolves.toMatchObject({
            name: "Ervin Howell"
        })
     })
})

// exe7

describe('fibonacci', () => {

    test('insert 2 and 3 and 5 return 8',()=>{
        expect(fibonacci([2,3,5])).toBe(8)
    })

    test('false is not fibonacci',()=>{
        expect(fibonacci([1,2,4])).toBe(false)
    })
    


})

