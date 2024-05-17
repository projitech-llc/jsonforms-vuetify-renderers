import { JsonFormsRendererRegistryEntry, Layout } from '@jsonforms/core';
declare const layoutRenderer: import("vue").DefineComponent<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<Layout>;
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
    layout: import("vue").ComputedRef<{
        direction: "row" | "column";
        label: string;
        config: any;
        uischema: import("@jsonforms/core").UISchemaElement;
        schema: import("@jsonforms/core").JsonSchema;
        data: any;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: JsonFormsRendererRegistryEntry[];
        cells: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
    }>;
} & {
    styles: import("..").Styles;
    appliedOptions: import("vue").ComputedRef<any>;
    vuetifyProps: (path: string, defaultProps?: Record<string, any> | undefined) => any;
}, {}, {
    collapse(): boolean;
    /**
     * Combines 'breakHorizontal' with user defined 'col' weights.
     * 'breakHorizontal' takes precedence.
     */
    cols(): (number | false)[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<Layout>;
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
export default layoutRenderer;
export declare const entry: JsonFormsRendererRegistryEntry;
