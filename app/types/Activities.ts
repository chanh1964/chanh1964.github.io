import ActivityEntry from './ActivityEntry';
import ActivityInfo from './ActivityInfo';

export default interface Activities {
  academic: ActivityInfo[];
  international: ActivityInfo[];
  volunteer: ActivityEntry[];
}
