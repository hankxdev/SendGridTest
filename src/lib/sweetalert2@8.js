!(function (t, e) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = e() : (typeof define==='function' && define.amd ? define(e) : t.Sweetalert2 = e());
})(this, () => {
	'use strict'; function f(t) {
		return (f = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) {
			return typeof t;
		} : function (t) {
			return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
		})(t);
	}

	function o(t, e) {
		if (!(t instanceof e)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}

	function i(t, e) {
		for (const o of e) {
			o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
		}
	}

	function r(t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), t;
	}

	function a() {
		return Reflect.apply(a = Object.assign || function (t) {
			for (let e = 1; e < arguments.length; e++) {
				const n = arguments[e]; for (const o in n) {
					Object.hasOwn(n, o) && (t[o] = n[o]);
				}
			}

			return t;
		}, this, arguments);
	}

	function s(t) {
		return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		})(t);
	}

	function u(t, e) {
		return (u = Object.setPrototypeOf || function (t, e) {
			return t.__proto__ = e, t;
		})(t, e);
	}

	function c(t, e, n) {
		return Reflect.apply(c = (function () {
			if (typeof Reflect==='undefined' || !Reflect.construct) {
return !1;
} if (Reflect.construct.sham) {
return !1;
} if (typeof Proxy==='function') {
return !0;
} try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], () => {})), !0;
			} catch {
				return !1;
			}
		})() ? Reflect.construct : function (t, e, n) {
				const o = [null]; o.push.apply(o, e); const i = new (Function.bind.apply(t, o))(); return n && u(i, n.prototype), i;
			}, null, arguments);
	}

	function l(t, e) {
		return !e || typeof e !== 'object' && typeof e !== 'function' ? (function (t) {
			if (void 0 === t) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

 return t;
		})(t) : e;
	}

	function d(t, e, n) {
		return (d = typeof Reflect !== 'undefined' && Reflect.get ? Reflect.get : function (t, e, n) {
			const o = (function (t, e) {
				for (;!Object.hasOwn(t, e) && (t = s(t)) !== null;) {

} return t;
			})(t, e); if (o) {
				const i = Object.getOwnPropertyDescriptor(o, e); return i.get ? i.get.call(n) : i.value;
			}
		})(t, e, n || t);
	}

	function p(e) {
		return Object.keys(e).map(t => e[t]);
	}

	function m(t) {
		return Array.prototype.slice.call(t);
	}

	function g(t) {
		console.error(''.concat(e, ' ').concat(t));
	}

	function h(t, e) {
		!(function (t) {
			!n.includes(t) && (n.push(t), y(t));
		})('"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'));
	}

	function v(t) {
		return t && Promise.resolve(t) === t;
	}

	function t(t) {
		const e = {}; for (const n in t) {
			e[t[n]] = 'swal2-' + t[n];
		}

		return e;
	}

	function b(e, t, n) {
		m(e.classList).forEach(t => {
			!p(k).includes(t) && !p(B).includes(t) && e.classList.remove(t);
		}), t && t[n] && nt(e, t[n]);
	}

	var e = 'SweetAlert2:'; var y = function (t) {
		console.warn(''.concat(e, ' ').concat(t));
	};

	var n = []; const w = function (t) {
		return typeof t==='function' ? t() : t;
	};

	const C = Object.freeze({
		cancel: 'cancel', backdrop: 'backdrop', close: 'close', esc: 'esc', timer: 'timer',
	}); var k = t(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']); var B = t(['success', 'warning', 'info', 'question', 'error']); const x = {previousBodyPadding: null}; const S = function (t, e) {
		return t.classList.contains(e);
	};

	function P(t, e) {
		if (!e) {
			return null;
		}

		switch (e) {
			case 'select': case 'textarea': case 'file': { return it(t, k[e]);
			}

			case 'checkbox': { return t.querySelector('.'.concat(k.checkbox, ' input'));
			}

			case 'radio': { return t.querySelector('.'.concat(k.radio, ' input:checked')) || t.querySelector('.'.concat(k.radio, ' input:first-child'));
			}

			case 'range': { return t.querySelector('.'.concat(k.range, ' input'));
			}

			default: { return it(t, k.input);
			}
		}
	}

	function A(t) {
		if (t.focus(), t.type !== 'file') {
			const e = t.value; t.value = '', t.value = e;
		}
	}

	function L(t, e, n) {
		t && e && (typeof e === 'string' && (e = e.split(/\s+/).filter(Boolean)), e.forEach(e => {
			t.forEach ? t.forEach(t => {
				n ? t.classList.add(e) : t.classList.remove(e);
			}) : (n ? t.classList.add(e) : t.classList.remove(e));
		}));
	}

	function E(t, e, n) {
		n || Number.parseInt(n) === 0 ? t.style[e] = typeof n === 'number' ? n + 'px' : n : t.style.removeProperty(e);
	}

	function O(t) {
		const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'flex'; t.style.opacity = '', t.style.display = e;
	}

	function T(t) {
		t.style.opacity = '', t.style.display = 'none';
	}

	function M(t, e, n) {
		e ? O(t, n) : T(t);
	}

	function V(t) {
		return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length > 0));
	}

	function index(t) {
		const e = globalThis.getComputedStyle(t); const n = Number.parseFloat(e.getPropertyValue('animation-duration') || '0'); const o = Number.parseFloat(e.getPropertyValue('transition-duration') || '0'); return n > 0 || o > 0;
	}

	function q() {
		return document.body.querySelector('.' + k.container);
	}

	function H(t) {
		const e = q(); return e ? e.querySelector(t) : null;
	}

	function I(t) {
		return H('.' + t);
	}

	function R() {
		const t = rt(); return m(t.querySelectorAll('.' + k.icon));
	}

	function D() {
		const t = R().filter(t => V(t)); return t.length > 0 ? t[0] : null;
	}

	function N() {
		return I(k.title);
	}

	function U() {
		return I(k.content);
	}

	function _() {
		return I(k.image);
	}

	function z() {
		return I(k['progress-steps']);
	}

	function W() {
		return I(k['validation-message']);
	}

	function K() {
		return H('.' + k.actions + ' .' + k.confirm);
	}

	function F() {
		return H('.' + k.actions + ' .' + k.cancel);
	}

	function Z() {
		return I(k.actions);
	}

	function Q() {
		return I(k.header);
	}

	function Y() {
		return I(k.footer);
	}

	function $() {
		return I(k.close);
	}

	function J() {
		const t = m(rt().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((t, e) => (t = Number.parseInt(t.getAttribute('tabindex')), (e = Number.parseInt(e.getAttribute('tabindex'))) < t ? 1 : (t < e ? -1 : 0))); const e = m(rt().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(t => '-1' !== t.getAttribute('tabindex')); return (function (t) {
			for (var e = [], n = 0; n < t.length; n++){!e.includes(t[n])&&e.push(t[n]);} return e;
		})(t.concat(e)).filter(t => V(t));
	}

	function X() {
		return typeof globalThis === 'undefined' || typeof document === 'undefined';
	}

	function G(t) {
		ce.isVisible() && et !== t.target.value && ce.resetValidationMessage(), et = t.target.value;
	}

	function tt(t, e) {
		t instanceof HTMLElement ? e.appendChild(t) : (f(t) === 'object' ? lt(e, t) : t && (e.innerHTML = t));
	}

	let et; var nt = function (t, e) {
		L(t, e, !0);
	};

	const ot = function (t, e) {
		L(t, e, !1);
	};

 var it = function (t, e) {
		for (let n = 0; n < t.childNodes.length; n++) {
if (S(t.childNodes[n], e)) {return t.childNodes[n]}}
	};

	var rt = function () {
		return I(k.popup);
	};

	const at = function () {
		return !st() && !document.body.classList.contains(k['no-backdrop']);
	};

 var st = function () {
		return document.body.classList.contains(k['toast-shown']);
	};

	const ut = '\n <div aria-labelledby="'.concat(k.title, '" aria-describedby="').concat(k.content, '" class="').concat(k.popup, '" tabindex="-1">\n   <div class="').concat(k.header, '">\n     <ul class="').concat(k['progress-steps'], '"></ul>\n     <div class="').concat(k.icon, ' ').concat(B.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(k.icon, ' ').concat(B.question, '"></div>\n     <div class="').concat(k.icon, ' ').concat(B.warning, '"></div>\n     <div class="').concat(k.icon, ' ').concat(B.info, '"></div>\n     <div class="').concat(k.icon, ' ').concat(B.success, '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(k.image, '" />\n     <h2 class="').concat(k.title, '" id="').concat(k.title, '"></h2>\n     <button type="button" class="').concat(k.close, '">&times;</button>\n   </div>\n   <div class="').concat(k.content, '">\n     <div id="').concat(k.content, '"></div>\n     <input class="').concat(k.input, '" />\n     <input type="file" class="').concat(k.file, '" />\n     <div class="').concat(k.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(k.select, '"></select>\n     <div class="').concat(k.radio, '"></div>\n     <label for="').concat(k.checkbox, '" class="').concat(k.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(k.label, '"></span>\n     </label>\n     <textarea class="').concat(k.textarea, '"></textarea>\n     <div class="').concat(k['validation-message'], '" id="').concat(k['validation-message'], '"></div>\n   </div>\n   <div class="').concat(k.actions, '">\n     <button type="button" class="').concat(k.confirm, '">OK</button>\n     <button type="button" class="').concat(k.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(k.footer, '">\n   </div>\n </div>\n').replaceAll(/(^|\n)\s*/g, ''); const ct = function (t) {
		if ((function () {
var t = q(); t && (t.parentNode.removeChild(t), ot([document.documentElement, document.body], [k['no-backdrop'], k['toast-shown'], k['has-column']]))
})(), X()) {
g('SweetAlert2 requires document to initialize');
} else {
			var e = document.createElement('div'); e.className = k.container, e.innerHTML = ut; let n = (function (t) {
return "string"===typeof t ? document.querySelector(t) : t
})(t.target); n.appendChild(e), (function (t) {
var e = rt(); e.setAttribute('role', t.toast ? "alert" : "dialog"), e.setAttribute('aria-live', t.toast ? "polite" : "assertive"), t.toast || e.setAttribute('aria-modal', "true")
})(t), (function (t) {
"rtl" === window.getComputedStyle(t).direction && nt(q(), k.rtl)
})(n), (function () {
var t = U(); var e=it(t,k.input); var n=it(t,k.file); var o=t.querySelector(".".concat(k.range," input")); var i=t.querySelector(".".concat(k.range," output")); var r=it(t,k.select); var a=t.querySelector(".".concat(k.checkbox," input")); var s = it(t, k.textarea); e.oninput = G, n.onchange = G, r.onchange = G, a.onchange = G, s.oninput = G, o.oninput = function (t) {
G(t), i.value = o.value
}, o.onchange = function (t) {
G(t), o.nextSibling.value = o.value
}
})();
		}
	};

 var lt = function (t, e) {
		if (t.innerHTML = '', 0 in e) {
for (let n = 0; n in e; n++) {
t.append(e[n].cloneNode(!0));
}
} else {
			t.append(e.cloneNode(!0));
		}
	};

	const dt = (function () {
		if (X()) {return !1;} let t = document.createElement('div'); let e = {WebkitAnimation: 'webkitAnimationEnd', OAnimation: 'oAnimationEnd oanimationend', animation: 'animationend'}; for (const n in e) {if (e.hasOwnProperty(n) && void 0 !== t.style[n]) return e[n];} return !1;
	})(); function pt(t, e, n) {
		M(t, n['showC' + e.slice(1) + 'Button'], 'inline-block'), t.innerHTML = n[e + 'ButtonText'], t.setAttribute('aria-label', n[e + 'ButtonAriaLabel']), t.className = k[e], b(t, n.customClass, e + 'Button'), nt(t, n[e + 'ButtonClass']);
	}

	function ft(t, e) {
		const n = Z(); const o = K(); const i = F(); e.showConfirmButton || e.showCancelButton ? O(n) : T(n), b(n, e.customClass, 'actions'), pt(o, 'confirm', e), pt(i, 'cancel', e), e.buttonsStyling ? (function (t, e, n) {
			nt([t, e], k.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor), n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor); const o = globalThis.getComputedStyle(t).getPropertyValue('background-color'); t.style.borderLeftColor = o, t.style.borderRightColor = o;
		})(o, i, e) : (ot([o, i], k.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = '', i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = '');
	}

	function mt(t, e) {
		const n = q(); n && ((function (t, e) {
			'string' === typeof e ? t.style.background = e : e || nt([document.documentElement, document.body], k['no-backdrop']);
		})(n, e.backdrop), !e.backdrop && e.allowOutsideClick && y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), (function (t, e) {
			e in k ? nt(t, k[e]) : (y('The "position" parameter is not valid, defaulting to "center"'), nt(t, k.center));
		})(n, e.position), (function (t, e) {
			if (e && typeof e==='string') {
				let n = 'grow-' + e; n in k && nt(t, k[n]);
			}
		})(n, e.grow), b(n, e.customClass, 'container'), e.customContainerClass && nt(n, e.customContainerClass));
	}

	function gt(t, e) {
		t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder);
	}

	const ht = {promise: new WeakMap(), innerParams: new WeakMap(), domCache: new WeakMap()}; const vt = function (t, e) {
		var n = P(U(), t); if (n) {for (let o in (function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}})(n), e)'range'===t && "placeholder" === o || n.setAttribute(o, e[o])}
	};

 const bt = function (t, e, n) {
		t.className = e, n.inputClass && nt(t, n.inputClass), n.customClass && nt(t, n.customClass.input);
	};

 const yt = {}; yt.text = yt.email = yt.password = yt.number = yt.tel = yt.url = function (t) {
		const e = it(U(), k.input); return typeof t.inputValue === 'string' || typeof t.inputValue === 'number' ? e.value = t.inputValue : v(t.inputValue) || y('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(f(t.inputValue), '"')), gt(e, t), e.type = t.input, e;
	}, yt.file = function (t) {
		const e = it(U(), k.file); return gt(e, t), e.type = t.input, e;
	}, yt.range = function (t) {
		const e = it(U(), k.range); const n = e.querySelector('input'); const o = e.querySelector('output'); return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, e;
	}, yt.select = function (t) {
		const e = it(U(), k.select); if (e.innerHTML = '', t.inputPlaceholder) {
			const n = document.createElement('option'); n.innerHTML = t.inputPlaceholder, n.value = '', n.disabled = !0, n.selected = !0, e.appendChild(n);
		}

		return e;
	}, yt.radio = function () {
		const t = it(U(), k.radio); return t.innerHTML = '', t;
	}, yt.checkbox = function (t) {
		const e = it(U(), k.checkbox); const n = P(U(), 'checkbox'); return n.type = 'checkbox', n.value = 1, n.id = k.checkbox, n.checked = Boolean(t.inputValue), e.querySelector('span').innerHTML = t.inputPlaceholder, e;
	}, yt.textarea = function (t) {
		const e = it(U(), k.textarea); return e.value = t.inputValue, gt(e, t), e;
	};

	function wt(t, e) {
		const n = U().querySelector('#' + k.content); e.html ? (tt(e.html, n), O(n, 'block')) : (e.text ? (n.textContent = e.text, O(n, 'block')) : T(n)), (function (t, e) {
			for (var n = ht.innerParams.get(t), o = !n || e.input !== n.input, i = U(), r = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'], a = 0; a < r.length; a++) {
				let s = k[r[a]]; const u = it(i, s); vt(r[a], e.inputAttributes), bt(u, s, e), o && T(u);
			}

			if (e.input) {
				if (!yt[e.input]) {
return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
} if (o) {
					let c = yt[e.input](e); O(c);
				}
			}
		})(t, e), b(U(), e.customClass, 'content');
	}

	function Ct(t, i) {
		const r = z(); if (!i.progressSteps || i.progressSteps.length === 0) {
			return T(r);
		}

 O(r), r.innerHTML = ''; const a = Number.parseInt(i.currentProgressStep === null ? ce.getQueueStep() : i.currentProgressStep); a >= i.progressSteps.length && y('Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'), i.progressSteps.forEach((t, e) => {
			const n = (function (t) {
				var e = document.createElement('li'); return nt(e, k['progress-step']), e.innerHTML = t, e;
			})(t); if (r.appendChild(n), e === a && nt(n, k['active-progress-step']), e !== i.progressSteps.length - 1) {
				const o = (function (t) {
					var e = document.createElement('li'); return nt(e, k['progress-step-line']), t.progressStepsDistance && (e.style.width = t.progressStepsDistance), e;
				})(t); r.append(o);
			}
		});
	}

	function kt(t, e) {
		const n = Q(); b(n, e.customClass, 'header'), Ct(0, e), (function (t, e) {
			let n = ht.innerParams.get(t); if (n && e.type === n.type && D()) {
				b(D(), e.customClass, 'icon');
			} else if (xt(), e.type) {
if (St(), Object.keys(B).indexOf(e.type) !== -1) {
				var o = H('.'.concat(k.icon, '.').concat(B[e.type])); O(o), b(o, e.customClass, 'icon'), L(o, 'swal2-animate-'.concat(e.type, '-icon'), e.animation);
			} else {
g('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type, '"'))
}
}
})(t, e), (function (t, e) {
			let n = _(); if (!e.imageUrl) {
return T(n);
} O(n), n.setAttribute('src', e.imageUrl), n.setAttribute('alt', e.imageAlt), E(n, 'width', e.imageWidth), E(n, 'height', e.imageHeight), n.className = k.image, b(n, e.customClass, 'image'), e.imageClass && nt(n, e.imageClass);
		})(0, e), (function (t, e) {
			let n = N(); M(n, e.title || e.titleText), e.title && tt(e.title, n), e.titleText && (n.innerText = e.titleText), b(n, e.customClass, 'title');
		})(0, e), (function (t, e) {
			let n = $(); b(n, e.customClass, 'closeButton'), M(n, e.showCloseButton), n.setAttribute('aria-label', e.closeButtonAriaLabel);
		})(0, e);
	}

	function Bt(t, e) {
		!(function (t, e) {
			let n = rt(); E(n, 'width', e.width), E(n, 'padding', e.padding), e.background && (n.style.background = e.background), n.className = k.popup, e.toast ? (nt([document.documentElement, document.body], k['toast-shown']), nt(n, k.toast)) : nt(n, k.modal), b(n, e.customClass, 'popup'), typeof e.customClass==='string' && nt(n, e.customClass), L(n, k.noanimation, !e.animation);
		})(0, e), mt(0, e), kt(t, e), wt(t, e), ft(0, e), (function (t, e) {
			let n = Y(); M(n, e.footer), e.footer && tt(e.footer, n), b(n, e.customClass, 'footer');
		})(0, e);
	}

	var xt = function () {
		for (let t = R(), e = 0; e < t.length; e++) {
			T(t[e]);
		}
	};

	var St = function () {
		for (let t = rt(), e = globalThis.getComputedStyle(t).getPropertyValue('background-color'), n = t.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix'), o = 0; o < n.length; o++) {
			n[o].style.backgroundColor = e;
		}
	};

	function Pt() {
		let t = rt(); t || ce.fire(''), t = rt(); const e = Z(); const n = K(); const o = F(); O(e), O(n), nt([t, e], k.loading), n.disabled = !0, o.disabled = !0, t.setAttribute('data-loading', !0), t.setAttribute('aria-busy', !0), t.focus();
	}

	function At(t) {
		return Mt.hasOwnProperty(t);
	}

	function Lt(t) {
		return jt[t];
	}

	let Et = []; const Ot = {}; const Tt = function () {
		return new Promise(t => {
			var e = window.scrollX; let n = window.scrollY; Ot.restoreFocusTimeout = setTimeout(() => {
				Ot.previousActiveElement && Ot.previousActiveElement.focus ? (Ot.previousActiveElement.focus(), Ot.previousActiveElement = null) : document.body && document.body.focus(), t();
			}, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n);
		});
	};

 var Mt = {
		title: '', titleText: '', text: '', html: '', footer: '', type: null, toast: !1, customClass: '', customContainerClass: '', target: 'body', backdrop: !0, animation: !0, heightAuto: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, stopKeydownPropagation: !0, keydownListenerCapture: !1, showConfirmButton: !0, showCancelButton: !1, preConfirm: null, confirmButtonText: 'OK', confirmButtonAriaLabel: '', confirmButtonColor: null, confirmButtonClass: '', cancelButtonText: 'Cancel', cancelButtonAriaLabel: '', cancelButtonColor: null, cancelButtonClass: '', buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusCancel: !1, showCloseButton: !1, closeButtonAriaLabel: 'Close this dialog', showLoaderOnConfirm: !1, imageUrl: null, imageWidth: null, imageHeight: null, imageAlt: '', imageClass: '', timer: null, width: null, padding: null, background: null, input: null, inputPlaceholder: '', inputValue: '', inputOptions: {}, inputAutoTrim: !0, inputClass: '', inputAttributes: {}, inputValidator: null, validationMessage: null, grow: !1, position: 'center', progressSteps: [], currentProgressStep: null, progressStepsDistance: null, onBeforeOpen: null, onAfterClose: null, onOpen: null, onClose: null, scrollbarPadding: !0,
	}; const Vt = ['title', 'titleText', 'text', 'html', 'type', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonClass', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonClass', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'imageClass', 'progressSteps', 'currentProgressStep']; var jt = {
		customContainerClass: 'customClass', confirmButtonClass: 'customClass', cancelButtonClass: 'customClass', imageClass: 'customClass', inputClass: 'customClass',
	}; const qt = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture']; const Ht = Object.freeze({
		isValidParameter: At, isUpdatableParameter(t) {
			return Vt.indexOf(t) !== -1
		}, isDeprecatedParameter: Lt, argsToParams(n) {
			var o = {}; switch (f(n[0])) {
				case 'object': { a(o, n[0]); break;
} default: { ['title', "html", "type"].forEach((t,e) =>{
switch (f(n[e])) {
case "string": o[t] = n[e]; break; case "undefined": break; default: g('Unexpected type of '.concat(t, '! Expected "string", got ').concat(f(n[e])))
}
})
 }
			}

 return o;
		}, isVisible() {
			return V(rt());
		}, clickConfirm() {
			return K() && K().click();
		}, clickCancel() {
			return F() && F().click();
		}, getContainer: q, getPopup: rt, getTitle: N, getContent: U, getImage: _, getIcon: D, getIcons: R, getCloseButton: $, getActions: Z, getConfirmButton: K, getCancelButton: F, getHeader: Q, getFooter: Y, getFocusableElements: J, getValidationMessage: W, isLoading() {
			return Object.hasOwn(rt().dataset, 'loading')
}, fire() {
			for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
e[n] = arguments[n];
} return c(this, e);
		}, mixin(n) {
			return (function (t) {
function e() {
return o(this, e), l(this, s(e).apply(this, arguments))
} return (function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)})(e, t), r(e, [{key: "_main", value: function (t) {
return d(s(e.prototype), "_main", this).call(this, a({}, n, t))
}}]), e
})(this);
		}, queue(t) {
			var r = this; Et = t; function a(t, e) {
				Et = [], document.body.removeAttribute('data-swal2-queue-step'), t(e);
			}

 let s = []; return new Promise(i => {
				!(function e(n, o) {
n < Et.length ? (document.body.setAttribute('data-swal2-queue-step', n), r.fire(Et[n]).then((t) =>{
void 0 !== t.value ? (s.push(t.value), e(n + 1, o)) : a(i, {dismiss: t.dismiss})
})) : a(i, {value: s})
})(0);
			});
		}, getQueueStep() {
			return document.body.dataset.swal2QueueStep
}, insertQueueStep(t, e) {
			return e && e < Et.length ? Et.splice(e, 0, t) : Et.push(t);
		}, deleteQueueStep(t) {
			void 0 !== Et[t] && Et.splice(t, 1);
		}, showLoading: Pt, enableLoading: Pt, getTimerLeft() {
			return Ot.timeout && Ot.timeout.getTimerLeft();
		}, stopTimer() {
			return Ot.timeout && Ot.timeout.stop();
		}, resumeTimer() {
			return Ot.timeout && Ot.timeout.start();
		}, toggleTimer() {
			var t = Ot.timeout; return t && (t.running ? t.stop() : t.start());
		}, increaseTimer(t) {
			return Ot.timeout && Ot.timeout.increase(t);
		}, isTimerRunning() {
			return Ot.timeout && Ot.timeout.isRunning();
		}
	}); function It() {
		const t = ht.innerParams.get(this); const e = ht.domCache.get(this); t.showConfirmButton || (T(e.confirmButton), t.showCancelButton || T(e.actions)), ot([e.popup, e.actions], k.loading), e.popup.removeAttribute('aria-busy'), e.popup.removeAttribute('data-loading'), e.confirmButton.disabled = !1, e.cancelButton.disabled = !1;
	}

	function Rt() {
		x.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (x.previousBodyPadding = Number.parseInt(globalThis.getComputedStyle(document.body).getPropertyValue('padding-right')), document.body.style.paddingRight = x.previousBodyPadding + (function () {
			if ('ontouchstart' in globalThis || navigator.msMaxTouchPoints) {
return 0;
} const t = document.createElement('div'); t.style.width = '50px', t.style.height = '50px', t.style.overflow = 'scroll', document.body.appendChild(t); const e = t.offsetWidth - t.clientWidth; return document.body.removeChild(t), e;
		})() + 'px');
	}

	function Dt() {
		return Boolean(globalThis.MSInputMethodContext) && Boolean(document.documentMode);
	}

	function Nt() {
		const t = q(); const e = rt(); t.style.removeProperty('align-items'), e.offsetTop < 0 && (t.style.alignItems = 'flex-start');
	}

	const Ut = function () {
		x.previousBodyPadding !== null && (document.body.style.paddingRight = x.previousBodyPadding + 'px', x.previousBodyPadding = null);
	};

	const _t = function () {
		if (S(document.body, k.iosfix)) {
			var t = Number.parseInt(document.body.style.top, 10); ot(document.body, k.iosfix), document.body.style.top = '', document.body.scrollTop = -1 * t;
		}
	};

	const zt = function () {
		"undefined" !== typeof globalThis && Dt() && window.removeEventListener('resize', Nt);
	};

 const Wt = function () {
		m(document.body.children).forEach(t => {
			t.hasAttribute('data-previous-aria-hidden') ? (t.setAttribute('aria-hidden', t.dataset.previousAriaHidden), t.removeAttribute('data-previous-aria-hidden')) : t.removeAttribute('aria-hidden');
		});
	};

 const Kt = {swalPromiseResolve: new WeakMap()}; function Ft(t, e, n) {
		e ? $t(n) : (Tt().then(() => $t(n)), Ot.keydownTarget.removeEventListener('keydown', Ot.keydownHandler, {capture: Ot.keydownListenerCapture}), Ot.keydownHandlerAdded = !1), delete Ot.keydownHandler, delete Ot.keydownTarget, t.parentNode && t.parentNode.removeChild(t), ot([document.documentElement, document.body], [k.shown, k['height-auto'], k['no-backdrop'], k['toast-shown'], k['toast-column']]), at() && (Ut(), _t(), zt(), Wt());
	}

	function Zt(t, e, n, o) {
		t.removeEventListener(dt, Zt), S(t, k.hide) && Ft(e, n, o), Yt(ht), Yt(Kt);
	}

	function Qt(t) {
		const e = q(); const n = rt(); const o = ht.innerParams.get(this); const i = Kt.swalPromiseResolve.get(this); const r = o.onClose; const a = o.onAfterClose; n && !S(n, k.hide) && (ot(n, k.show), nt(n, k.hide), dt && index(n) ? n.addEventListener(dt, Zt.bind(null, n, e, st(), a)) : Ft(e, st(), a), r !== null && typeof r === 'function' && r(n), i(t || {}), delete this.params);
	}

	var Yt = function (t) {
		for (const e in t) {
			t[e] = new WeakMap();
		}
	};

	var $t = function (t) {
		t !== null && typeof t === 'function' && setTimeout(() => {
			t();
		});
	};

	function Jt(t, e, n) {
		const o = ht.domCache.get(t); for (const t of e) {
			o[t].disabled = n;
		}
	}

	function Xt(t, e) {
		if (!t) {
			return !1;
		}

 if (t.type === 'radio') {
			for (let n = t.parentNode.parentNode.querySelectorAll('input'), o = 0; o < n.length; o++) {
				n[o].disabled = e;
			}
		} else {
			t.disabled = e;
		}
	}

	const Gt = (function () {
		function n(t, e) {
			o(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start();
		}

 return r(n, [{
key: 'start', value () {
return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining
}}, {
key: 'stop', value () {
return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date()-this.started), this.remaining
}}, {
key: 'increase', value (t) {
var e = this.running; return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
}}, {
key: 'getTimerLeft', value () {
return this.running && (this.stop(), this.start()), this.remaining
}}, {
key: 'isRunning', value () {
return this.running
}}]), n;
	})(); const te = {
		email(t, e) {
			return /^[\w.+-]+@[a-zA-Z\d.-]+\.[a-zA-Z\d-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || 'Invalid email address');
		}, url(t, e) {
			return /^https?:\/\/(www\.)?[-\w@:%.+~#=]{2,256}\.[a-z]{2,63}\b([-\w@:%+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || 'Invalid URL');
		}
}; function ee(t, e) {
		t.removeEventListener(dt, ee), e.style.overflowY = 'auto';
	}

	function ne(t) {
		const e = q(); const n = rt(); t.onBeforeOpen !== null && typeof t.onBeforeOpen === 'function' && t.onBeforeOpen(n), t.animation && (nt(n, k.show), nt(e, k.fade)), O(n), dt && index(n) ? (e.style.overflowY = 'hidden', n.addEventListener(dt, ee.bind(null, n, e))) : e.style.overflowY = 'auto', nt([document.documentElement, document.body, e], k.shown), t.heightAuto && t.backdrop && !t.toast && nt([document.documentElement, document.body], k['height-auto']), at() && (t.scrollbarPadding && Rt(), (function () {
			if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !globalThis.MSStream && !S(document.body, k.iosfix)) {
				const t = document.body.scrollTop; document.body.style.top = -1 * t + 'px', nt(document.body, k.iosfix);
			}
		})(), typeof globalThis !== 'undefined' && Dt() && (Nt(), window.addEventListener('resize', Nt)), m(document.body.children).forEach(t => {
			t === q() || (function (t, e) {
				if (typeof t.contains === 'function') {
					return t.contains(e);
				}
			})(t, q()) || (t.hasAttribute('aria-hidden') && t.setAttribute('data-previous-aria-hidden', t.getAttribute('aria-hidden')), t.setAttribute('aria-hidden', 'true'));
		}), setTimeout(() => {
			e.scrollTop = 0;
		})), st() || Ot.previousActiveElement || (Ot.previousActiveElement = document.activeElement), t.onOpen !== null && typeof t.onOpen === 'function' && setTimeout(() => {
			t.onOpen(n);
		});
	}

	const oe = void 0; const ie = {
		select(t, e, i) {
			var r = it(t, k.select); e.forEach(t => {
				var e = t[0]; let n = t[1]; let o = document.createElement('option'); o.value = e, o.innerHTML = n, i.inputValue.toString() === e.toString() && (o.selected = !0), r.appendChild(o);
			}), r.focus();
		}, radio(t, e, a) {
			var s = it(t, k.radio); for (const t of e) {
var e = t[0]; var n=t[1]; var o=document.createElement("input"); var i = document.createElement('label'); o.type = "radio", o.name = k.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0); var r = document.createElement('span'); r.innerHTML = n, r.className = k.label, i.appendChild(o), i.appendChild(r), s.appendChild(i)
} let n = s.querySelectorAll('input'); n.length && n[0].focus();
		}
}; const re = function (e) {
		const n = []; return typeof Map !== 'undefined' && e instanceof Map ? e.forEach((t, e) => {
			n.push([e, t]);
		}) : Object.keys(e).forEach(t => {
			n.push([t, e[t]]);
		}), n;
	};

	let ae; const se = Object.freeze({
		hideLoading: It, disableLoading: It, getInput(t) {
			let e = ht.innerParams.get(t || this); return P(ht.domCache.get(t || this).content, e.input);
		}, close: Qt, closePopup: Qt, closeModal: Qt, closeToast: Qt, enableButtons() {
			Jt(this, ['confirmButton', 'cancelButton'], !1);
		}, disableButtons() {
			Jt(this, ['confirmButton', 'cancelButton'], !0);
		}, enableConfirmButton() {
			h('Swal.disableConfirmButton()', 'Swal.getConfirmButton().removeAttribute(\'disabled\')'), Jt(this, ['confirmButton'], !1);
		}, disableConfirmButton() {
			h('Swal.enableConfirmButton()', 'Swal.getConfirmButton().setAttribute(\'disabled\', \'\')'), Jt(this, ['confirmButton'], !0);
		}, enableInput() {
			return Xt(this.getInput(), !1);
		}, disableInput() {
			return Xt(this.getInput(), !0);
		}, showValidationMessage(t) {
			let e = ht.domCache.get(this); e.validationMessage.innerHTML = t; const n = globalThis.getComputedStyle(e.popup); e.validationMessage.style.marginLeft = '-'.concat(n.getPropertyValue('padding-left')), e.validationMessage.style.marginRight = '-'.concat(n.getPropertyValue('padding-right')), O(e.validationMessage); const o = this.getInput(); o && (o.setAttribute('aria-invalid', !0), o.setAttribute('aria-describedBy', k['validation-message']), A(o), nt(o, k.inputerror));
		}, resetValidationMessage() {
			let t = ht.domCache.get(this); t.validationMessage && T(t.validationMessage); const e = this.getInput(); e && (e.removeAttribute('aria-invalid'), e.removeAttribute('aria-describedBy'), ot(e, k.inputerror));
		}, getProgressSteps() {
			return h('Swal.getProgressSteps()', 'const swalInstance = Swal.fire({progressSteps: [\'1\', \'2\', \'3\']}); const progressSteps = swalInstance.params.progressSteps'), ht.innerParams.get(this).progressSteps;
		}, setProgressSteps(t) {
			h('Swal.setProgressSteps()', 'Swal.update()'); const e = a({}, ht.innerParams.get(this), {progressSteps: t}); Ct(0, e), ht.innerParams.set(this, e);
		}, showProgressSteps() {
			let t = ht.domCache.get(this); O(t.progressSteps);
		}, hideProgressSteps() {
			let t = ht.domCache.get(this); T(t.progressSteps);
		}, _main(t) {
			let c = this; !(function (t) {
				for (const e in t) {
At(i = e) || y('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== qt.indexOf(o) && y('The parameter "'.concat(o, '" is incompatible with toasts'))), Lt(n = void 0) && h(n, Lt(n));
} var n; let o; let i;
			})(t);

 const l = a({}, Mt, t); !(function (e) {
				e.inputValidator || Object.keys(te).forEach(t => {
					e.input === t && (e.inputValidator = te[t]);
				}), e.showLoaderOnConfirm && !e.preConfirm && y('showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'), e.animation = w(e.animation), e.target && (typeof e.target!='string' || document.querySelector(e.target)) && (typeof e.target=='string' || e.target.appendChild) || (y('Target parameter is not valid, defaulting to "body"'), e.target = 'body'), 'string'===typeof e.title && (e.title = e.title.split('\n').join('<br />')); let t = rt(); let n = 'string'===typeof e.target ? document.querySelector(e.target) : e.target; (!t || t && n && t.parentNode !== n.parentNode) && ct(e);
			})(l), Object.freeze(l), Ot.timeout && (Ot.timeout.stop(), delete Ot.timeout), clearTimeout(Ot.restoreFocusTimeout); const d = {
				popup: rt(), container: q(), content: U(), actions: Z(), confirmButton: K(), cancelButton: F(), closeButton: $(), validationMessage: W(), progressSteps: z(),
}; ht.domCache.set(this, d), Bt(this, l), ht.innerParams.set(this, l); const p = this.constructor; return new Promise(t => {
				function n(t) {
					c.closePopup({value: t});
				}

				function s(t) {
					c.closePopup({dismiss: t});
				}

				Kt.swalPromiseResolve.set(c, t), l.timer && (Ot.timeout = new Gt((() => {
					s('timer'), delete Ot.timeout;
				}), l.timer)), l.input && setTimeout(() => {
					let t = c.getInput(); t && A(t);
				}, 0); for (var u = function (e) {
						l.showLoaderOnConfirm && p.showLoading(), l.preConfirm ? (c.resetValidationMessage(), Promise.resolve().then(() => l.preConfirm(e, l.validationMessage)).then(t => {
							V(d.validationMessage) || !1 === t ? c.hideLoading() : n(void 0 === t ? e : t);
						})) : n(e);
					}, e = function (t) {
						let e = t.target; const n = d.confirmButton; const o = d.cancelButton; const i = n && (n === e || n.contains(e)); const r = o && (o === e || o.contains(e)); switch (t.type) {
							case 'click': { if (i) {if (c.disableButtons(), l.input) {
var a = function () {
var t = c.getInput(); if (!t) return null; switch (l.input) {
case "checkbox": return t.checked ? 1 : 0; case "radio": return t.checked ? t.value : null; case "file": return t.files.length > 0?t.files[0] : null; default: return l.inputAutoTrim ? t.value.trim() : t.value
}
}(); l.inputValidator ? (c.disableInput(), Promise.resolve().then(() =>{
return l.inputValidator(a, l.validationMessage)
}).then((t) =>{
c.enableButtons(), c.enableInput(), t ? c.showValidationMessage(t) : u(a)
})) : c.getInput().checkValidity() ? u(a) : (c.enableButtons(), c.showValidationMessage(l.validationMessage))
} else {u(!0);}}else {
r && (c.disableButtons(), s(p.DismissReason.cancel))
}
							}
}
					}, o = d.popup.querySelectorAll('button'), i = 0; i < o.length; i++) {
					o[i].onclick = e, o[i].onmouseover = e, o[i].onmouseout = e, o[i].onmousedown = e;
				}

				if (d.closeButton.onclick = function () {
					s(p.DismissReason.close);
				}, l.toast) {
d.popup.addEventListener('click', () =>{
l.showConfirmButton || l.showCancelButton || l.showCloseButton || l.input || s(p.DismissReason.close)
});
} else {
					let r = !1; d.popup.onmousedown = function () {
						d.container.addEventListener('mouseup', function (t) {
							d.container.onmouseup = void 0, t.target === d.container && (r = !0);
						});
					}, d.container.onmousedown = function () {
						d.popup.addEventListener('mouseup', function (t) {
							d.popup.onmouseup = void 0, t.target !== d.popup && !d.popup.contains(t.target) || (r = !0);
						});
					}, d.container.onclick = function (t) {
						r ? r = !1 : t.target === d.container && w(l.allowOutsideClick) && s(p.DismissReason.backdrop);
					};
				}

				function a(t, e) {
					for (let n = J(l.focusCancel), o = 0; o < n.length; o++) {
return (t += e) === n.length ? t = 0 : t === -1 && (t = n.length - 1), n[t].focus();
} d.popup.focus();
				}

				l.reverseButtons ? d.confirmButton.parentNode.insertBefore(d.cancelButton, d.confirmButton) : d.confirmButton.parentNode.insertBefore(d.confirmButton, d.cancelButton), Ot.keydownTarget && Ot.keydownHandlerAdded && (Ot.keydownTarget.removeEventListener('keydown', Ot.keydownHandler, {capture: Ot.keydownListenerCapture}), Ot.keydownHandlerAdded = !1), l.toast || (Ot.keydownHandler = function (t) {
					return (function (t, e) {
						if (e.stopKeydownPropagation && t.stopPropagation(), 'Enter' !== t.key || t.isComposing) {if ('Tab'===t.key) {
for (var n = t.target, o = J(e.focusCancel), i = -1, r = 0; r < o.length; r++) if (n === o[r]) {
i = r; break
}t.shiftKey ? a(i, -1) : a(i, 1), t.stopPropagation(), t.preventDefault()
} else -1 !== ['ArrowLeft', "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(t.key) ? document.activeElement === d.confirmButton && V(d.cancelButton) ? d.cancelButton.focus() : document.activeElement === d.cancelButton && V(d.confirmButton) && d.confirmButton.focus() : "Escape" !== t.key && "Esc" !== t.key || !0 !== w(e.allowEscapeKey) || (t.preventDefault(), s(p.DismissReason.esc));} else if (t.target && c.getInput() && t.target.outerHTML === c.getInput().outerHTML) {
							if (["textarea","file"].includes(e.input)) {return;} p.clickConfirm(), t.preventDefault();
						}
					})(t, l);
				}, Ot.keydownTarget = l.keydownListenerCapture ? globalThis : d.popup, Ot.keydownListenerCapture = l.keydownListenerCapture, Ot.keydownTarget.addEventListener('keydown', Ot.keydownHandler, {capture: Ot.keydownListenerCapture}), Ot.keydownHandlerAdded = !0), c.enableButtons(), c.hideLoading(), c.resetValidationMessage(), l.toast && (l.input || l.footer || l.showCloseButton) ? nt(document.body, k['toast-column']) : ot(document.body, k['toast-column']), l.input === 'select' || l.input === 'radio' ? (function (e, n) {
					function o(t) {
						return ie[n.input](i, re(t), n);
					}

 var i = U(); v(n.inputOptions) ? (Pt(), n.inputOptions.then(t => {
						e.hideLoading(), o(t);
					})) : 'object' === f(n.inputOptions) ? o(n.inputOptions) : g('Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(f(n.inputOptions)));
				})(c, l) : ['text', "email", "number", "tel", "textarea"].includes(l.input) && v(l.inputValue) && (function (e, n) {
					var o = e.getInput(); T(o), n.inputValue.then(t => {
						o.value = 'number' === n.input ? Number.parseFloat(t) || 0 : String(t), O(o), o.focus(), e.hideLoading();
					}).catch(t => {
						g('Error in inputValue promise: ' + t), o.value = '', O(o), o.focus(), oe.hideLoading();
					});
				})(c, l), ne(l), l.toast || (w(l.allowEnterKey) ? l.focusCancel && V(d.cancelButton) ? d.cancelButton.focus() : l.focusConfirm && V(d.confirmButton) ? d.confirmButton.focus() : a(-1, 1) : document.activeElement && typeof document.activeElement.blur==='function' && document.activeElement.blur()), d.container.scrollTop = 0;
			});
		}, update(e) {
			let n = {}; for (const t of Object.keys(e)) {
				ce.isUpdatableParameter(t) ? n[t] = e[t] : y('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'));
			}

 const t = a({}, ht.innerParams.get(this), n); Bt(this, t), ht.innerParams.set(this, t), Object.defineProperties(this, {params: {value: a({}, this.params, e), writable: !1, enumerable: !0}});
		},
	}); function ue() {
		if (typeof globalThis !== 'undefined') {
			typeof Promise === 'undefined' && g('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)'), ae = this; for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
				e[n] = arguments[n];
			}

			const o = Object.freeze(this.constructor.argsToParams(e)); Object.defineProperties(this, {
				params: {
					value: o, writable: !1, enumerable: !0, configurable: !0,
				},
			}); const i = this._main(this.params); ht.promise.set(this, i);
		}
	}

	ue.prototype.then = function (t) {
		return ht.promise.get(this).then(t);
	}, ue.prototype.finally = function (t) {
		return ht.promise.get(this).finally(t);
	}, a(ue.prototype, se), a(ue, Ht), Object.keys(se).forEach(e => {
		ue[e] = function () {
			let t; if (ae) {
				return (t = ae)[e].apply(t, arguments);
			}
		};
	}), ue.DismissReason = C, ue.version = '8.10.7'; var ce = ue; return ce.default = ce;
}), typeof globalThis !== 'undefined' && globalThis.Sweetalert2 && (globalThis.swal = globalThis.sweetAlert = globalThis.Swal = globalThis.SweetAlert = globalThis.Sweetalert2);
typeof document !== 'undefined' && (function (e, t) {
	const n = e.createElement('style'); if (e.querySelectorAll('head')[0].appendChild(n), n.styleSheet) {
		n.styleSheet.disabled || (n.styleSheet.cssText = t);
	} else {
		try {
			n.innerHTML = t;
		} catch {
			n.innerText = t;
		}
	}
})(document, '@charset "UTF-8";@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}#swal2-content{text-align:center}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:"!"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:"i"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:"?"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:"؟"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}');
