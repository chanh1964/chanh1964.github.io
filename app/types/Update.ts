export default interface Update {
  date: number;
  institution: string | null;
  title: string;
  detail: string[] | null;
  link: string | null;
  thumbnail_link: string | null;
}
