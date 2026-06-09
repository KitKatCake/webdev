# webdev

this is dev test

## 镜像与部署说明

- **镜像仓库**：`harbor.xingzhan.cloud:9443/public/labubu-web`
- **镜像标签**：`:dev`（与默认 `:test` 标签区分）
- **端口映射**：宿主机 `3000` → 容器 `3000`（应用监听 `PORT=3000`，详见 `Dockerfile`）
- **容器名**：`labubu-web`

## GitHub Token 用途

> **安全提示**：请勿将 PAT 硬编码到任何文件、commit、workflow 引用里。所有 token 只能放到
> **Repository Settings → Secrets and variables → Actions**（CI 端）或本地 `gh auth login` /
> shell 环境变量（开发端）。本 README 不存放任何 token。

PAT 的合法使用场景：

1. **本地 git 推送 / 拉取**（仓库是 private 时）
   - `git push https://<TOKEN>@github.com/KitKatCake/webdev.git`
   - 或 `gh auth login --with-token < <TOKEN>`
2. **CI secrets**（按需配置）：
   - `GH_TOKEN` / `GITHUB_TOKEN` — 让 workflow 内部 `actions/checkout` 等操作访问 GitHub API
   - 仅在 `KitKatCake/webdev` 自己仓库内的 workflow 里使用
3. **调试 Actions**：在本地 `act` 工具中通过环境变量注入

## 流水线修复要点

1. `public/` 目录缺失会导致 `COPY --from=builder /app/public ./public` 失败 — 已创建占位
2. `next.config.js` 维持 `output: "standalone"`，配合多阶段 `Dockerfile` 才能跑 `node server.js`
3. 镜像 tag 由 `:test` 改为 `:dev`（与默认 `test` 标签区分）
4. 部署命令 `docker run -p 3000:3000` 显式确认宿主机 3000 端口绑定

## 本地开发

```bash
npm ci
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Docker 本地构建

```bash
docker build -t labubu-web:dev .
docker run -d --name labubu-web -p 3000:3000 labubu-web:dev
```
