export interface IParticipator {
  username: 'string';
  email: 'string';
  address: 'string';
  id: number;
}

export interface IMeta {
  currentPage: number;
  perPage: number;
  totalPages: number;
}
