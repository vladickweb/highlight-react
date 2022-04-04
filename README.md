# highlight-react
## quickstart

#### Installation

```bash
npm i highlighter-react

#or

yarn add highlighter-react
```


#### How to use

```javascript

import Highlight from 'highlight-react/dist/highlight'

const Demo = () => {
  const searchTerm = 'hello';

  return (
    <Highlight search={searchTerm}>
      <div>
        <h1>Hello world!</h1>
      </div>
    </Highlight>
  );
};

export default Demo;
```

<img width="327" alt="Captura de Pantalla 2022-04-04 a las 15 56 16" src="https://user-images.githubusercontent.com/79222973/161559693-6125f864-8b38-4d0c-b02d-3bfb8089a983.png">




