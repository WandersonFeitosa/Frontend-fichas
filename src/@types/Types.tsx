export interface CharInfo {
  id: string;
  name: string;
  nex: number;
  classe?: string;
  trail?: string;
  rank?: string;
  afinity?: string;
  origin: string;
  versatility?: string;
  age?: number;
  attributes: {
    str: number;
    agi: number;
    int: number;
    pre: number;
    vig: number;
  };
  saude: {};
  skills: [];
}

export interface UserInfo {
  id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  username?: string;
}
export type SkillsInfo = Array<[string, number]>;

export interface newCharInfo {
  name?: string;
  age: number;
  nex: number;
  class: string;
  origin: string;
  trail: string;
  versatility: string;
  afinity: string;
  rank: string;
}
