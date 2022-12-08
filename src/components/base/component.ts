import { ComponentSpec } from "../../types";
import { renderChild } from "./rendering";
import { BaseSpec } from "./spec";
import { apply } from '../binders';
import { getter, toKebabCase } from "../../utils";

export class BaseComponent extends HTMLElement {
    static observedAttributes: string[] = [];
    public refs: any = {};
    public options: any = {};

    get spec(): ComponentSpec {
        return BaseSpec;
    }

    async connectedCallback() {
        await this.render();
        this.applyOptions();
        this.renderedCallback();
    }

    /** Called when rendering is complete. */
    renderedCallback(){}

    /** Setting up the default options */
    applyOptions(){
        this.spec.options?.forEach(option => {
            this.options[option.name] = option.value;
            this.setAttribute(toKebabCase(option.name), option.value);
        });
    }

    async render() {
        this.spec.classList.push(...Array.from(this.classList));
        this.removeAttribute('class');
        await renderChild(this as HTMLElement, this.spec, this.refs);
    }

    attributeChangedCallback(attr: string, oldValue: string, newValue: string) {
        if(this.spec.options) {
            const option = this.spec.options.find(o => toKebabCase(o.name) === attr);
            if(option) {
                this.options[option.name] = newValue;
                apply(this, {
                    option: option,
                    oldValue,
                    newValue
                });
            }
        }
    }

    getValue(value: string): string {
        const regex = /\{([^}]*)\}/;
        const match = value.match(/\{([^}]*)\}/);
        let expr = match && match[1];

        if(expr) {
            value = value.replace(regex, this.parseExpression(expr));
        }

        return value;
    }

    parseExpression(expr: string) {
        return getter(expr)(this);
    }
}

