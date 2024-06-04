export default interface ActivityEntry {
  from: number;
  to: number;
  title: string;
  institution?: string;
  role?: string;
  description?: string;
  interal_link_id?: string;
  external_link?: string;
}
