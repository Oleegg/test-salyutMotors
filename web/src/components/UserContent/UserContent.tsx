import { useState } from "react";
import { Table } from "react-bootstrap";
import { TUserItem } from "@/pages/types";
import { PaginationModule } from "../Pagination";

export const UserContent = ({ users, usersLength }: { users: TUserItem[]; usersLength: number }) => {
  const [activePage, setActivePage] = useState(1);
  const usersList = users.filter((_, i) => {
    const itemsCount = activePage * 20;
    return i < itemsCount && i > itemsCount - 21;
  });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Дата обновления</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            const date = new Date(user.updatedAt);
            const { id, firstname, lastname, phone, email } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{date.toLocaleDateString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <PaginationModule length={usersLength} activePage={activePage} setActivePage={setActivePage} />
    </>
  );
};
