import User from "./interFace";
import axios from 'axios'
// exe1

export function length(a:string):number{
    return a.length
}

// exe2

export function palindrome(a:string):Boolean{
    for(let i = 0;i<a.length ; i++){
        if (a[i] !== a[a.length -i-1] ){
            return false
        }
    }
    return true
}
// exe3
export function sort(array:number[]):number[]{
    return array.sort((a, b) => a - b);
}
// exe4
export function sqrt(a:number):number|boolean{
    if(a>0){return Math.sqrt(a) }
    else{return false}
   
}

export function sumArray(arr:number[]):number{
    let sum = 0
    for(let i of arr){
        sum+=i
    }
    return sum
}

// exe6
export async function fetchUserData(id:number):Promise<User>{

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = response.data
        return data
    } catch (error){ throw Error}
    
  }

// exe7
export function fibonacci(arr:number[]):number|boolean{
    if(arr.length<3)return false
    for (let i = arr.length-1; i>1; i--) {
        if (arr[i]-arr[i-1]!== arr[i-2])  return false
    }
    return arr[arr.length - 1] + arr[arr.length - 2] 
}



