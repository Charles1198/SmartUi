import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from './entry'


createApp({
    template: `
        <div style="display: flex; align-items: center; column-gap: 12px;">
            <SButton color="blue">蓝色按钮</SButton>
            <SButton color="green">绿色按钮</SButton>
            <SButton color="gray">灰色按钮</SButton>
            <SButton color="yellow">黄色按钮</SButton>
            <SButton color="red">红色按钮</SButton>
        </div>
        <div style="display: flex; align-items: center; column-gap: 12px; margin-top: 12px;">
            <SButton plain color="blue">蓝色按钮</SButton>
            <SButton plain color="green">绿色按钮</SButton>
            <SButton plain color="gray">灰色按钮</SButton>
            <SButton plain color="yellow">黄色按钮</SButton>
            <SButton plain color="red">红色按钮</SButton>
        </div>
        <div style="display: flex; align-items: center; column-gap: 12px; margin-top: 12px;">
            <SButton round color="blue">蓝色按钮</SButton>
            <SButton round color="green">绿色按钮</SButton>
            <SButton round color="gray">灰色按钮</SButton>
            <SButton round color="yellow">黄色按钮</SButton>
            <SButton round color="red">红色按钮</SButton>
        </div>
        <div style="display: flex; align-items: center; column-gap: 12px; margin-top: 12px;">
            <SButton size="large">大按钮</SButton>
            <SButton size="medium">默认按钮</SButton>
            <SButton size="small">小按钮</SButton>
        </div>
        <div style="display: flex; align-items: center; column-gap: 12px; margin-top: 12px;">
            <SButton round plain icon="search"></SButton>
            <SButton round plain icon="edit"></SButton>
            <SButton round plain icon="check"></SButton>
            <SButton round plain icon="message"></SButton>
            <SButton round plain icon="delete"></SButton>
        </div>
    `
}).use(SmartyUI).mount("#app")