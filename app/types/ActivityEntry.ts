export default interface ActivityEntry {
  from: number;
  to: number;
  title: string;
  institution?: string;
  role?: string;
  description?: string;
  internal_link_id?: string;
  external_link?: string;
}
