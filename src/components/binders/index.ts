
import { BaseComponent } from '../index';
import { Option } from '../../types';
import { isArray, isFunction, isString } from '../../utils';
import * as binders from './binders';

export type ApplyOptions = { 
    option: Option,
    newValue: string,
    oldValue: string
};

export function apply(elm: HTMLElement, options: ApplyOptions){
    const { option, newValue } = options;
    const { set } = option;

    const setters = isArray(set) ? set : [set];

    (setters as Array<string|Function>).forEach(setter => {
        if(setter && isFunction(setter)) {
            (setter as Function)((elm as BaseComponent).refs, newValue);
        }
    
        if(setter && isString(setter)) {
            let setBinding = setter as keyof typeof binders;
            binders[setBinding]((elm as BaseComponent), options);
        }
    });
}

export type Binders = keyof typeof binders;
