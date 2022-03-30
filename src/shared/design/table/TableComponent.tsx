import React from "react";
import { getClassNameForComponent } from "../../utils/design/designUtils";
import { classListTable } from "./tableModel";


interface TableComponentProp {
  data?: { [key: string]: any }[];
  columns?: { label: string; field: string }[];
  showDelete?: boolean;
  templates?: {[key:string]: (value: any, row:any)=> React.ReactNode}
  primaryKey? : string;
  classList?: classListTable;
}

const TableComponent: React.FC<TableComponentProp> = ({
  data = [],
  columns = [],
  showDelete = false,
  templates = {},
  primaryKey,
  classList = [],
}) => {
  // const classData = ['table-custom', ...classList]
  const classData = getClassNameForComponent('table-custom', classList)
  return (
    <table className={classData}>
      <thead>
        <tr>
          {columns.map((ele) => (
            <th key={ele.field}>{ele.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((element: any, index:number) => (
          <tr key={
            primaryKey ? element[primaryKey] : index}>
            {columns.map((col: any) => (
              <td key={col.field}>
                {templates[col.field] ? templates[col.field](element[col.field], element) : element[col.field]}
              </td>
            ))}

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
