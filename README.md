# Issue with vite and lit-html directives

> This repo exists for the sole purpose of demonstrating the problem that `vite` has with importing `lit-html` directives.

## Steps to reproduce

1. Clone this repo

2. npm install

3. Run the `es-dev-server` npm task and notice the result in your browser. This is the expected outcome.

4. Next, run the `vite` npm task and notice (in the browser) how it fails where the repeat directive is used.

## The Fix

Add `vue.config.js` in the root of your project with the following contents

```js
module.exports = {
    optimizeDeps: {
        exclude: ['lit-html']
    }
}
```
