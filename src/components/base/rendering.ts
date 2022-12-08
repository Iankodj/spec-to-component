import { Child } from "../../types";
import { BaseComponent } from "./component";

export async function renderChild(element: HTMLElement, child: Child, refs: any) {
    const childElm = document.createElement(child.tag) as BaseComponent;

    if (child.$ref) {
        refs[child.$ref] = childElm;
    }

    if('classList' in child) {
        childElm.classList.add(...child.classList);
    }
    
    if(child.children) {
        await renderChildren(childElm, child.children, refs);
    }

    element.appendChild(childElm);
}

export async function renderChildren(element: HTMLElement, children: Child[], refs: any) {
     children.forEach(async child => {
        await renderChild(element, child, refs);
    })
}