import { PropType } from 'vue';
import { ErrorObject } from 'ajv';
declare const _default: import("vue").DefineComponent<{
    errors: {
        required: true;
        type: PropType<ErrorObject<string, Record<string, any>, unknown>[]>;
    };
}, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    errors: {
        required: true;
        type: PropType<ErrorObject<string, Record<string, any>, unknown>[]>;
    };
}>>, {}>;
export default _default;
