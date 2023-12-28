interface User {
  email: string;
  isActive: boolean;
}

const steve: User = { email: "dong@naver.com", isActive: true };
const liam = { email: "ad" };

function add(x: number, y: number): number {
  return x + y;
}

add(2, 2);
