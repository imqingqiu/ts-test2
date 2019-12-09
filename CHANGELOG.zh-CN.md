## 更新日志

### 0.0.0

_2019-10-25_

#### 新特性

-- $log
---- 在 plugins 中添加 $log， 取代了 conlos.log() 的使用，便于控制日志的打印
-- 新加了 eslint 忽略名单

#### Bug fixes

eg:
-- Bug1: \$axios
---- axios 不能被引用，在 tsconfig 中新加了配置项
-- Bug2: auth 不能生效
---- 暂时没有找到好的方法，先沿用 js 方案

#### Optimization

eg:
-- 优化 1: config 基本配置项
---- 先把环境变量等信息添加上去，暂时使用这样的方案开发，开发周期内解决后续的问题
