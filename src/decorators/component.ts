import { ComponentSpec } from "../types";
import { toKebabCase } from "../utils";

export function spec(spec?: ComponentSpec) {
    return function (target: any) {
        if(!spec) {
            return;
        }
        
        if(spec.options && spec.options.length) {
            target.observedAttributes = spec.options.map(option => toKebabCase(option.name));
            
            Object.defineProperty(target.prototype, 'spec', {
                configurable: true,
                enumerable: false,
                get: () => {
                    return spec;
                }
            });
        }

        window.customElements.define(spec.component, target);
    };
}