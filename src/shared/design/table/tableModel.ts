import { ValueOf } from "../../utils/typescript/ValueOf";

export const ClassListTableData = {
    alternativeRow: 'alternative-row',
    test: 'test'
} as const;

// export type classListTableDataType = typeof ClassListTableData;
// type up = {
//     readonly alternativeRow: 'alternative-row'
//     readonly test: 'table-custom-test'
// }

// export type classListTableDataKeys = keyof classListTableDataType;
// export type classListTableDataKeys = 'alternativeRow' | 'test';



// export type ClassListTable = (ClassListTableDataType['alternativeRow'] | ClassListTableDataType['test'])[]
// export type classListTable = (classListTableDataType[classListTableDataKeys])[]
export type classListTable = ValueOf<typeof ClassListTableData>[]

// export type ClassListTable = (ClassListTableDataType['alternativeRow' | 'test'])
// export type classListTable = ('alternative-row' | 'test')