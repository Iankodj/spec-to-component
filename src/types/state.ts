type States = "hover" | "focus" | "active" | "selected" | "disabled" | "valid" | "invalid"| "indeterminate" | "required"| "loading"|  "orientation";

/**
 * Definition for the Component state
 */
export type State = {
    /**
     * Name of the component state.
     */
    name: States;
    /**
     * Selectors of the component state.
     */
    selector: string[];
}