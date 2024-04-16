import { Dispatch, SetStateAction, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";

export const PaginationModule = ({
  length,
  activePage,
  setActivePage,
}: {
  length: number;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}) => {
  const pages = length / 20;

  const getItems = () => {
    let items = [];
    for (let i = 1; i <= pages; i++) {
      items.push(
        <Pagination.Item key={i} active={i === activePage} onClick={() => setActivePage(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return items;
  };

  const items = getItems();

  return (
    <div>
      <Pagination>
        <Pagination.First onClick={() => setActivePage(1)} disabled={activePage === 1} />
        <Pagination.Prev onClick={() => setActivePage((prev) => prev - 1)} disabled={activePage === 1} />
        {items}
        <Pagination.Next onClick={() => setActivePage((prev) => prev + 1)} disabled={activePage === items.length} />
        <Pagination.Last onClick={() => setActivePage(items.length)} disabled={activePage === items.length} />
      </Pagination>
    </div>
  );
};
