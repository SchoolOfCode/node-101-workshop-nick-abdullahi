// 3a. Cut and paste your `myCollection` array from `index.js` to collection.js instead.

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

/* 3b. Use Node's default exporting syntax in collection.js to export the `myCollection` variable so that it's ready to import elsewhere in your folder. To use this new import/export syntax, we need to change our `package.json` so that it has the property `"type": "module"`.*/

export default myCollection;
