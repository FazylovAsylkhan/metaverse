const BASE_URL = 'https://new-backend.unistory.app/api/data?';

interface IUser {
  id: number;
  username: 'string';
  email: 'string';
  address: 'string';
}
interface IMeta {
  currentPage: number;
  perPage: number;
  totalPages: number;
}

interface IPage {
  meta: IMeta;
  items: IUser[];
}

export async function getPage(params: string): Promise<IPage> {
  const response = await fetch(`${BASE_URL}/data?${params}`);
  const result = (await response.json()) as unknown as IPage;

  return result;
}
