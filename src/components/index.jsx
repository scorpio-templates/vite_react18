import React from 'react'
const modules = import.meta.glob('./**/index.jsx')

const comp = {}
for (const path in modules) {
  const element = modules[path]
  const name = path.split('/')[1].replace(/^\S/, s => s.toUpperCase())
  comp[name] = React.lazy(element)
}

export default comp
