import { BaseComponent } from '../base';
import { ApplyOptions } from './index';

export function toggleClassList(elm: BaseComponent, options: ApplyOptions) {
    
    const { option, oldValue, newValue } = options;
    const oldClassList = option.values?.find(value => value.name === oldValue)?.classList;
    const newClassList = option.values?.find(value => value.name === newValue)?.classList;

    if(oldClassList) {
        oldClassList.forEach(value => toggleClass(elm, value, false));
    }

    if(newClassList) {
        newClassList.forEach(value => toggleClass(elm, value, true));
    }

}

function toggleClass(elm: BaseComponent, value: string, toggle: boolean = true) {
    const targetElm = elm.refs.element || elm;
    value = elm.getValue(value);

    targetElm.classList.toggle(value, toggle);
}


