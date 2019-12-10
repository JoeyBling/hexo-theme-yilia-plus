// 控制台颜色插件
const chalk = require('chalk')
// 默认插件配置
const defaultConfig = require("./default_config");

// color取值：red、green、yellow、blue...等
module.exports = function yilia_plus_log(msg, color = defaultConfig.log.color, label = defaultConfig.themeName) {
  if (defaultConfig.log.enable) {
    console.log && console.log(`\n${chalk.reset.inverse.bold[color](` ${label} `)} ${msg}`)
  }
}
