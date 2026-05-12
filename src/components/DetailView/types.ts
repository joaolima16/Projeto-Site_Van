import type { Travel } from "../TravelGallery";

export interface DetailViewProps {
  viagem: Travel;
  fotoAtiva: string | null;
  setFotoAtiva: (url: string) => void;
  onVoltar: () => void;
}
