var a = 12;
var b = 13;

let arr: [string, number] = ["samir", 12];

// enumeration example
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

UserRoles.SUPER_ADMIN;

enum StatusCodes {
  ABANDONED = "abandoned status code 500",
  NOTFOUND = "not found status code 400",
}

StatusCodes.NOTFOUND;

const n = 1234;
const m = 1234;

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(n, m));
  