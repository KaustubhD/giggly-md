const rules = [
  [/#{6} ([^\n]+)/g, '<h6>$1</h6>'],
  [/#{5} ([^\n]+)/g, '<h5>$1</h5>'],
  [/#{4} ([^\n]+)/g, '<h4>$1</h4>'],
  [/#{3} ([^\n]+)/g, '<h3>$1</h3>'],
  [/#{2} ([^\n]+)/g, '<h2>$1</h2>'],
  [/#{1} ([^\n]+)/g, '<h1>$1</h1>'],
  [/\*\*([^\n]+)\*\*/g, '<strong>$1</strong>'],
  [/\*([^\n]+)\*/g, '<i>$1</i>'],
  [/\!\[([^\]]+)\]\(([^\)]+)\s\"([^\"\)]+)\"\)/g, '<img src="$2" alt="$1" title="$3"/>'],
  [/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>'],
  // TODO li and ol
  [/([^\n]+\n)/g, '$1<br />'],
]
export default {
  bind(el){
    let html = el.innerHTML
    rules.forEach(([rule, replacement]) => {
      html = html.replace(rule, replacement)
    })
    el.innerHTML = html
  }
}