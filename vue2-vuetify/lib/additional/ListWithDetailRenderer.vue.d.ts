import { JsonFormsRendererRegistryEntry, ControlElement, UISchemaElement, JsonSchema } from '@jsonforms/core';
import { ErrorObject } from 'ajv';
declare const controlRenderer: import("vue").DefineComponent<{
    schema: {
        required: true;
        type: import("vue").PropType<JsonSchema>;
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
    selectedIndex: import("vue").Ref<number | undefined>;
    t: import("vue").ComputedRef<import("@jsonforms/core").Translator>;
    control: import("vue").ComputedRef<{
        translations: import("@jsonforms/core").ArrayTranslations;
        childErrors: ErrorObject<string, Record<string, any>, unknown>[];
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
        rootSchema: JsonSchema;
        id: string;
        config: any;
        schema: JsonSchema;
        enabled: boolean;
        visible: boolean;
        path: string;
    }>;
    addItem(path: string, value: any): () => void;
    removeItems?(path: string, toDelete: number[]): () => void;
    moveUp?(path: string, toMove: number): () => void;
    moveDown?(path: string, toMove: number): () => void;
    styles: import("..").Styles;
    appliedOptions: import("vue").ComputedRef<any>;
    childLabelForIndex: (index: number | null) => string;
    computedLabel: import("vue").ComputedRef<string>;
    vuetifyProps: (path: string, defaultProps?: Record<string, any> | undefined) => any;
}, {}, {
    dataLength(): number;
    foundUISchema(): UISchemaElement;
    arraySchema(): JsonSchema | undefined;
}, {
    composePaths: (path1: string, path2: string) => string;
    createDefaultValue: (schema: JsonSchema) => {};
    addButtonClick(): void;
    moveUpClick(event: Event, toMove: number): void;
    moveDownClick(event: Event, toMove: number): void;
    removeItemsClick(event: Event, toDelete: number[]): void;
    childErrors(index: number): ErrorObject[];
}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        required: true;
        type: import("vue").PropType<JsonSchema>;
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
