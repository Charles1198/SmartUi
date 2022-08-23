/// <reference types="vitest" />

import { defineConfig } from "vite";
// 支持.vue文件，支持template模板
import vue from "@vitejs/plugin-vue";
// 支持JSX组件
import vueJsx from '@vitejs/plugin-vue-jsx'
// unocss
import Unocss from "./config/unocss";

// 库模式配置
const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue"
        }
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    // 添加库模式配置
    build: {
        rollupOptions,
        minify: false,
        cssCodeSplit: true,
        lib: {
            entry: "./src/entry.ts",
            name: "SmartUI",
            fileName: "smart-ui",
            formats: ["es", "umd", "iife"]
        }
    },
    plugins: [
        vue(),
        // 添加JSX插件
        vueJsx(),
        // 添加UnoCSS插件
        Unocss()
    ],
    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }
});