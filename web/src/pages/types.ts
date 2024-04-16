export type TUserItem = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  updatedAt: string;
};

export type TGetServerSideProps = {
  statusCode: number;
  users: TUserItem[];
};
