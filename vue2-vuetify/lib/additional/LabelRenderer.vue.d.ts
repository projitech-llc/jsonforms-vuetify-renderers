import { JsonFormsRendererRegistryEntry, LabelElement } from '@jsonforms/core';
declare const labelRenderer: import("vue").DefineComponent<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<LabelElement>;
    };
    path: {
        required: true;
        type: StringConstructor;
    };
    enabled: {
        required: false;
        type: BooleanConstructor;
        default: undefined;
    };
    renderers: {
        required: boolean;
        type: import("vue").PropType<JsonFormsRendererRegistryEntry[]>;
        default: undefined;
    };
    cells: {
        required: boolean;
        type: import("vue").PropType<import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[]>;
        default: undefined;
    };
    config: {
        required: boolean;
        type: ObjectConstructor;
        default: undefined;
    };
}, {
    label: import("vue").ComputedRef<{
        text: string;
        visible: boolean;
        config: any;
        renderers: JsonFormsRendererRegistryEntry[];
        cells: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
    }>;
} & {
    appliedOptions: import("vue").ComputedRef<any>;
    vuetifyProps: (path: string, defaultProps?: Record<string, any> | undefined) => any;
    styles: import("..").Styles;
}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<LabelElement>;
    };
    path: {
        required: true;
        type: StringConstructor;
    };
    enabled: {
        required: false;
        type: BooleanConstructor;
        default: undefined;
    };
    renderers: {
        required: boolean;
        type: import("vue").PropType<JsonFormsRendererRegistryEntry[]>;
        default: undefined;
    };
    cells: {
        required: boolean;
        type: import("vue").PropType<import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[]>;
        default: undefined;
    };
    config: {
        required: boolean;
        type: ObjectConstructor;
        default: undefined;
    };
}>>, {
    enabled: boolean;
    renderers: JsonFormsRendererRegistryEntry[];
    cells: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
    config: Record<string, any>;
}>;
export default labelRenderer;
export declare const entry: JsonFormsRendererRegistryEntry;
