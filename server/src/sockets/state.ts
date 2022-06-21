interface Member {
  id: string;
  name: string;
  code: string;
}

class State {
  codes: string[] = ["0000"];
  users: Member[] = [];

  addUser(user: Member) {
    this.users.push(user);
  }

  removeUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  setCode(code: string) {
    this.codes.push(code);
  }

  generateCode() {
    let code = "";
    while (true) {
      for (let i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 10);
      }
      if (this.codes.includes(code)) continue;
      if (!this.codes.includes(code)) break;
    }
    return code;
  }

  removeCode(code: string) {
    this.codes = this.codes.filter((c) => c !== code);
  }

  checkCode(code: string) {
    return this.codes.includes(code);
  }

  getUsers(code: string) {
    return this.users.filter((user) => user.code === code);
  }
}

export { State };
