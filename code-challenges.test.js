// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { it } = require("jest-circus")
const { shuffle } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// write out jest test with the description beggining with the functions name i will be using later 
// write in varialbe arrays which holds strings inside  in the test in order to make the test pass 
//put in expected outcomes 
//variables let color1 
//          let color2 

//got the test written out for boths problems. 
//needing help with the logic for them 
describe ("removeAndRandom", () => {
  let colors1 = ["purple", "blue", "green", "yellow", "pink"]
  let colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  it (" removes the first item from the array and shuffles",()=> {
    expect(removeAndRandom(colors1)).toEqual(
//write the logic that will shift and shuffle colors 1

    )
    expect(removeAndRandom(colors2)).toEqual(

        //write the logic that will shift and shuffle colors 2
    )
  })
} )



// b) Create the function that makes the test pass.
 //write a function that will go through the array remove the first index  and then randomize the array 

 // trying to use the map highorder function to go through the array.
 // then using the built in methods shift to remove the first index and shuffle to randomize them 
//shift(colors1) shuffle(colors1)

 const removeAndRandom = (array) => {
     return array
 }
 
 console.log(removeAndRandom(colors1))
 
//  colors1.map(value => {

//     let remove = shift(colors1){
//         let random = shuffle(colors1)
//     }
    
// })




// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// write describe test with function minMAX for the test 

// create describe the test description using describe 
//add the variables to the test 
//add the expectations of the test 

describe ( "minMAX", () => {
    let nums1 = [3, 56, -8, 0 ,23, 6]
    let nums2 = [109, 5, 9, -59, 8, 24]
    it("gets the minimum and max number of the array ")
    //write the expectation of the function 
    expect(minMax(nums1)).toEqual(56, -8)
    expect(minMax(nums2).toEqual(109, -59)
    
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]





// b) Create the function that makes the test pass.





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]





// b) Create the function that makes the test pass.
