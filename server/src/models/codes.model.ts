class Codes {
  codes: string[] = ["0000"];

  setCode(code: string) {
    this.codes.push(code);
  }

  removeCode(code: string) {
    this.codes = this.codes.filter((c) => c !== code);
  }

  checkCode(code: string) {
    return this.codes.includes(code);
  }

  getCodes() {
    return this.codes;
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
}

export { Codes };
