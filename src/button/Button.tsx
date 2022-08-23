import { defineComponent, PropType } from 'vue';
import "uno.css"

export type IColor = "black" | "gray" | "red" | "yellow" | "gray" | "green" | "blue"
export type ISize = "large" | "medium" | "small"
export const props = {
    color: {
        type: String as PropType<IColor>,
        default: "blue"
    },
    size: {
        type: String as PropType<IColor>,
        default: "medium"
    },
    icon: {
        type: String,
        default: "",
    },
    plain: {
        type: Boolean,
        default: false,
    },
    round: {
        type: Boolean,
        default: false,
    },
}

const size = {
    large: {
      x: "6",
      y: "3",
      text: "lg",
    },
    medium: {
      x: "4",
      y: "2",
      text: "base",
    },
    small: {
      x: "2",
      y: "1",
      text: "sm",
    },
  };

export default defineComponent({
    name: "SButton",
    props,
    setup(props, { slots }) {
        console.log(props);
        
        return () => <button
            class={`
            py-${size[props.size].y}
            px-${size[props.size].x}
            font-semibold 
            rounded-lg 
            shadow-md 
            text-${props.plain ? props.color + "-500" : "white"}
            text-${size[props.size].text}
            bg-${props.color}-${props.plain ? "100" : "500"}
            hover:text-white
            hover:bg-${props.color}-700 
            border-${props.color}-${props.plain ? "500" : "500"}
            border-solid
            ${props.round ? "rounded-full" : "rounded-lg"}
            cursor-pointer 
            `}
        >
            { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
            { slots.default ? slots.default() : '' }
        </button>
    }
})