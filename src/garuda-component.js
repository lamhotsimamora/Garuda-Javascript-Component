/**
 * License : https://raw.githubusercontent.com/lamhotsimamora/Garuda-Javascript-Component/master/LICENSE
 * Author  : @lamhotsimamora
 * {{ Garuda Javascript 2 Component }}
 * Copyright@2018
 */
'use strict';

try {Garuda(); } catch (x) {console.log('Required GarudaJavascript 2') } function __a1(a, b) {return (a === undefined) ? b : a + b; } function __b1(a, b) {return (a) ? (b + '=' + a) : ''; } function __d1(a, x = '') {return a ? a : x; } var __cmp = undefined, __spc = '</br>', __cLi = new Array(); class GarudaComponent {init(a) {if (a) {this.id = __d1(a.id); this.nm = __d1(a.name); this.cl = __d1(a.class); this.ty = __d1(a.type); this.plc = __d1(a.placeholder); this.src = __d1(a.src); this.vl = __d1(a.value); this.ct = __d1(a.content); this.w = __d1(a.width, 100); this.h = __d1(a.height, 100); this.alt = __d1(a.alt); this.cst = __d1(a.custom); this.tr = __d1(a.field); this.td = __d1(a.data); this.hr = __d1(a.href); this.sp = __d1(a.space); this.mn = __d1(a.min); this.mx = __d1(a.max); this.ac = __d1(a.autocomplete); this.rd = __d1(a.readonly); this.ds = __d1(a.disabled); this.mxl = __d1(a.maxlength); this.st = __d1(a.style); this.fr = __d1(a.for); if (a.to) {this.to = (_whatThis(a.to) === 'object') ? a.to : undefined; } __cLi.push(this.id); return this; } } createP() {var i = '<p style="'+this.st+'" id="' + this.id + '" name="' + this.nm + '" class="' + this.cl + '">'+this.ct+'</p>'+ __spc + this.sp; __cmp = __a1(__cmp, i); } createCanvas() {var i = '<canvas style="'+this.st+'" id="' + this.id + '" name="' + this.nm + '" width="' + this.w + '" height="' + this.w + '" class="' + this.cl + '"></canvas>' + __spc + this.sp; __cmp = __a1(__cmp, i); } createInput() {var mn = __b1(this.mn, 'min'), mx = __b1(this.mx, 'max'), au = __b1(this.ac, 'autocomplete'), rd = __b1(this.ac, 'readonly'), mxl = __b1(this.mxl, 'maxlength'), ds = __b1(this.ds, 'disabled'), vl = __b1(this.vl, 'value'), i = '<input style="'+this.st+'" id="' + this.id + '" name="' + this.nm + '" type="' + this.ty + '" class="' + this.cl + '" ' + rd + ' ' + mn + ' ' + mx + ' ' + au + ' ' + mxl + ' ' + ds + ' ' + vl + ' placeholder="' + this.plc + '" >' + __spc + this.sp; __cmp = __a1(__cmp, i); } createButton() {var i = '<button style="'+this.st+'" id="' + this.id + '" class="' + this.cl + '" name="' + this.nm + '" type="' + this.ty + '">' + this.ct + '</button>' + __spc + this.sp; __cmp = __a1(__cmp, i); } createImage() {var i = '<img style="'+this.st+'" src="' + this.src + '" name="' + this.nm + '" id="' + this.id + '" width="' + this.w + '" height="' + this.w + '" class="' + this.cl + '" alt="' + this.alt + '">' + __spc + this.sp; __cmp = __a1(__cmp, i); } createCustom() {__cmp = __a1(__cmp, this.cst + __spc + this.sp); } createLink() {var i = '<a style="'+this.st+'" id="' + this.id + '" class="' + this.cl + '" name="' + this.nm + '" href="' + this.hr + '">' + this.ct + '</a>&nbsp' + this.sp; __cmp = __a1(__cmp, i); } createDropDown() {var jj = '<select style="'+this.st+'" class="' + this.cl + '" name="' + this.nm + '" id="' + this.id + '">', ll = '', L = this.td.length; for (var i = 0; i < L; i++) {var q = this.td[i] ? this.td[i] : ''; ll += '<option value="' + q.toLowerCase() + '">' + q + '</option>'; } ll += '</select>'; jj = jj + ll; __cmp = __a1(__cmp, jj); } createTable() {var l = this.tr.length, x = '<table style="'+this.st+'" id="' + this.id + '" name="' + this.nm + '" class="' + this.cl + '"><thead><tr>'; if (l > 0) {for (var i = 0; i < l; i++) {x += '<th>' + this.tr[i] + '</th>'; } x = x + '</tr></thead>'; var m = this.td.length, y = '<tbody id="body_' + this.id + '">'; for (var i = 0; i < m; i++) {var z = '<tr>', n = 0, oo = this.td[i] ? this.td[i] : ''; for (var j = 0; j < oo.length; j++) {z += '<td>' + oo[n] + '</td>'; n++; } z += '</tr>'; y += z; } var i = x + y + '</tbody></table>' + __spc + this.sp; __cmp = __a1(__cmp, i); } } createLabel() {var i = '<label style="'+this.st+'" id="' + this.id + '" name="' + this.nm + '" class="' + this.cl + '" for="' + this.fr + '">' + this.ct + '</label>&nbsp' + this.sp; __cmp = __a1(__cmp, i); } createList() {var l = this.td.length, x = '<ul style="'+this.st+'" class="' + this.cl + '" id="' + this.id + '" name="' + this.nm + '">'; if (l > 0) {for (var i = 0; i < l; i++) {x += '<li id="list_' + this.td[i] + '" class="' + this.cl + '">' + this.td[i] + '</li>'; } x = x + '</ul>' + __spc + this.sp; __cmp = __a1(__cmp, x); } } createDiv() {var i = '<div style="'+this.st+'" id="' + this.id + '" name="' + this.nm + '" class="' + this.cl + '">' + this.ct + '</div>' + __spc + this.sp; __cmp = __a1(__cmp, i); } hasDiv(a) {var t = __d1(a.id), u = __d1(a.name), y = __d1(a.class), z = __d1(a.space); __cmp = '<div style="'+this.st+'" id="' + t + '" name="' + u + '" class="' + y + '">' + __cmp + '</div>' + __spc + z; } render(x) {try {(this.to != undefined) ? this.to.setContent(__cmp): (_whatThis(x) === 'object') ? x.setContent(__cmp) : (_whatThis(x) === 'string') ? __gEi(x).innerHTML = __cmp : ''; for (var i = 0; i < __cLi.length; i++) {if (__gEi(__cLi[i])) {window[__cLi[i]] = __({el: __cLi[i] }) } } __cmp = undefined; __cLi = []; } catch (e) {_writeLog('Debug render Garuda Component ' + e); } } get getHtml() {return __cmp; } }