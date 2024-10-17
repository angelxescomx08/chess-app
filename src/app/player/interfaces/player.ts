import { type COLOR } from '../../chess/interfaces/color';

export type Player = {
  id: string;
  color: COLOR;
  oponentId: string;
  oponentColor: COLOR;
}