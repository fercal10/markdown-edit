# Titulo
## Titulo
### Titulo
#### Titulo
##### Titulo

Parrafo 

> citas

**Negrita**

_Cursiva_

- Lista sin ordenar
- Lista sin ordenar
- Lista sin ordenar

1. Lista ordenada
2. Lista ordenada
3. Lista ordenada

---



~texto tachado~


- [ ] listas con checks
- [x] listas con checks


| column 1 | column 2 |
| -------- | -------- |
| value 11 | value 12 |
| value 21 | value 22 |
| value 31 | value 32 |


--- 


### Codigo

`code text`

```jsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import file from "../assets/markdown.md";

function RenderMarkdown() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((value) => setText(value));
  }, []);

  return (
    <div className="RenderMarkdown">
      <ReactMarkdown children={text}></ReactMarkdown>
    </div>
  );
}

export default RenderMarkdown;
```
#### Docs
