import type { Dayjs } from 'dayjs';

export interface IPersona {
  id: number;
  surname: string;
  name: string;
  photo: string;
  post: string;
  type: string;
  description: string;
}

export type TStatus =
  | 'Активный'
  | 'Завершённый'
  | 'Завершена'
  | 'Постоянный'
  | 'Предподготовка';

export interface IPhotoAward {
  photo: string;
  date: string;
}
export interface IPhotoDate {
  type: string | 'photo';
  photo: string;
  date: string;
}
export interface IVideo {
  type: string | 'video';
  photo: string;
  link: string;
  date?: string;
}
export type TStepPhoto = string | IPhotoDate | IVideo;

export interface IWashingDate {
  date: string;
  isFree: boolean;
}

export type TDatesForWashing = [
  string,
  {
    date: Dayjs;
    times: IWashingDate[];
    isFreeDay: boolean;
  },
];

export type TIcons =
  | ''
  | 'angle-left'
  | 'angle-right'
  | 'close-cross'
  | 'close-cross-circle'
  | 'minus'
  | 'plus'
  | 'zero'
  | 'mail'
  | 'eye'
  | 'eye-slash'
  | 'lock'
  | 'search'
  | 'viber'
  | 'whatsapp'
  | 'telegram'
  | 'phone'
  | 'smartphone'
  | 'location-cross'
  | 'clock'
  | 'calendar'
  | 'moon'
  | 'sun'
  | 'gear'
  | 'shuffle'
  | 'list'
  | 'chart-pie'
  | 'services'
  | 'profile'
  | 'cemetery'
  | 'church'
  | 'info'
  | 'contacts'
  | 'colors'
  | 'heart'
  | 'heart-pulse'
  | 'blood'
  | 'plasma'
  | 'equals'
  | 'first'
  | 'person'
  | 'spin'
  | 'temperature';
