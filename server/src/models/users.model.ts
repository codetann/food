class User {
  id: string;
  name: string;
  code: string;

  constructor(id: string, name: string, code: string) {
    this.id = id;
    this.name = name;
    this.code = code;
  }
}

class Users {
  users: User[] = [];

  setUser(user: User) {
    this.users.push(user);
  }

  removeUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getUsers(code: string) {
    return this.users.filter((user) => user.code === code);
  }

  clear() {
    this.users = [];
  }
}

export { Users };
