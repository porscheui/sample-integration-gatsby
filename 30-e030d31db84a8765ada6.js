(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{N2WN:function(e,i,t){"use strict";t.r(i),t.d(i,"p_headline",(function(){return l}));var n=t("Kt1a"),a=t("dr3n"),h=t("CII9"),l=function(){function e(e){Object(n.j)(this,e),this.variant="headline-1",this.tag=void 0,this.align="left",this.color="default",this.ellipsis=!1,this.theme="light"}return e.prototype.componentWillLoad=function(){this.addSlottedStyles()},e.prototype.render=function(){var e=this.hasSlottedHeadlineTag?"div":this.tag||{"large-title":"h1","headline-1":"h1","headline-2":"h2","headline-3":"h3","headline-4":"h4","headline-5":"h5"}[this.variant],i=Object(h.a)(Object(n.d)("headline"),Object(n.d)("headline--variant-"+this.variant),Object(n.d)("headline--align-"+this.align),Object(n.d)("headline--color-"+this.color),this.ellipsis&&Object(n.d)("headline--ellipsis"),"inherit"!==this.color&&Object(n.d)("headline--theme-"+this.theme));return Object(n.h)(e,{class:i},Object(n.h)("slot",null))},Object.defineProperty(e.prototype,"hasSlottedHeadlineTag",{get:function(){var e=this.host.querySelector(":first-child");return null==e?void 0:e.matches("h1, h2, h3, h4, h5, h6")},enumerable:!1,configurable:!0}),e.prototype.addSlottedStyles=function(){var e=this.host.tagName.toLowerCase()+" a {\n      color: inherit;\n      text-decoration: none;\n    }";Object(a.a)(this.host,e)},Object.defineProperty(e.prototype,"host",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),e}();l.style=':host{display:block}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin:0 !important;font-weight:600 !important;font-size:inherit !important}.p-headline{padding:0;margin:0}.p-headline--variant-large-title{font-size:2rem;line-height:1.375;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-large-title{font-size:2.625rem;line-height:1.2380952381}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-large-title{font-size:3.25rem;line-height:1.2307692308}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-large-title{font-size:3.875rem;line-height:1.2258064516}}@media (min-width: 1760px){.p-headline--variant-large-title{font-size:4.5rem;line-height:1.2222222222}}.p-headline--variant-headline-1{font-size:1.75rem;line-height:1.4285714286;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-1{font-size:2.25rem;line-height:1.3333333333}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-1{font-size:2.75rem;line-height:1.1818181818}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-1{font-size:3.25rem;line-height:1.2307692308}}@media (min-width: 1760px){.p-headline--variant-headline-1{font-size:3.75rem;line-height:1.2}}.p-headline--variant-headline-2{font-size:1.5rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-2{font-size:1.875rem;line-height:1.3333333333}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-2{font-size:2.25rem;line-height:1.3333333333}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-2{font-size:2.625rem;line-height:1.2380952381}}@media (min-width: 1760px){.p-headline--variant-headline-2{font-size:3rem;line-height:1.25}}.p-headline--variant-headline-3{font-size:1.25rem;line-height:1.4;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-3{font-size:1.5rem;line-height:1.5}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-3{font-size:1.75rem;line-height:1.4285714286}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-3{font-size:2rem;line-height:1.375}}@media (min-width: 1760px){.p-headline--variant-headline-3{font-size:2.25rem;line-height:1.3333333333}}.p-headline--variant-headline-4{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-4{font-size:1.125rem;line-height:1.5555555556}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-4{font-size:1.25rem;line-height:1.4}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-4{font-size:1.375rem;line-height:1.4545454545}}@media (min-width: 1760px){.p-headline--variant-headline-4{font-size:1.5rem;line-height:1.5}}.p-headline--variant-headline-5{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:600}.p-headline--align-left{text-align:left}.p-headline--align-center{text-align:center}.p-headline--align-right{text-align:right}.p-headline--color-default.p-headline--theme-light{color:#000}.p-headline--color-default.p-headline--theme-dark{color:#fff}.p-headline--color-inherit{color:inherit}.p-headline--ellipsis{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'}}]);
//# sourceMappingURL=30-e030d31db84a8765ada6.js.map