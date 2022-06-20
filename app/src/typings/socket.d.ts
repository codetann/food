interface Member {
  name: string;
  code: string;
}

export interface Payload {
  ["check-code"]: {
    code: string;
  };
  ["join"]: {
    users: Member[];
  };
  ["error"]: {
    message: string;
  };
}
