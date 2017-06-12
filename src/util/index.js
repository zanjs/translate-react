export const URLREGEXP = /^(http|ftp|https):\/\/[\w\-_]+(.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?$/

export const isUrl = text => URLREGEXP.test(text)

export const isChinese = temp => {
  if (/.*[\u4e00-\u9fa5]+.*$/.test(temp.replace(/(^\s*)|(\s*$)/g, ''))) {
    return true
  }
  return false
}

export const isLangJP = temp => {
  if (/.*[\u0800-\u4e00]+.*$/.test(temp.replace(/(^\s*)|[\r\n]|(\s*$)/g, ''))) {
    return true
  }
  return false
}

export const isAllChinese = temp => {
  return /^[\u4E00-\u9FA5]+$/.test(temp.replace(/(^\s*)|(\s*$)/g, ''))
}