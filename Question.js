/*Question1*/ 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(salaries)

function sum(obj) {
    var sum = 0;
    for (var e1 in obj) {
        if (obj.hasOwnProperty(e1)) {
            sum += parseFloat(obj[e1]);
        }
    }
    return sum;
}

var summed = sum(salaries);
console.log("sum:" + summed);

/*Question2*/
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

/*after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
*/

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu)

/*Question3.Write a function checkEmailId(str) that returns true 
 * if str contains '@' and ‘.’, otherwise false. */

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

/*Question4*/

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20))


/*Question5*/
var names = ["James","Brennie"]
console.log(names)
names.push("Robert")
console.log(names)
names[Math.floor((names.length - 1) / 2)] = "Calvin"
console.log(names)
names.shift()
console.log(names)
names.unshift("Rose","Robert")
console.log(names)


/*Question6*/
var checkLuhn = function (cardNo) {
    var s = 0;
    var doubleDigit = false;
    for (var i = cardNo.length - 1; i >= 0; i--) {
        var digit = +cardNo[i];
        if (doubleDigit) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        s += digit;
        doubleDigit = !doubleDigit;
    }
    return s % 10 == 0;
}




/*Question7*/
function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}