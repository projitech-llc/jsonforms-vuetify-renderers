import { ControlElement, JsonFormsRendererRegistryEntry, UISchemaElement } from '@jsonforms/core';
declare const controlRenderer: import("vue").DefineComponent<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<ControlElement>;
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
    input: {
        control: import("vue").ComputedRef<{
            uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
            renderers: JsonFormsRendererRegistryEntry[];
            cells: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
            label: string;
            description: string;
            required: boolean;
            i18nKeyPrefix: string;
            uischema: ControlElement;
            errors: string;
            data: any;
            rootSchema: import("@jsonforms/core").JsonSchema;
            id: string;
            config: any;
            schema: import("@jsonforms/core").JsonSchema;
            enabled: boolean;
            visible: boolean;
            path: string;
        }>;
    } & import("@jsonforms/core").DispatchPropsOfControl & {
        styles: import("..").Styles;
        isFocused: import("vue").Ref<boolean>;
        appliedOptions: import("vue").ComputedRef<any>;
        controlWrapper: import("vue").ComputedRef<{
            id: any;
            description: any;
            errors: any;
            label: any;
            visible: any;
            required: any;
        }>;
        onChange: (value: any) => void;
        vuetifyProps: (path: string, defaultProps?: Record<string, any> | undefined) => any;
        persistentHint: () => boolean;
        computedLabel: import("vue").ComputedRef<string>;
    };
    nested: import("../util").NestedInfo;
    control: import("vue").ComputedRef<{
        uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
        renderers: JsonFormsRendererRegistryEntry[];
        cells: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
        label: string;
        description: string;
        required: boolean;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        data: any;
        rootSchema: import("@jsonforms/core").JsonSchema;
        id: string;
        config: any;
        schema: import("@jsonforms/core").JsonSchema;
        enabled: boolean;
        visible: boolean;
        path: string;
    }>;
    handleChange(path: string, value: any): void;
    styles: import("..").Styles;
    isFocused: import("vue").Ref<boolean>;
    appliedOptions: import("vue").ComputedRef<any>;
    controlWrapper: import("vue").ComputedRef<{
        id: any;
        description: any;
        errors: any;
        label: any;
        visible: any;
        required: any;
    }>;
    onChange: (value: any) => void;
    vuetifyProps: (path: string, defaultProps?: Record<string, any> | undefined) => any;
    persistentHint: () => boolean;
    computedLabel: import("vue").ComputedRef<string>;
}, {}, {
    hasAdditionalProperties(): boolean;
    showAdditionalProperties(): boolean;
    detailUiSchema(): UISchemaElement;
}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<ControlElement>;
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
export default controlRenderer;
export declare const entry: JsonFormsRendererRegistryEntry;
