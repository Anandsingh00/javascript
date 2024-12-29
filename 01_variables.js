const accountId = 15174
let accountEmail = "anand@google.com"
var accountPassword = "12345"
accontCity = "Kolkata"
let accountState;


//code for updating the variables
//accountId = 2; (Not Allowed)
// console.log(accountId)


/**
 * Prefer not ot use var
 * because of issue in block scope and functional scope
 */
accountEmail = "ars@microsoft.com"
accountPassword = "anand"
accountCity = "patna"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
