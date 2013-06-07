define(["jquery","underscore","backbone","regs-state","regs-data","definition-view","interpretation-view","sub-head-view","toc-view"],function(e,t,n,r,i,s,o,u,a){return{getTree:function(t){var n=this;t.children().each(function(){var t=e(this),r=t.attr("id"),s=t.find("ol"),o;i.set({text:r,content:t.html()}),typeof (r,s)!="undefined"&&(o=s?e(s):t,n.getTree(o))})},bindEvents:function(){var t=function(t,n){e("#"+n).append(t)};e(".expand-button").on("click",function(t){var n=e(this);n.toggleClass("open").next(".hidden").slideToggle(),n.html(n.hasClass("open")?"Hide":"Show")}),e(".definition").on("click",function(t){t.preventDefault();var n=e(this).attr("data-definition");r.openDefs[n]?(r.openDefs[n].remove(),delete r.openDefs[n]):r.openDefs[n]=new s({id:n,$anchor:e(t.target)})}),e(".expand").on("click",function(n){n.preventDefault();var r=e(this).parent().attr("id"),s=i.retrieve(r);t(s,r),e(this).remove()}),e(".interpretation-ref").on("click",function(t){t.preventDefault();var n=e(this),i=n.closest("li").attr("id"),s="I-"+i;n.data("state")==="open"?(r.openInterps[s].remove(),n.removeData("state")):(r.openInterps[s]=new o({id:s,$anchor:n}),n.data("state","open"))}),e("#menu-link").on("click",function(t){return e("#table-of-contents, #reg-content, #menu-link, #content-header").toggleClass("active"),!1}),e(window).on("scroll",function(t){var n=e(this).scrollTop();n>=subhead.menuOffset?Events.trigger("expand"):Events.trigger("contract")})},init:function(){this.getTree(e("#reg-content")),window.Events=t.extend({},n.Events),window.subhead=new u({el:"#sub-head"}),window.toc=new a({el:"#menu"}),this.bindEvents()}}});