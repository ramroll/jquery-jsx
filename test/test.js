import jsx from '../src/index'

const html = <div>
  <ul id='a123' style='background-color:blue'>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
    <li dangerouslySetInnerHTML={{__html : '&nbsp;123'}}></li>
  </ul>
</div>


document.body.append(html)