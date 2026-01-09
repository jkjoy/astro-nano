---
title: "黑苹果 之 MSI Z590M BOMBER"
description: "微星爆破弹Z590M +i5 10600KF + RX5600XT + BCM94360CD."
date: "2026/1/9"
---

## 起因

最近由于内存涨价了, 我把x99平台的4条16G内存卖了, 回了一波血, 暂时不打算玩这个老旧的平台了

恰好手里头有张微星的Z590M 爆破弹, 准备换平台玩玩.

于是在拼夕夕斥巨资买了一颗i5 10600KF 花费 458..

内存就使用 几年前玩机 扔在抽屉里的 金百达 DDR4 2666MHZ 8G X2 开启XMP 可运行在3000MHZ.

硬盘还有两块铠侠 的 1T m.2 也是当年玩机买的 当时的价格貌似是599一块.

显卡使用百战老兵 AMD RX5600XT 6G 黑苹果免驱

网卡使用 BCM94360CD 黑苹果免驱 (15之前)




## 配置

|  名称 | 型号  | 价格  | 渠道 |
|  ----  |----  | ----  | ----  |
| 主板|微星Z590M爆破弹  | 0 | 拆机|
| CPU  | i5 10600KF | 如今价格458 | 拼夕夕 |
| 内存 | 金百达 8g * 2 | 0 | 拼夕夕 |
| 硬盘| 威刚 512G M2 SSD | 0 | 淘宝 |
| 硬盘| 三星 980 250G M2 SSD | 0 | 拆机 |
| 网卡 | BCM94360CD| 0 |淘宝|
| 显卡 | 蓝宝石RX5600XT | 0 | 拼夕夕 | 
| 机箱 | 航嘉 | 0 | 淘宝|
| 散热器 | 大水牛240水冷 | 0 | 京东|

- 很多都是很多年前装机屯的 或者 用过的就不标注价格了


## 计划

一块SSD安装WIN10 

另一块SSD安装macOS Monterey 双系统 Opencore引导.

## U盘启动盘

装系统必备U盘,大约16G左右够用 32G为佳.

使用`Ventoy`
下载地址 https://www.ventoy.net/en/download.html
制作好的启动盘可以引导各种iso镜像

此时我们就需要`winPE`镜像,我比较推荐的是WEPE https://www.wepe.com.cn/download.html
通过`微PE工具箱V2.3`生成`WePE_64_V2.3.iso`
`Windows`安装镜像 推荐官网下载 https://www.microsoft.com/zh-cn/software-download/windows11
如果需要Linux也可以下载`Ubuntu` `Debian` 等 放入制作好的U盘中,盘符默认为`ventoy`

## 安装Windows

把U盘启动项作为第一启动项 

进入`Ventoy`的引导界面,选择`WePE_64_V2.3.iso`,进入`winPE`

使用`Diskgenius`删除整个硬盘的所有分区 保存 右键点击 该硬盘 转为GPT分区,如果已经是GPT分区跳过此步骤

新建`ESP`分区 大约 300MB 作为EFI引导

新建分区 大约256G 作为Windows安装分区

新建分区 剩余空间 作为软件安装分区 保存

使用`WINSETUP`来安装

镜像选择 下载好的官方镜像 ESP分区选择创建好的 ESP分区

C盘选择 创建的256G分区

点击安装 完成后重启 即完成安装部分

## 激活WINDOWS

我使用的是批量激活码KMS激活,大概半年需要激活一次,使用NAS搭建的KMS服务器
Docker镜像 使用`jkjoy/kms` 映射 1688 8080 端口

顺便激活`Office`全家桶,使用 `Office tool plus` https://otp.landian.vip/zh-cn/

主打一个不花钱

## 引导

使用开源项目 https://github.com/lzhoang2801/OpCore-Simplify

在`windows` 下 挂上代理 安装好`Python`环境

```
git clone https://github.com/lzhoang2801/OpCore-Simplify
cd OpCore-Simplify
python OpCore-Simplify.py
```
根据顺序选择 自动等待下载 并生成opencore引导的EFI文件

## 安装macOS

安装就十分简单了,选择下载镜像

网络上有很多制作好的原版镜像dmg格式

使用[Balena etcher](https://etcher.balena.io/) 烧录U盘, 
使用`Diskgenius`打开U盘的EFI分区把生成好的引导文件复制进去.

重启电脑选择 U盘为第一启动项

即可顺利进入安装界面.

![截屏2025-12-27 23.56.22.png](https://img.imsun.org/2025/12/1090031260.png)


## 补丁

由于macOs 14 以后的系统已经不支持原本免驱的网卡,所以需要使用打补丁的方式来驱动无线网卡

https://github.com/laobamac/OCLP-Mod

此项目也可以给集显驱动和声卡驱动打补丁
![截屏2025-12-27 23.58.41.png](https://img.imsun.org/2025/12/4107869926.png)

## 常用环境

首先安装brewHome brew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

但是奇怪的是使用`brew`不能正常安装`nodejs`，一直报错 
```
Error: An exception occurred within a child process:
  FormulaUnavailableError: No available formula with the name "formula.jws.json".
```

所以使用`nvm`来安装

先安装`nvm`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
```
安装`nodejs` 24.12
```bash
nvm install 24
```

安装`golang`
```bash
brew install go
```