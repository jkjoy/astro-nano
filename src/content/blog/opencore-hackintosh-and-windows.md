---
date: 2021/10/07
title: 解决opencore引导macos&Windows双系统蓝屏的问题
description: 解决opencore引导macos和Windows双系统蓝屏的问题的方法是打开config.plist文件，找到booter---Quirks---SyncRuntimePermissions的值，将其改为true即可。
---

最好的办法就是使用mod版本的opencore
 
开机蓝屏报错的解决办法 
 打开`config.plist`查找 
`booter`---`Quirks`---`SyncRuntimePermissions`的值改成`true`即可。