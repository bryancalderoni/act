export const mergeClass = (initClass: string = '', arrayClass: string[] = []) => {
return [initClass, ...arrayClass]
} 

export const getClassNameByArray = (arrayClass: string[]) => {
return arrayClass.join(' ');
}

export const getClassNameForComponent = (initClass: string = '', arrayClass: string[] = []) => {
    const array = mergeClass(initClass, arrayClass);
    return getClassNameByArray(array)
}