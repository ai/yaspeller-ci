# Yaspeller for CI

<img align="right" width="200" alt="Yaspeller Logo" src="https://raw.githubusercontent.com/hcodes/yaspeller/master/images/logo.png">

Fast spelling check for Travis CI.

It is just simple wrap for [yaspeller], CLI for [Yandex.Speller] API,
with 2 optimizations:

* Run spelling check only on latest Node.js version.
* Do not check `*.js.html` files from JSDoc, because it contains only code.

This optimizations speed up Travis CI build time and reduce unnecessary
burden for Travis CI and Yandex.Speller API.

[Yandex.Speller]: https://tech.yandex.ru/speller/doc/dg/concepts/About-docpage/
[yaspeller]:      https://github.com/hcodes/yaspeller
