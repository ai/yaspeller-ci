# Yaspeller for CI

<img align="right" width="100" height="100" alt="Yaspeller Logo" src="https://raw.githubusercontent.com/hcodes/yaspeller/master/images/logo.png">

Fast spelling check for Travis CI.

It is just simple wrap for [yaspeller], CLI for [Yandex.Speller] API,
with 2 optimizations:

* Run spelling check only on latest Node.js version.
* Do not check `*.js.html` files from JSDoc, because it contains only code.

This optimizations speed up Travis CI build time and reduce unnecessary
burden for Travis CI and Yandex.Speller API.

[Yandex.Speller]: https://tech.yandex.ru/speller/doc/dg/concepts/About-docpage/
[yaspeller]:      https://github.com/hcodes/yaspeller

<a href="https://evilmartians.com/?utm_source=yaspeller-ci">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Usage

Install `yaspeller-ci`:

```sh
npm install yaspeller-ci --save-dev
```

And add it to npm scripts:

```json
  "scripts": {
    "spellcheck": "yaspeller-ci *.md",
    "test": "yarn run unit && yarn run lint && yarn run spellcheck"
  }
```

If you use JSDoc, we recommend to pass them by spelling check too:

```json
  "scripts": {
    "docs": "jsdoc --configure .jsdocrc *.js",
    "spellcheck": "yarn run docs && yaspeller-ci *.md api/*.html",
    "test": "yarn run unit && yarn run lint && yarn run spellcheck"
  }
```

## Extra

We recommend to combine Yaspeller CI with [`lint-staged`]:

```
  "lint-staged": {
    "*.md": "yaspeller-ci"
  }
```

[`lint-staged`]: https://github.com/okonet/lint-staged
