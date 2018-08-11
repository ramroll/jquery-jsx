export default function (tagName, props, ...children) {

  children = [].concat(...children)

  props = props || {}
  const element = document.createElement(tagName)
  const propNames = Object.getOwnPropertyNames(props)

  for(const key of propNames) {
    element.setAttribute(key, props[key])
  }

  if (children) {
    children.forEach(child => {
      appendChild(element, child)
    })
  }
  return element
}

function appendChild(p, child) {
  if(typeof child === 'string') {
    p.innerText = child
  } else {
    p.appendChild(child)
  }

}