import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const defaultMarkdown = `# Encabezado principal (H1)

## Subencabezado (H2)

[Enlace de ejemplo](https://www.example.com)

Texto en **negrita** y *cursiva*.

Código en línea: \`console.log('Hola Mundo')\`

Bloque de código:
\`\`\`javascript
function saludo() {
  console.log("¡Hola Mundo!");
}
\`\`\`

- Elemento de lista 1
- Elemento de lista 2

> **"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito."**  
> _— Albert Schweitzer_

![Imagen de ejemplo](https://media.sproutsocial.com/uploads/2022/06/Always-up-to-date-guide-to-SM-image-sizes-Final.svg)
`;

export default function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}
      />
    </div>
  );
}

