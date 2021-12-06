import myCollection from "./collection.js";


// 2b create a variable `myCollection` as an array of objects:



/* 2c. Create a function called `describeItem`, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should `console.log` a message according to how many of the item you have. */

function describeItem(item) {

  if (item.count === 1){

    console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`);
    
  } else {

    console.log(`I have ${item.count} ${item.name} Here's what I like about them: ${item.whatILike}`);

  }


}

describeItem(myCollection[0])



/* 
👉 


/* 👉 2d. 

- Make function called `describeCollection` takes (array) as a parameter. 
- The function should loop through array,  
- For each item,  should call the `describeItem` function 
- So it displays a message according to how many you have in your collection.
*/

function describeCollection(arr){

  arr.forEach(describeItem);

}

// - Call your function below where you've defined it, handing in the `myCollection` array.
  describeCollection(myCollection);


