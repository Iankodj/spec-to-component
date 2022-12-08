import { Binders } from "../components/binders";

type StylingOptions =  'name' | 'size' | 'rounded' | 'fillMode' | 'themeColor' | 'orientation'; 

/**
 * Definition for the Component option
 */
 export type Option = {
    /** Name of the component option. */
    name: string | StylingOptions;
    /** The default value of the option. */
    value: string;
    /** The accepted values of the component option. */
    values?: OptionValue[];
    /** Function to be called when option is changed. */
    set?: Function | Binders | Array<Function|Binders>;
}

/**
 * The accepted values of the component option.
 */
 export type OptionValue = {
    /** Name of the component option's value. */
    name: string;
    /** The selector/s that can be used to target the component with this option enabled. */
    classList?: string[];
}