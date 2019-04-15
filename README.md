# Yaspeller for CI

<img align="right" width="100" height="100" alt="Yaspeller Logo" src="https://raw.githubusercontent.com/hcodes/yaspeller/master/images/logo.png">

Fast spelling check for Travis CI and AppVeyor.

It is just simple wrap for [yaspeller], CLI for [Yandex.Speller] API.
But it runs spelling check only in first CI job,
to speed up build time and reduce unnecessary burden for CI service
and Yandex.Speller API.

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
    "test": "npm run unit && npm run lint && npm run spellcheck"
  }
```

If you use JSDoc, we recommend to pass them by spelling check too:

```json
  "scripts": {
    "docs": "jsdoc --configure .jsdocrc *.js",
    "spellcheck": "npm run docs && yaspeller-ci *.md api/*.html",
    "test": "npm run unit && npm run lint && npm run spellcheck"
  }
```

## Config

You can specify own dictionary and spelling check options
in `.yaspellerrc` config.

```json
{
  "lang": "en",
  "dictionary": [
    "yaspeller",
    "Travis"
  ]
}
```

Full list of options could be found in [`yaspeller` docs].

[`yaspeller` docs]: https://github.com/hcodes/yaspeller#configuration

## Extra

We recommend to combine Yaspeller CI with [`lint-staged`]:

```json
  "lint-staged": {
    "*.md": "yaspeller-ci"
  }
```

[`lint-staged`]: https://github.com/okonet/lint-staged
