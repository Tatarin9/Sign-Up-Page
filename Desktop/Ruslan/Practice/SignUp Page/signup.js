const form = document.getElementById('form');
const name = document.getElementById('nameRow');

const alphaExp = /^[a-zA-Z]+$/;

function validate() {
    if(document.myForm.name.match(!alphaExp)) {
        alert("Please enter only alphabets")
    } 
}       
                
// function validate() {
//     if (document.form.name.value == "") {
//         alert("Enter a name");
//         document.form.name.focus();
//         return false;
//     }
//     if (!/^[a-zA-Z]*$/g.test(document.form.name.value)) {
//         alert("Invalid characters");
//         document.form.name.focus();
//         return false;
//     }
// }

