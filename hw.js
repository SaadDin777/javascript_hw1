//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_names = ["Eyo","Henry","Franny","Athena","Indy","Dilbert","Dot","Marley","Butch","Daisy"];
let dog_string = "There are many good dogs. I wish i could name them all. Here are some names: Dilbert, Indy, Daisy, Dot. But even if they're not here we love them very much";
  
function findWords(x, y) {
    for (j = 0; j < x.length; j++) {
      if (y.includes(x[j])) {
        console.log(`Matched Dog ${x[j]}`);
      } else {
        console.log("No Matches");
      }
    }
  }
  
findWords(dog_names, dog_string);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, "even index")
        }
    }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]