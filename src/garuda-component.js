/**
 * License : https://raw.githubusercontent.com/lamhotsimamora/Garuda-Javascript-Component/master/LICENSE
 * Author  : @lamhotsimamora
 * {{ Garuda Javascript 2 Component }}
 * Copyright@2018
 */
'use strict';

try {Garuda(); }catch(x) {document.write('<script src="https://www.cdn.lamhotsimamora.com/garuda2/"></script>'); } function __a1(a, b) {return (a === undefined) ? b : a + b; } function __d1(a, x = '') {return (a) ? a : x; } var __cmp = undefined, __spc = '</br>', __cLi = new Array(); class GarudaComponent {init(a) {if (a) {this.id = __d1(a.id); this.nm = __d1(a.name); this.cl = __d1(a.class); this.ty = __d1(a.type); this.plc = __d1(a.placeholder); this.src = __d1(a.src); this.vl = __d1(a.value); this.w = __d1(a.width, 100); this.h = __d1(a.height, 100); this.alt = __d1(a.alt); this.cst = __d1(a.custom); this.tr = __d1(a.field); this.td = __d1(a.data); this.hr = __d1(a.href); this.sp = __d1(a.space); this.fr = __d1(a.for); if (a.to) {this.to = (_whatThis(a.to) === 'object') ? a.to : undefined; } __cLi.push(this.id); return this; } } createCanvas() {var i = '<canvas id="' + this.id + '" name="' + this.nm + '" width="' + this.w + '" height="' + this.w + '" class="' + this.cl + '"></canvas>' + __spc + this.sp; __cmp = __a1(__cmp, i); } createInput() {var i = '<input value="' + this.vl + '" type="' + this.ty + '" class="' + this.cl + '" placeholder="' + this.plc + '" id="' + this.id + '" name="' + this.nm + '">' + __spc + this.sp; __cmp = __a1(__cmp, i); } createButton() {var i = '<button id="' + this.id + '" class="' + this.cl + '" name="' + this.nm + '" type="' + this.ty + '">' + this.vl + '</button>' + __spc + this.sp; __cmp = __a1(__cmp, i); } createImage() {var i = '<img src="' + this.src + '" name="' + this.nm + '" id="' + this.id + '" width="' + this.w + '" height="' + this.w + '" class="' + this.cl + '" alt="' + this.alt + '">' + __spc + this.sp; __cmp = __a1(__cmp, i); } createCustom() {__cmp = __a1(__cmp, this.cst + __spc + this.sp); } createLink() {var i = '<a id="' + this.id + '" class="' + this.cl + '" name="' + this.nm + '" href="' + this.hr + '">' + this.vl + '</a>' + __spc + this.sp; __cmp = __a1(__cmp, i); } createDropDown() {var jj = '<select class="' + this.cl + '" name="' + this.nm + '" id="' + this.id + '">', ll = '', L = this.td.length; for (var i = 0; i < L; i++) {var q = this.td[i] ? this.td[i] : ''; ll += '<option value="' + q.toLowerCase() + '">' + q + '</option>'; } ll += '</select>'; jj = jj + ll; __cmp = __a1(__cmp, jj); } createTable() {var l = this.tr.length, x = '<table id="' + this.id + '" name="' + this.nm + '" class="' + this.cl + '"><thead><tr>'; if (l > 0) {for (var i = 0; i < l; i++) {x += '<th>' + this.tr[i] + '</th>'; } x = x + '</tr></thead>'; var m = this.td.length, y = '<tbody id="body_' + this.id + '">'; for (var i = 0; i < m; i++) {var z = '<tr>', n = 0, oo = this.td[i] ? this.td[i] : ''; for (var j = 0; j < oo.length; j++) {z += '<td>' + oo[n] + '</td>'; n++; } z += '</tr>'; y += z; } var i = x + y + '</tbody></table>' + __spc + this.sp; __cmp = __a1(__cmp, i); } } createLabel() {var i = '<label id="'+this.id+'" name="'+this.nm+'" class="'+this.cl+'" for="'+this.fr+'">'+this.vl+'</label>'; __cmp = __a1(__cmp, i); } createList() {var l = this.td.length, x = '<ul class="'+this.cl+'" id="'+this.id+'" name="'+this.nm+'">'; if (l > 0) {for (var i = 0; i < l; i++) {x += '<li id="list_'+this.td[i]+'" class="'+this.cl+'">'+this.td[i]+'</li>'; } x = x +'</ul>' + __spc + this.sp; __cmp = __a1(__cmp, x); } } render(x) {(this.to != undefined) ? this.to.setContent(__cmp): (_whatThis(x) === 'object') ? x.setContent(__cmp) : ''; for (var i = 0; i < __cLi.length; i++) {window[__cLi[i]] = __({el: '' + __cLi[i] + ''}); } __cmp = undefined; __cLi = []; } get getHtml() {return __cmp; } }