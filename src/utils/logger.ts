/* eslint-disable no-console */
// https://bbs.tampermonkey.net.cn/forum.php?mod=redirect&goto=findpost&ptid=5899&pid=77134

const Color = {
  debug: '#42CA8C;',
  info: '#37C5D6;',
  warn: '#EFC441;',
  error: '#FF6257;',
}

export const logger = {
  debug: console.debug.bind(
    console,
    `%c[D]>`,
    `color:${Color.debug}; line-height:1.5em;`,
  ),
  info: console.info.bind(
    console,
    `%c[I]>`,
    `color:${Color.info}; line-height:1.5em;`,
  ),
  warn: console.warn.bind(
    console,
    `%c[W]>`,
    `color:${Color.warn}; line-height:1.5em;`,
  ),
  error: console.error.bind(
    console,
    `%c[E]>`,
    `color:${Color.error}; line-height:1.5em;`,
  ),
  group: console.groupCollapsed,
  groupEnd: console.groupEnd,
}
