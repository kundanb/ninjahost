# ninjahost

Serve directories over HTTP at your favorite Port.

## Installation

Install from Command Line:

```bash
npm i ninjahost
```

## Usage

- Make a file _myhost.js_.

- Write below code in the file.

  ```js
  const ninjahost = require('ninjahost');
  const { resolve } = require('path');

  const dir = resolve(__dirname, 'build');
  const port = 6000;

  // below code serves 'build' directory at port 6000
  // dir path must be absolute
  ninjahost(dir, port);

  ...
  ```

  If port is not specified, then _1123_ will be used as the default port.

- Run below command in the command line.

  ```bash
  node myhost.js
  ```

- Now go to the below url in your favorite browser.

  ```
  http://localhost:6000
  ```

**Ninja Hacking ;)**
