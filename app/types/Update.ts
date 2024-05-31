export default interface Update {
  id: string;
  date: number;
  institution: string | null;
  title: string;
  detail: string[] | null;
  links: string[] | null;
  thumbnail_link: string | null;
}
