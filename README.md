# 旅游小程序

基于 uni-app + Vue3 开发的旅游景点浏览小程序，支持微信小程序和 H5 双平台。

## 技术栈

| 类别       | 技术             |
| ---------- | ---------------- |
| 框架       | uni-app (Vue 3)  |
| UI 组件库  | uview-plus 3.x            |
| uni-app 扩展组件 | uni-icons / uni-list / uni-badge |
| 数据模拟   | Mock.js                    |
| HTTP 请求  | uni.request 封装            |
| CSS 预处理 | SCSS / uni-scss            |

## 功能模块

### 首页 (`pages/index/index`)

- 景点搜索框
- Banner 轮播图
- 公告通知栏
- 瀑布流景点列表（支持触底加载更多）
- 图片懒加载
- 一键回到顶部

### 景点详情 (`pages/detail/detail`)

- 景点大图展示
- 景区介绍 / 开放时间
- 游玩项目推荐列表

### 项目详情 (`pages/line/line`)

- 地图定位展示
- 星级评分
- 横向滚动推荐列表

### 喜欢 (`pages/like/like`)

- 收藏的景点卡片列表

### 我的 (`pages/my/my`)

- 微信一键登录 / 授权
- 用户头像昵称编辑 写死的用户信息
- 点赞/喜欢/浏览/收藏 数据统计 写死的
- 个人中心菜单（个人信息、购物车、反馈、邮件、分享）写死的

## 目录结构

```
├── api/                    # 接口层
│   ├── api.js              # 接口定义
│   ├── http.js             # 请求封装（拦截器、Token）
│   ├── mock.js             # Mock 数据入口
│   └── mockData/           # Mock 数据文件
├── pages/                  # 页面
│   ├── index/              # 首页
│   ├── detail/             # 景点详情
│   ├── line/               # 项目详情
│   ├── like/               # 喜欢列表
│   └── my/                 # 个人中心
├── static/                 # 静态资源（图片等）
├── uni_modules/            # uni-app 插件模块
├── App.vue                 # 应用入口
├── main.js                 # 主入口文件
├── pages.json              # 页面路由配置
├── manifest.json           # 应用配置
└── index.html              # H5 入口
```

## 运行方式

### 环境要求

- HBuilderX 3.x+
- 微信开发者工具（小程序调试）
- Node.js 16+

### 启动步骤

1. 用 HBuilderX 打开项目
2. 在插件市场安装 `uview-plus` 到 `uni_modules`
3. 选择运行平台：

```bash
# 微信小程序
点击菜单栏：运行 → 运行到小程序模拟器 → 微信开发者工具

# H5 端
点击菜单栏：运行 → 运行到浏览器
```

### Mock 数据

项目使用 Apifox Mock 作为数据源，接口地址配置在 [api/http.js](api/http.js)：

```js
baseUrl = "https://apifoxmock.com/m1/4728220-0-default/api"
```

> 也可以在 `api/mock.js` 中使用本地 Mock.js 拦截请求。

## 底部导航

| Tab  | 页面              | 图标    |
| ---- | ----------------- | ------- |
| 首页 | pages/index/index | ly-home |
| 喜欢 | pages/like/like   | ly-link |
| 我的 | pages/my/my       | ly-my   |

## 构建发布

```bash
# 微信小程序
HBuilderX 菜单：发行 → 小程序-微信

# H5
HBuilderX 菜单：发行 → 网站-H5手机版
```

## 注意事项

1. 首次运行需在 HBuilderX 插件市场安装 `uview-plus` 组件库
2. 微信小程序需在 `manifest.json` 中配置正确的 AppID
3. `unpackage/` 和 `node_modules/` 已加入 `.gitignore`，不会提交到仓库
