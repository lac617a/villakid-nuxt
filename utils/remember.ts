// trigger
export function remember(string: string, pwd: string, checked: boolean) {
  if (!checked) return
  return setCookie(string, pwd)
}

// save
function setCookie(string: string, pwd: string) {
  const expired = new Date()
  expired.setTime(expired.getTime() + 30 * 24 * 60 * 1000)
  window.document.cookie = `${string}=${window.btoa(
    pwd
  )};expires=${expired.toUTCString()};path=/`
}


// Automatically read password in
// cookie after entering username
export function showPassword(value: string) {
  const passowrd = getCookie(value)
  if (passowrd === null) return
  return passowrd;
}

function getCookie(name: string) {
  const arg = name + '='
  const argLength = arg.length
  const cookie = window.document.cookie
  const cookieLength = cookie.length
  for (let index = 0; index < cookieLength; index++) {
    const offset = index + argLength
    if (cookie.substring(index, offset) === arg)
      return getCookieVal(offset)
    index = cookie.indexOf(' ', index)
    if (index === 0 || index === -1) break
  }
  return null
}

function getCookieVal(offset: number) {
  // this.$refs.checkbox.checked = true
  const cookie = window.document.cookie
  let endStr = cookie.indexOf(';', offset)
  if (endStr === -1) endStr = cookie.length
  return window.atob(cookie.substring(offset, endStr))
}