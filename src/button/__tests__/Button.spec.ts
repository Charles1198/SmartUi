import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe("Button", () => {
  test("label", () => {
    // 渲染一个按钮，文字是 Button
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    // 测试按钮显示文字是不是 Button
    expect(wrapper.text()).toBe("Button");
  });

  test("default", () => {
    // 渲染一个默认按钮
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    // 测试默认按钮的颜色是不是蓝色（class里有没有bg-blue-500）
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  test("red", () => {
    // 渲染一个红色按钮
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });

    // 测试默认按钮的颜色是不是红色（class里有没有bg-red-500）
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
