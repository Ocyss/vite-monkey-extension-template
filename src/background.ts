import browser from 'webextension-polyfill'

const iconPath = browser.runtime.getURL('assets/logo.png')
const iconDisabledPath = browser.runtime.getURL('assets/logo_grey.png')

async function toggle() {
  const res = await browser.storage.local.get('isDisabled')
  if (res.isDisabled) {
    browser.action.setIcon({ path: iconPath })
  }
  else {
    browser.action.setIcon({ path: iconDisabledPath })
  }
  browser.storage.local.set({ isDisabled: Boolean(!res.isDisabled) })
  browser.tabs.reload()
}

browser.webNavigation.onDOMContentLoaded.addListener(async (event) => {
  if (
    event.frameId === 0
    && !(await browser.storage.local.get('isDisabled')).isDisabled
  ) {
    browser.scripting.executeScript({
      world: 'MAIN',
      files: ['src/main.js'],
      target: { tabId: event.tabId },
    })
  }
})

browser.action?.onClicked.addListener(() => {
  toggle()
})
