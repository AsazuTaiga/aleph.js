/// <reference lib="dom" />
var el = document.createElement('div')
var hEl = document.createElement('h2')
var pEl = document.createElement('p')
var style: Partial<CSSStyleDeclaration> = {
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '999',
    width: '100%',
    margin: '0',
    padding: '24px 0',
    lineHeight: '1.5',
    fontSize: '14px',
    color: '#666',
    backgroundColor: '#fff9cc',
    textAlign: 'center',
    boxShadow: '0 1px 5px rgba(0,0,0,0.1)'
}
var hStyle: Partial<CSSStyleDeclaration> = {
    margin: '0',
    padding: '0',
    lineHeight: '1.2',
    fontSize: '24px',
    fontWeight: '700',
    color: '#000',
}
for (var key in style) {
    (el.style as any)[key] = style[key]
}
for (var key in hStyle) {
    (hEl.style as any)[key] = hStyle[key]
}
hEl.innerText = 'Your browser is out of date.'
var isDev = false
var scripts = document.getElementsByTagName('script')
for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i]
    if (/nomodule\.js\?dev$/.test(s.src)) {
        isDev = true
        break
    }
}
if (isDev) {
    pEl.innerHTML = 'Aleph.js requires <a href="https://caniuse.com/es6-module" style="font-weight:500;color:#000;">ES module</a> support during development.'
} else {
    pEl.innerHTML = 'Update your browser for more security, speed and the best experience on this site.'
}
el.appendChild(hEl)
el.appendChild(pEl)
document.body.appendChild(el)