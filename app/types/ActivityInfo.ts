import ActivityEntry from './ActivityEntry';

export default interface ActivityInfo {
  type: string;
  description?: string;
  entries: ActivityEntry[];
}
