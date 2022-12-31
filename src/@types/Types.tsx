export interface CharInfo {
  id: string;
  nome: string;
  nex: number;
  classe?: string;
  trilha?: string;
  patente?: string;
  afinidade?: string;
  origem: string;
  versatilidade?: string;
  idade?: number;
  atributos: {
    forca: number;
    agilidade: number;
    inteligencia: number;
    presenca: number;
    vigor: number;
  };
  saude: {};
  pericias: {
    acrobacia: number;
    adestramento: number;
    artes: number;
    atletismo: number;
    atualidades: number;
    ciencias: number;
    crime: number;
    diplomacia: number;
    enganacao: number;
    fortitude: number;
    furtividade: number;
    iniciativa: number;
    intimidação: number;
    intuicao: number;
    investigacao: number;
    luta: number;
    medicina: number;
    ocultismo: number;
    percepcao: number;
    pilotagem: number;
    pontaria: number;
    profissao: number;
    reflexos: number;
    religiao: number;
    sobreviencia: number;
    tatica: number;
    tecnologia: number;
    vontade: number;
  };
}

export interface UserInfo {
  id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  username?: string;
}
export type SkillsInfo = Array<[string, number]>;
