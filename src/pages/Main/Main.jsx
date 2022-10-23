import React from "react";
import SideBar from "@components/SideBar/index";
import Header from "@components/Header/index";
import Board from "@components/Board/index";
import "./Main.scss";
import { useGetUsersQuery } from "@store/kanbanApi";

export function Main({
                       boards,
                       columns,
                       handleClickProperBoard,
                       tasks
                     }) {

  const { data = [] } = useGetUsersQuery();

  console.log(data);

  return (
    <main className="main">
      {data.map(i => i.name + " ")}
      <Header />
      <div className="main__container">
        <SideBar
          boards={boards}
          columns={columns}
          handleClickProperBoard={handleClickProperBoard}
        />
        <Board columns={columns} tasks={tasks} />
      </div>
    </main>
  );
}
