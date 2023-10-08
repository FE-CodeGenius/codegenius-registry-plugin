export const npmRegisters: Array<{
  key: string;
  value: string;
}> = [
  {
    key: "npm",
    value: "https://registry.npmjs.org/",
  },
  {
    key: "yarn",
    value: "https://registry.yarnpkg.com/",
  },
  {
    key: "tencent",
    value: "https://mirrors.cloud.tencent.com/npm/",
  },
  {
    key: "cnpm",
    value: "https://r.cnpmjs.org/",
  },
  {
    key: "taobao",
    value: "https://registry.npmmirror.com/",
  },
  {
    key: "npmMirror",
    value: "https://skimdb.npmjs.com/registry/",
  },
];
export interface RegistryOptions {
  url: string;
}
