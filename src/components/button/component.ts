import { spec } from '../../decorators';
import { BaseComponent } from '../base';
import { ButtonSpec } from './spec';

@spec(ButtonSpec)
export class Button extends BaseComponent {
}