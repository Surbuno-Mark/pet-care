# 暖爪宠物护理网站

基于 Next.js 的宠物护理门店网站，包含首页、服务、门店环境轮播、价格、位置示意图和预约表单演示。

## 本地开发

```powershell
npm install
npm run dev
```

当前本地预览已运行在：

```text
http://localhost:5173
```

如果手动启动并指定端口：

```powershell
npm run dev -- -p 5173
```

## 构建

```powershell
npm run build
```

## 部署上线

推荐部署到 Vercel：

1. 将项目推送到 GitHub。
2. 在 Vercel 导入该仓库。
3. Framework Preset 选择 `Next.js`。
4. Build Command 使用 `npm run build`。

预约表单当前为前端演示逻辑。上线时可以接入 Formspree、Netlify Forms、微信客服二维码、企业微信或自有后端接口。

## 图片说明

页面使用的位图资源位于 `public/assets`。如果后续配置了 `OPENAI_API_KEY`，可以用 `gpt-image-2` 重新生成更真实的店内环境图、服务图和非 SVG 地图图像，然后替换同名 PNG。
