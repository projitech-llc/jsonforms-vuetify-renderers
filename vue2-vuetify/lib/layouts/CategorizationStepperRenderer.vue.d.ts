import { JsonFormsRendererRegistryEntry, Layout, Categorization, Category, Tester } from '@jsonforms/core';
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
    activeCategory: import("vue").Ref<number>;
    ajv: import("ajv").default;
    t: import("vue").ComputedRef<import("@jsonforms/core").Translator>;
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
    styles: import("..").Styles;
    appliedOptions: import("vue").ComputedRef<any>;
    vuetifyProps: (path: string, defaultProps?: Record<string, any> | undefined) => any;
}, {}, {
    visibleCategories(): (Category | Categorization)[];
    visibleCategoryLabels(): string[];
}, {
    translateByText(text: string): string;
}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
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
export declare const categorizationStepperTester: Tester;
export declare const entry: JsonFormsRendererRegistryEntry;
