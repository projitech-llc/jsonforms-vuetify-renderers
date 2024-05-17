import { PropType } from 'vue';
import { ErrorObject } from 'ajv';
declare const _default: import("vue").DefineComponent<{
    errors: {
        required: true;
        type: PropType<ErrorObject<string, Record<string, any>, unknown>[]>;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    offsetY: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    overlap: {
        type: BooleanConstructor;
        default: boolean;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
}, {}, {}, {
    tooltipMessages(): string[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    errors: {
        required: true;
        type: PropType<ErrorObject<string, Record<string, any>, unknown>[]>;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    offsetY: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    overlap: {
        type: BooleanConstructor;
        default: boolean;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    bordered: boolean;
    color: string;
    inline: boolean;
    offsetX: string | number;
    offsetY: string | number;
    overlap: boolean;
    header: string;
}>;
export default _default;
