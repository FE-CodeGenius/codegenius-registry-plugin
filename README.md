# @codegenius/registry-plugin

切换 **NPM** 镜像地址, 支持命令模式, 询问模式和 API 模式;

使用场景: 用于没有安装其他插件且对于切换命令地址不熟悉的情况下切换常见的镜像地址.

## 安装

```bash
npm i @codegenius/registry-plugin -D
```

```javascript
import { defineConfig } from "code-genius";
import { npmRegistryInstaller } from "@codegenius/registry-plugin";

export default defineConfig({
  plugins: [
    npmRegistryInstaller(),
  ],
});
```

## 使用

### 命令模式

```bash
# 设置 npm 官方源
codeg registry -u https://registry.npmjs.org/
```

| 选项      | 描述         |
| --------- | ------------ |
| -a, --ask | 启用询问模式 |

### 询问模式

```bash
# 启动询问模式
codeg registry --ask
```

```
# 询问过程
1. 请选择 NPM 镜像
```

### API 模式

仅对 `npm config set registry xxx` 包装, 无其它配置.

```typescript
import { npmRegistry } from "@codegenius/registry-plugin";

(async () => {
  await npmRegistry("https://registry.npmjs.org/");
})();
```
