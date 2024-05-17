import { PropType } from 'vue';
import { Styles } from '../styles';
declare const _default: import("vue").DefineComponent<{
    id: {
        required: true;
        type: StringConstructor;
    };
    visible: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    styles: {
        required: true;
        type: PropType<Styles>;
    };
}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    id: {
        required: true;
        type: StringConstructor;
    };
    visible: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    styles: {
        required: true;
        type: PropType<Styles>;
    };
}>>, {
    visible: boolean;
}>;
export default _default;
