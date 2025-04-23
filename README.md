# AI Admin

## 项目介绍

基于 Arco Design Pro 开发的现代化管理系统，集成了先进的 AI 功能，提供了丰富的组件和完善的开发框架。本项目旨在为企业级应用提供一个高效、智能的管理平台解决方案。

## 功能特点

- 🎨 **优雅美观**: 基于 Arco Design 组件库，提供现代化的 UI 设计
- 🛡 **TypeScript**: 使用 TypeScript 开发，提供完整的类型定义
- 🌐 **国际化**: 内置多语言支持
- 🎭 **主题切换**: 支持明暗主题动态切换
- 📱 **响应式**: 支持多种设备屏幕
- 🔐 **权限管理**: 完善的权限控制系统
- 🔌 **插件体系**: 可扩展的插件架构

## 技术栈

- 框架：React
- UI 库：Arco Design
- 开发语言：TypeScript
- 状态管理：React Context
- 构建工具：Create React App
- 代码规范：ESLint + Prettier
- 样式处理：Less

## 快速开始

### 环境准备

- Node.js >= 14
- npm >= 6.14.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 项目构建

```bash
npm run build
```

## 项目结构

```
├── src/
│   ├── assets/        # 静态资源
│   ├── components/    # 公共组件
│   ├── pages/         # 页面组件
│   ├── locale/        # 国际化资源
│   ├── store/         # 状态管理
│   ├── utils/         # 工具函数
│   └── style/         # 全局样式
├── public/            # 公共资源
└── config-overrides.js # 配置文件
```

## 开发指南

1. **组件开发**
   - 遵循组件设计规范
   - 编写完整的类型定义
   - 添加必要的注释

2. **样式开发**
   - 使用 Less 预处理器
   - 遵循 BEM 命名规范
   - 优先使用主题变量

3. **提交规范**
   - 遵循 Git Commit 规范
   - 保持代码整洁

## 浏览器支持

- Chrome >= 80
- Firefox >= 78
- Safari >= 13
- Edge >= 88

## 贡献指南

欢迎提交 Issue 或 Pull Request 来帮助改进项目。

## 许可证

[MIT License](LICENSE)
