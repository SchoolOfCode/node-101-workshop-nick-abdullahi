/* 3c. Now import `myCollection` at the top of `index.js`. You should be able to then call your function just as you did in part 1, but this time using `myCollection` imported from its separate file.*/

import myCollection from ""



let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
];

// console.log(myCollection)





/* 2c. Create a function called `describeItem`, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should `console.log` a message according to how many of the item you have. */

function describeItem(item) {

  if (myCollection[item].count === 1){

    console.log(`I have a ${myCollection[item].name} Here's what I like about it: ${myCollection[item].whatILike}`)
    
  } else {

    console.log(`I have ${myCollection[item].count} ${myCollection[item].name} Here's what I like about them: ${myCollection[item].whatILike}`)

  }


}

describeItem(2)



/* 
👉 
If there's only one of the item in your collection, it should log "I have a `name`. Here's what I like about it: `whatILike`". If you have more than one of it, the message should log "I have `count` `name`s. Here's what I like about them: `whatILike`".

For example, the result of calling the `describeItem` function with the first item in our collection would be:
_"I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"_

Call your function below where you've defined it, handing in the first item in `myCollection`.*/