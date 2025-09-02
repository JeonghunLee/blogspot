/*!
 * Jeonghun index.js
 * - 역할: jQuery 로드(없으면), 위젯 토글(slideToggle), 웹/모바일 텍스트 교체
 * - 반응 속도: 200ms (SPEED 값으로 조정)
 * - 최초 버전: 2025-09-02
 */
(function (w, d) {
  'use strict';

  // ====== 설정 ======
  var SPEED = 200; // ms — 느리게 하려면 400~800 추천
  var JQUERY_URL = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
  // 최신 jQuery를 쓰고 싶으면 예: 'https://code.jquery.com/jquery-3.6.0.min.js'

  // ====== jQuery 로드 & 초기화 ======
  function ensureJQ(cb) {
    if (w.jQuery) return cb(w.jQuery);
    var s = d.createElement('script');
    s.src = JQUERY_URL;
    s.onload = function () { cb(w.jQuery); };
    s.onerror = function () {
      console.warn('[index.js] Failed to load jQuery. Falling back to vanilla.');
      cb(null);
    };
    d.head.appendChild(s);
  }

  function initWithJQ($) {
    // 가독성 유지: 원래 패턴 그대로 (click + siblings + slideToggle)
    $(function () {
      // BlogArchive
      $('.BlogArchive h2').click(function (e) {
        e.preventDefault();
        $(this).siblings().slideToggle(SPEED);
      });

      // Label (필요 시 주석 해제)
/*
      $('.Label h2').click(function (e) {
        e.preventDefault();
        $(this).siblings().slideToggle(SPEED);
      });
*/

      // Label1
      $('#Label1 h2').click(function (e) {
        e.preventDefault();
        $(this).siblings().slideToggle(SPEED);
      });

      // PopularPosts
      $('.PopularPosts h2').click(function (e) {
        e.preventDefault();
        $(this).siblings().slideToggle(SPEED);
      });

      // Localization (jQuery로도 간단히)
      $('a').each(function () {
        var $a = $(this);
        var t = $.trim($a.text());
        if (t === '웹 버전 보기')    $a.text('View web(PC) version');
        if (t === '모바일 버전 보기') $a.text('View mobile version');
      });
    });
  }

  // jQuery 로드 실패 시 최소 폴백(애니메이션 없이 즉시 토글)
  function initVanilla() {
    d.addEventListener('DOMContentLoaded', function () {
      var sels = ['.BlogArchive h2', '#Label1 h2', '.PopularPosts h2'/*, '.Label h2'*/];
      sels.forEach(function (sel) {
        Array.prototype.forEach.call(d.querySelectorAll(sel), function (h2) {
          h2.style.cursor = 'pointer';
          h2.addEventListener('click', function (e) {
            e.preventDefault();
            var sib = h2.nextElementSibling;
            while (sib && !sib.classList.contains('widget-content')) sib = sib.nextElementSibling;
            if (!sib) return;
            var shown = getComputedStyle(sib).display !== 'none';
            sib.style.display = shown ? 'none' : '';
          });
        });
      });
      // 텍스트 교체
      Array.prototype.forEach.call(d.querySelectorAll('a'), function (a) {
        var t = (a.textContent || '').trim();
        if (t === '웹 버전 보기')    a.textContent = 'View web(PC) version';
        if (t === '모바일 버전 보기') a.textContent = 'View mobile version';
      });
    });
  }

  // 부팅
  ensureJQ(function ($) {
    if ($) initWithJQ($);
    else   initVanilla();
  });

})(window, document);