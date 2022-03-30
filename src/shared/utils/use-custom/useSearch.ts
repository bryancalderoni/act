import { useState } from "react";
import { removeCaseSensitiveByString } from "../stringUtils";

export function useSearch(data: any[], properties : string[] = []) {
    const [search, setSearch] = useState<string>('')
    const getProperties = (properties: string[], ele:any) => {
        return properties.length? properties : Object.keys(ele)
    }


    const controlProperty = (ele: any, property: string, search:string) => {
        return removeCaseSensitiveByString(ele[property]).includes(removeCaseSensitiveByString(search))
        
    }
    const filterData = data.filter(ele =>
       getProperties(properties, ele).reduce((acc:boolean, property:string) =>{
            const control =  controlProperty(ele, property, search);
            return control || acc;
        }, false)
       )
    return {
        search: search,
        setSearch: setSearch,
        filterData: filterData
    }
}
