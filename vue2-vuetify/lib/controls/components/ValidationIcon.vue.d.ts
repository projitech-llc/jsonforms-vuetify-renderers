import { PropType } from 'vue';
import { ErrorObject } from 'ajv';
declare const _default: import("vue").DefineComponent<{
    errors: {
        required: true;
        type: PropType<ErrorObject<string, Record<string, any>, unknown>[]>;
    };
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    errors: {
        required: true;
        type: PropType<ErrorObject<string, Record<string, any>, unknown>[]>;
    };
}>>, {}>;
export default _default;
