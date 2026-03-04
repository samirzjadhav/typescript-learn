"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
var b = 13;
let arr = ["samir", 12];
// enumeration example
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.SUPER_ADMIN;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 400";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOTFOUND;
const n = 1234;
const m = 1234;
function add(a, b) {
    return a + b;
}
console.log(add(n, m));
//# sourceMappingURL=app.js.map