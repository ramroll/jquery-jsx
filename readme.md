# jsx模板

没有复杂的virtual-dom，生命周期，只是想利用jsx作为模板引擎。

## 使用方法

```
npm install jsx-html babel-plugin-transform-react-jsx --save-dev
yarn add babel-plugin-transform-react-jsx jsx-html -D
```



## babel配置

*如果是webpack*

```
plugins : [
  ['transform-react-jsx', {
    'pragma' : 'jsx'
  }]
]
```


*如果是.babelrc*

```
{
  "plugins" : [
    ["transform-react-jsx", {
      "pragma" : "jsx"
    }]
  ]
}
```


## Example 1: jsx->html

```
import jsx from './index'

const html = <div>
  <ul id='a123' style='background-color:blue'>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
  </ul>
</div>

// html是一个dom节点
```


## Example 2: 使用变量


```
import jsx from './index'

const liList = ['a', 'b', 'c', 'd'].map(k => <li>{k}</li>)
const html = <div>
  <ul id='a123' style='background-color:blue'>
    {liList}
  </ul>
</div>

// html是一个dom节点
```