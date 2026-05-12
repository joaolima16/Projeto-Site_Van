export interface Travel {
  id: number;
  titulo: string;
  categoria: string;
  data: string;
  periodo: string;
  local: string;
  resumo: string;
  descricao: string;
  capa: string;
  fotos: string[];
  tags: string[];
  cor: string;
  corLight: string;
  corClass: string;
  corLightClass: string;
  corRingClass: string;
  num: string;
  placeholder?: string;
}

export interface GridViewProps {
  viagens: Travel[];
  onSelect: (viagem: Travel) => void;
}
