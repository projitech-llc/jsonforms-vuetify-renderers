import { ControlElement, JsonFormsRendererRegistryEntry, JsonSchema } from '@jsonforms/core';
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
    showMenu: import("vue").Ref<boolean>;
    mask: import("vue").Ref<((value: string) => (string | RegExp)[]) | undefined>;
    t: import("vue").ComputedRef<import("@jsonforms/core").Translator>;
    adaptValue: (value: any) => any;
    control: import("vue").ComputedRef<{
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
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
        renderers: JsonFormsRendererRegistryEntry[];
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
    applyMask(): boolean;
    pickerIcon(): string;
    dateFormat(): string;
    dateSaveFormat(): string;
    formats(): string[];
    pickerType(): 'date' | 'month' | 'year';
    minDate(): string | undefined;
    maxDate(): string | undefined;
    inputValue(): string | undefined;
    pickerValue: {
        get(): string | undefined;
        set(val: string): void;
    };
    clearLabel(): string;
    cancelLabel(): string;
    okLabel(): string;
    showActions(): boolean;
}, {
    onInputChange(value: string): void;
    onPickerChange(value: string): void;
    clear(): void;
    okHandler(): void;
    onYear(year: number): void;
    onInput(): void;
    maskFunction(value: string): (string | RegExp)[];
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
