const typeCheck = (val: any, type: string) => typeof val === type;

export const isFunction = (func: any) => typeCheck(func, 'function')
export const isString = (str: any) => typeCheck(str, 'string')
export const isArray = (arr: any) => Array.isArray(arr);
export const isPresent = (val: any) => val !== null && val !== undefined;

export const toKebabCase = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

const FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;

const getterCache: any = {};

export const getter = (field: string, safe?: boolean) => {
    const key = field + safe;

    if (getterCache[key]) {
        return getterCache[key];
    }

    const fields: Array<any> = [];
    
    field.replace(FIELD_REGEX, (_, index, indexAccessor, field) => { 
        fields.push(isPresent(index) ? index : (indexAccessor || field));
        return undefined;
    });

    getterCache[key] = (obj: any) => {
        let result = obj;
        for (let idx = 0; idx < fields.length; idx++) {
            result = result[fields[idx]];
            if (!isPresent(result) && safe) {
                return result;
            }
        }

        return result;
    };

    return getterCache[key];
};