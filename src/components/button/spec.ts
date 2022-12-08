import { ComponentSpec } from '../../types';

export const ButtonSpec: ComponentSpec = {
    name: 'Button',
    title: 'Kendo Button HTML Spec',
    component: 'kendo-button',
    tag: 'button',
    $ref: 'element',
    classList: ['k-button'],
    options: [
        {
            name: 'size',
            value: 'medium',
            set: 'toggleClassList',
            values: [
                {
                    name: 'small',
                    classList: [
                        'k-button-sm'
                    ]
                }, {
                    name: 'medium',
                    classList: [
                        'k-button-md'
                    ]
                }, {
                    name: 'large',
                    classList: [
                        'k-button-lg'
                    ]
                }, 
                {
                    name: 'none',
                    classList: [
                        ''
                    ]
                }
            ]
        },
        {
            name: 'rounded',
            value: 'medium',
            set: 'toggleClassList',
            values: [{
                    name: 'small',
                    classList: [
                        'k-rounded-sm'
                    ]
                },
                {
                    name: 'medium',
                    classList: [
                        'k-rounded-md'
                    ]
                },
                {
                    name: 'large',
                    classList: [
                        'k-rounded-lg'
                    ]
                },
                {
                    name: 'full',
                    classList: [
                        'k-rounded-full'
                    ]
                }, 
                {
                    name: 'none',
                    classList: [
                        ''
                    ]
                }
            ]
        },
        {
            name: 'fillMode',
            value: 'solid',
            set: [
                'toggleClassList',
                ($refs: any, value: String) => { $refs.icon.setAttribute('name', value) }
            ],
            values: [
                {
                    name: 'solid',
                    classList: [
                        'k-button-solid'
                    ]
                },
                {
                    name: 'flat',
                    classList: [
                        'k-button-flat'
                    ]
                },
                {
                    name: 'outline',
                    classList: [
                        'k-button-outline'
                    ]
                },
                {
                    name: 'link',
                    classList: [
                        'k-button-link'
                    ]
                }
            ]
        },
        {
            name: 'themeColor',
            value: 'base',
            set: 'toggleClassList',
            values: [
                {
                    name: 'base',
                    classList: [
                        'k-button-{options.fillMode}-base'
                    ]
                },
                {
                    name: 'primary',
                    classList: [
                        'k-button-{options.fillMode}-primary'
                    ]
                },
                {
                    name: 'secondary',
                    classList: [
                        'k-button-{options.fillMode}-secondary'
                    ]
                },
                {
                    name: 'tertiary',
                    classList: [
                        'k-button-{options.fillMode}-tertiary'
                    ]
                },
                {
                    name: 'info',
                    classList: [
                        'k-button-{options.fillMode}-info'
                    ]
                },
                {
                    name: 'success',
                    classList: [
                        'k-button-{options.fillMode}-success'
                    ]
                },
                {
                    name: 'warning',
                    classList: [
                        '.k-button-{options.fillMode}-warning'
                    ]
                },
                {
                    name: 'error',
                    classList: [
                        'k-button-{options.fillMode}-error'
                    ]
                },
                {
                    name: 'dark',
                    classList: [
                        '.k-button-{options.fillMode}-dark'
                    ]
                },
                {
                    name: 'light',
                    classList: [
                        'k-button-{options.fillMode}-light'
                    ]
                },
                {
                    name: 'inverse',
                    classList: [
                        'k-button-{options.fillMode}-inverse'
                    ]
                }
            ]
        }, 
        {
            name: 'icon',
            value: '',
            set: ($refs: any, value: String) => { $refs.icon.setAttribute('name', value) }
        }, 
        {
            name: 'text',
            value: 'Button1',
            set: ($refs: any, value: String) => { $refs.text.innerText = value; }
        }
    ],
    states: [
        {
            name: 'hover',
            selector: [
                ':hover',
                '.k-hover'
            ]
        },
        {
            name: 'focus',
            selector: [
                ':focus',
                '.k-focus'
            ]
        },
        {
            name: 'active',
            selector: [
                ':active',
                '.k-active'
            ]
        },
        {
            name: 'selected',
            selector: [
                '.k-selected'
            ]
        },
        {
            name: 'disabled',
            selector: [
                ':disabled',
                '[disabled]',
                '.k-disabled'
            ]
        }
    ],
    children: [
        {
            name: 'button-icon',
            $ref: 'icon',
            tag: 'kendo-icon',
            classList: [
                'k-button-icon'
            ]
        },
        {
            name: 'button-text',
            tag: 'span',
            $ref: 'text',
            classList: [
                'k-button-text'
            ]
        }
    ]
};