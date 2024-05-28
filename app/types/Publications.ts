import PublicationInfo from './PublicationInfo';

export default interface Publications {
  journal: PublicationInfo[];
  conference: PublicationInfo[];
  conference_nonreview: PublicationInfo[];
}
