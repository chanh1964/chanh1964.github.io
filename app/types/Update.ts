export default interface Update {
  id: string;
  date: number;
  institution?: string;
  title: string;
  detail?: string[];
  links?: string[];
  thumbnail_link?: string;
}
