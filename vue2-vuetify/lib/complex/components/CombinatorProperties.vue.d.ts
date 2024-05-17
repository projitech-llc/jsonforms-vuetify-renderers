import { JsonSchema, UISchemaElement } from '@jsonforms/core';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    schema: {
        type: PropType<JsonSchema>;
        required: true;
    };
    combinatorKeyword: {
        type: PropType<"oneOf" | "anyOf" | "allOf">;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
}, {
    otherProps: JsonSchema;
    foundUISchema: UISchemaElement;
    isLayoutWithElements: boolean;
}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        type: PropType<JsonSchema>;
        required: true;
    };
    combinatorKeyword: {
        type: PropType<"oneOf" | "anyOf" | "allOf">;
        required: true;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
export default _default;
