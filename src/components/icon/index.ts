import { spec } from '../../decorators';
import { BaseComponent } from '../base';

@spec({
    name: 'Icon',
    title: 'Kendo Button HTML Spec',
    tag: 'div',
    component: 'kendo-icon',
    $ref: 'element',
    classList: [ 'k-icon' ]
})
export class Icon extends BaseComponent {
}