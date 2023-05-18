
const {atom} = require("recoil");
// Atom -> one piece of shared state
// Need to have unique key & default is same as inital useState() value
const Input = atom({

    key:"input",
    default: ""
});