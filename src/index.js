export default function (tagName, props, children) {

  props = props || {}
  const element = document.createElement(tagName)
  const propNames = Object.getOwnPropertyNames(props)

  for(const key of propNames) {
    element.setAttribute(key, props[key])
  }


  if (children) {
    if (Array.isArray(children)) {
      children.forEach(child => {
        appendChild(element, child)
      })
    } else {
      appendChild(element, children)
    }
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