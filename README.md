<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# properties

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own enumerable and non-enumerable property names and symbols.



<section class="usage">

## Usage

```javascript
import properties from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-properties@deno/mod.js';
```

#### properties( obj )

Returns an `array` of an object's own enumerable and non-enumerable property names and symbols.

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var props = properties( obj );
// e.g., returns [ 'a', 'b' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import defineProperty from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@deno/mod.js';
import properties from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-properties@deno/mod.js';

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'value': 'qux',
        'configurable': true,
        'writable': true,
        'enumerable': false
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var props = properties( obj );

console.log( props );
// e.g., => [ 'beep', 'a', 'baz' ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/define-properties`][@stdlib/utils/define-properties]</span><span class="delimiter">: </span><span class="description">define (and/or modify) object properties.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-properties`][@stdlib/utils/inherited-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/properties-in`][@stdlib/utils/properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/property-names`][@stdlib/utils/property-names]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable and non-enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/property-symbols`][@stdlib/utils/property-symbols]</span><span class="delimiter">: </span><span class="description">return an array of an object's own symbol properties.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-properties.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-properties

[test-image]: https://github.com/stdlib-js/utils-properties/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-properties/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-properties/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-properties?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-properties.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-properties/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-properties/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-properties/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-properties/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-properties/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-properties/main/LICENSE

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/define-properties]: https://github.com/stdlib-js/utils-define-properties/tree/deno

[@stdlib/utils/inherited-properties]: https://github.com/stdlib-js/utils-inherited-properties/tree/deno

[@stdlib/utils/properties-in]: https://github.com/stdlib-js/utils-properties-in/tree/deno

[@stdlib/utils/property-names]: https://github.com/stdlib-js/utils-property-names/tree/deno

[@stdlib/utils/property-symbols]: https://github.com/stdlib-js/utils-property-symbols/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
