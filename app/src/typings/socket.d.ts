interface Member {
  name: string;
  code: string;
}

export interface Payload {
  ["on:check"]: {
    code: string;
  };
  ["on:join"]: {
    users: Member[];
  };
  ["on:error"]: {
    message: string;
  };
  ["emit:check"]: {
    code: string;
  };
  ["emit:join"]: {
    name: string;
    code: string;
  };
}
