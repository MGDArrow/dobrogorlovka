export interface IPersona {
  id: number;
  surname: string;
  name: string;
  photo: string;
  post: string;
  type: string;
  description: string;
}

export type TStatus = 'Активный' | 'Завершённый';

export interface IPhotoDate {
  type: string | 'photo';
  photo: string;
  date: string;
}
export interface IVideo {
  type: string | 'video';
  photo: string;
  link: string;
}
export type TStepPhoto = string | IPhotoDate;
