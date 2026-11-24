# HACKS 绝望写手介绍站

以《绝望写手》为主题的响应式单页网站：用酒红幕布、金色舞台灯与大标题呈现剧集介绍，结合人物关系、主题分析、视听素材及少量个人感想。

参考 [COCO 介绍站](https://zwj123-sudo.github.io/coco-web/) 的内容组织，独立编写实现。无前端依赖、无构建步骤，可直接上传 GitHub Pages；主内容随 HTML 提供，本地双击即可浏览。

## 文件

- `index.html`：页面内容、人物介绍、图集与感想。
- `style.css`：视觉、移动端布局、焦点样式与减少动画设置。
- `main.js`：导航状态、滚动进度、季数切换、移动菜单与图片灯箱。
- `assets/`：本地图片与 `sources.json` 来源记录。
- `.nojekyll`：直接发布静态文件。
- `design-qa.md`：实际浏览器验证记录。

## 页面内容

| 原参考站内容 | 本站对应内容 |
| --- | --- |
| 首页与导航 | 舞台首页、探索故事、预告入口、七区块导航 |
| 剧情介绍 | 剧集概览、主创与主演、五季切换 |
| 六位人物 | Deborah、Ava、Marcus、Jimmy、Kayla、DJ |
| 人物关系图 | 创作关系与职业、家庭关系概览 |
| 补充（获奖） | 剧集、主演、客串表演与导演的主要获奖，12 组记录及官方出处 |
| 主题分析 | 创作、野心与权力、亲密关系 |
| 视听展示 | 六张图集、可关闭灯箱、官方预告 |
| 原声与配乐 | 三首原声介绍、作曲家官方专辑入口 |
| 来源与页脚 | 来源、版权归属、官方链接、返回顶部 |
| 补充 | 现有个人感受与默认折叠的剧透感想 |

## 验证状态

当前版已完成桌面 1487 × 1058、手机 390 × 844 和窄屏 320 × 740 检查。五季概览、图片灯箱、手机菜单、人物小记及剧透折叠已验证；标题更换字体后复核了窄屏可读性，新增获奖记录的展开、收起及导航检查通过。JavaScript 语法、资源引用和锚点检查通过，浏览器控制台未发现错误或警告。详细结果见 `design-qa.md`。当前为可本地预览和上传的版本，尚未发布 GitHub Pages。

## 本地查看

可直接双击 `index.html`。如需与线上环境一致，进入本目录运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4173/`。不需要安装 npm 包。

## 发布到自己的 GitHub Pages

发布账号：`bobogigi356`。目标仓库：`bobogigi356/hacks-web`。账号已确认并完成登录，正在准备上传与发布，尚未上线。

预计仓库地址：`https://github.com/bobogigi356/hacks-web`。预计网站地址：`https://bobogigi356.github.io/hacks-web/`。完成发布后再把这两个地址作为简历中的有效链接。

1. 在 `bobogigi356` 账号中创建公开仓库，名称 `hacks-web`。
2. 上传本目录中的 `index.html`、`style.css`、`main.js`、`.nojekyll`、整个 `assets/` 文件夹以及本 README。保证 `index.html` 在仓库根目录，不能额外套一层 `hacks-web` 文件夹。
3. 在仓库 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**。
4. Branch 选 `main`，文件夹选 `/ (root)`，保存。
5. 等待 GitHub Pages 发布成功，在 Pages 页面查看并核对实际网址，预计为 `https://bobogigi356.github.io/hacks-web/`。

发布设置已按 [GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 核对。

CSS、脚本和图片都采用相对路径，可在 GitHub 的项目子路径下使用。原始聊天、个人书影音项目及本地素材库不会随本目录上传。

## 获奖内容来源

“获奖荣誉”以 2026-11-24 核对的官方记录为准，主要获奖按颁奖年份列示，皮博迪奖保留官方标注的年度。个人奖项仅列凭本剧获奖的记录；提名不计入获奖总数。

- [Television Academy：本剧艾美奖记录](https://www.televisionacademy.com/shows/hacks)
- [Golden Globes：本剧金球奖记录](https://goldenglobes.com/tv-show/hacks/)
- [Critics Choice：2025 年获奖名单](https://www.criticschoice.com/30th-annual-critics-choice-awards-list-of-nominees-and-winners-2025/)与[2026 年获奖名单](https://www.criticschoice.com/one-battle-after-another-wins-best-picture-at-the-31st-annual-critics-choice-awards/)
- [SAG-AFTRA：2023 年获奖名单](https://www.sagawards.org/media/news/releases/outstanding-film-and-television-performances-honored-29th-annual-screen-0)与[2025 年获奖名单](https://www.sagawards.org/media/news/releases/outstanding-film-and-television-performances-honored-31st-annual-screen-actors)
- [Peabody：本剧获奖档案](https://peabodyawards.com/award-profile/hacks/)

## 内容维护

日常只需要修改三个文件中的内容。五季概览数据在 `main.js` 的 `seasons` 数组；首页默认展示的第一季文字在 HTML 中也保留一份，修改时同步。个人感想在 `index.html` 的 `#notes` 中，署名没有预填。图片替换后同步修改 `assets/sources.json`。

个人书影音网站是另一个独立项目，不属于本仓库范围。

## 素材来源

- 剧情、主创、主演与预告：[WBD / HBO Max 官方资料](https://press.wbd.com/us/property/hacks)。
- 剧照：[WBD 公开图片页](https://press.wbd.com/us/property/hacks/images) 上可公开查看的缩略图，本地保存并记录原地址；未访问需要登录的原图下载。
- 第三季末：[TheWrap 演员访谈](https://www.thewrap.com/hacks-season-3-finale-jean-smart-hannah-einbinder-interview/)。
- 原声：[Carlos Rafael Rivera 官方专辑页](https://carlosrafaelrivera.bandcamp.com/album/hacks-season-1-original-series-soundtrack)。
- 首页标题使用系统 Georgia 粗斜体，增强横向笔画；已移除不再使用的 Bodoni 字体文件。
- `stage-hero.png`、`writers-desk.png`：使用内置 ImageGen 生成的舞台与写作桌面气氛图，均不冒充剧照。

作品名称、人物及剧照等相关权利归原权利人。本站是非官方剧集介绍与个人学习项目。

## 简历项目表述

下面的表述可在完成页面验证后使用；线上地址、仓库地址在实际发布后补充。

**《绝望写手》剧集介绍站｜HTML / CSS / JavaScript · AI 辅助开发**

- 参考影视专题站完成内容拆解、视觉还原与响应式单页实现，组织剧情、六位人物、人物关系、主题及视听内容。
- 实现五季内容切换、移动导航、滚动定位与进度、图片灯箱及剧透折叠，加入键盘操作和减少动画支持。
- 使用 AI 辅助开发与图像生成，结合官方资料完成素材整理，并通过桌面、手机浏览器检查页面和核心交互。

确认 GitHub Pages 已上线后，可补一句“部署至 GitHub Pages，提供公开源码与在线演示”。不填写虚构的访问量、性能成绩或尚未发生的上线状态。
