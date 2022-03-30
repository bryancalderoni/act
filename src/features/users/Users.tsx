import React, { useEffect, useState } from "react";
import TableComponent from "../../shared/design/table/TableComponent";
import { ClassListTableData } from "../../shared/design/table/tableModel";
import { useSearch } from "../../shared/utils/use-custom/useSearch";
import { columns } from "./userData";

interface UserApiFakeModel {
  id: number;
  name: string;
  username: string;
  email: string;
}

// interface TemplateModel{

//     id: (id: number, row: UserApiFakeModel) => React.ReactNode
//     actions: (ele: undefined, row: UserApiFakeModel) => React.ReactNode

// }

const UsersComponent: React.FC = () => {
  const [users, setUsers] = useState<UserApiFakeModel[]>([]);
  const { search, setSearch, filterData } = useSearch(users, [
    "name",
    "username",
  ]);

  const templates: {
    id: (id: number, row: UserApiFakeModel) => React.ReactNode
    actions: (ele: undefined, row: UserApiFakeModel) => React.ReactNode
} = {
    id: (id, row) => <i className={id > 5 ? "fa fa-hand-o-up" : "fa fa-hand-o-down"}></i>,
    actions: (ele, user) => <i className="fa fa-trash" onClick={() => deleteUser(user)}></i>
}
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  .then(res => setUsers(res))
}, [])
const deleteUser = (user: UserApiFakeModel) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(res => {
        setUsers(users.filter(ele => ele.id !== user.id))
    }) 
} 

  return (
    <>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      {search}
      <TableComponent
        data={filterData}
        columns={columns}
        showDelete={true}
        templates={templates}
        primaryKey="id"
        classList={[ClassListTableData.alternativeRow]}
      />
    </>
  );
};

export default UsersComponent;
