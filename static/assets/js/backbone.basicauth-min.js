/*!
 * backbone.basicauth.js v0.4.0
 *
 * Adds HTTP Basic Authentication headers,
 * either by reading them from a model property,
 * or by parsing the model/collection.url.
 *
 * Copyright 2013, Tom Spencer (@fiznool), Luis Abreu (@lmjabreu)
 * backbone.basicauth.js may be freely distributed under the MIT license.
 */
!function(a,b){"function"==typeof define&&define.amd?define(["underscore","backbone"],b):a.amdWeb=b(a._,a.Backbone)}(this,function(a,b){var c=window.btoa,d=function(a){return c(unescape(encodeURIComponent([a.username,a.password].join(":"))))};b.BasicAuth={getHeader:function(a){return{Authorization:"Basic "+d(a)}}};var e=b.sync;b.sync=function(c,d,f){f=f||{};var g,h;return d.credentials&&(g=a.result(d,"credentials")),null==g&&(remoteURL=f.url||a.result(d,"url"),h=remoteURL.match(/\/\/(.*):(.*)@/),h&&3===h.length&&(g={username:h[1],password:h[2]})),null!=g&&(f.headers=f.headers||{},a.extend(f.headers,b.BasicAuth.getHeader(g))),e.call(d,c,d,f)}});