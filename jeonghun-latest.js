(()=>{(function(l,o){"use strict";var r=200,a="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";function s(t){if(l.jQuery)return t(l.jQuery);var e=o.createElement("script");e.src=a,e.onload=function(){t(l.jQuery)},e.onerror=function(){console.warn("[index.js] Failed to load jQuery. Falling back to vanilla."),t(null)},o.head.appendChild(e)}function c(t){t(function(){t(".BlogArchive h2").click(function(e){e.preventDefault(),t(this).siblings().slideToggle(r)}),t("#Label1 h2").click(function(e){e.preventDefault(),t(this).siblings().slideToggle(r)}),t(".PopularPosts h2").click(function(e){e.preventDefault(),t(this).siblings().slideToggle(r)}),t("a").each(function(){var e=t(this),n=t.trim(e.text());n==="\uC6F9 \uBC84\uC804 \uBCF4\uAE30"&&e.text("View web(PC) version"),n==="\uBAA8\uBC14\uC77C \uBC84\uC804 \uBCF4\uAE30"&&e.text("View mobile version")})})}function u(){o.addEventListener("DOMContentLoaded",function(){var t=[".BlogArchive h2","#Label1 h2",".PopularPosts h2"];t.forEach(function(e){Array.prototype.forEach.call(o.querySelectorAll(e),function(n){n.style.cursor="pointer",n.addEventListener("click",function(f){f.preventDefault();for(var i=n.nextElementSibling;i&&!i.classList.contains("widget-content");)i=i.nextElementSibling;if(i){var v=getComputedStyle(i).display!=="none";i.style.display=v?"none":""}})})}),Array.prototype.forEach.call(o.querySelectorAll("a"),function(e){var n=(e.textContent||"").trim();n==="\uC6F9 \uBC84\uC804 \uBCF4\uAE30"&&(e.textContent="View web(PC) version"),n==="\uBAA8\uBC14\uC77C \uBC84\uC804 \uBCF4\uAE30"&&(e.textContent="View mobile version")})})}s(function(t){t?c(t):u()})})(window,document);})();
/*!
 * File: src/js/index.js
 * Description: Jeonghun's Custom Javascript for Blogger 
 * - 최초 버전: 2025-09-02
 * - 최종 수정: 2025-10-26
 * - 작성자: Jeonghun
 *    - 역할: jQuery 로드(없으면), 위젯 토글(slideToggle), 웹/모바일 텍스트 교체
 *    - 반응 속도: 200ms (SPEED 값으로 조정)

 */
