import { Option, State } from './index';


/**
 * Definition for the Component child
 */
 export type Child = {
    /** Name of the child component/element. */
    name: string;
    /** The reference to the child component's HTML spec. \n Do not specify this prop if the target is not a component. */
    $ref?: string;
    /** The tag element to render */
    tag: string;
    /** The selector/s that can be used to target the child component/element. */
    classList: string[];
    /** Describes the child component options that are inherited from its parent. */
    options?: Option[];
    /** Describes the child component/element states. */
    states?: State[];
    /** The innerText of the element */
    text?: string;
    /** Describes the child component/element children. */
    children?: Child[];
}