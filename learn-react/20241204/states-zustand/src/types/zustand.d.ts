interface CounterStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

interface User {
  name: string;
  age: number;
}

interface useAuthStoreType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}
