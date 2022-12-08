import { Child } from './index';

/** Definition for Kendo UI HTML Specification */
export type ComponentSpec = Child & {
    /** The title/description of the component */
    title: string;
    /** The Component name */
    component: string;
}