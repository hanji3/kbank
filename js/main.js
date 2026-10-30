$(function(){
  const body = $("body");
  const hd = $("#kbank-hd");

  // 푸터생성
  let ftSection = "<section class=\"section main-section-ft fp-auto-height\" id=\"main-ft\"></section>"; //''넣기 싫으면 \"\" 안에 노드 넣어서 쓸 수 있음
  let ftElement = $(".ft-container").clone();

  // 풀페이지
  $("#kbank-main").append(ftSection);
  $("#main-ft").append(ftElement); // 풀페이지 만들어 지기 전에 먼저 시작되어야 함
  $("#kbank-main").fullpage({
    //풀페이지 옵션 추가
    licenseKey: null,
    // navigation: true,
    // navigationPosition: "right",
    // navigationTooltips: ["처음으로", "돈 모으기", "혜택", "이자생활", "습관", "서비스", "대출", "스토리", "앱 소개", "회사정보"],
    menu: "#fp-nav-hor",
    anchors: ["main", "money", "benefit", "interest", "savings", "service", "loan", "story", "app", "info"],
    
    // section을 떠날 때 실행
    onLeave: function(origin, destination, direction) {
      // 헤더 제어
      if (direction === 'down') {
          $('#kbank-hd').addClass('hide');
      } else if (direction === 'up') {
          $('#kbank-hd').removeClass('hide');
      }
      // 현재 떠나는 section의 애니메이션 초기화
      const originElements = origin.item.querySelectorAll('.animate');
      originElements.forEach(el => {
        el.classList.remove('active');
      });
      // 도착한 section의 애니메이션 실행
      const destinationElements = destination.item.querySelectorAll('.animate');
      destinationElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('active');
        }, index * 200);
      });
    },

    // section에 진입했을 때 실행
    afterLoad: function (origin, destination, direction) {
      let loadedSection = this;
      // 특정 섹션에서 실행할 때(4번째 섹션)
      if (destination.index == 3) {}
    

      // 디자인 바꾸기 
      if (destination.index > 0 && destination.index < 8) { /* 1~7 */ 
        body.removeClass("light").addClass("dark");
        hd.addClass("dark");
      } 
      else { /* 0, 8, 9*/ 
        body.removeClass("dark").addClass("light");
        hd.removeClass("dark");
      }
    }
  });

  // 히어로 슬라이드 제어
  const swiperHero = new Swiper('.swiper-hero', {
    // Optional parameters`
    effect: 'fade', //slide(기본)와 fade가 있음
    // direction: 'horizontal',
    // slidesPerView: 1,
    loop: true,
    speed: 1000, // 움직이는 속도
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.hero-pagination',
      clickable: true,
      // type: 'fraction', // 기본값은 bullets
    },

    // 이전, 다음 버튼 사용
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // 스크롤바 사용
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  $(".hero-toggle").click(function() {
    // 스와이퍼가 자동으로 동작 중이라면
    if (swiperHero.autoplay.running) {
      // 자동재생 멈춤
      swiperHero.autoplay.stop();
      // 버튼의 레이블을 ▶
      $(this).removeClass("fa-pause").addClass("fa-play");
    // 스와이퍼가 자동으로 동작하지 않는다면(멈춰있다면 )
    } else {  
      // 다시 자동으로 재생
      swiperHero.autoplay.start();
      // 버튼의 레이블을 ❚❚
      $(this).removeClass("fa-play").addClass("fa-pause");
    }
  });

  // 저축 슬라이드 제어
  const swiperSavings = new Swiper('.swiper-savings', {
    //effect: 'fade',
    loop: true,
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.savings-pagination',
      clickable: true,
    },
  });
  $(".savings-toggle").click(function() {
    if (swiperSavings.autoplay.running) {
      swiperSavings.autoplay.stop();
      $(this).removeClass("fa-pause").addClass("fa-play");
    } else {  
      swiperSavings.autoplay.start();
      $(this).removeClass("fa-play").addClass("fa-pause");
    }
  });

  // 스토리 슬라이드 6개 제어
  const swiperStory = new Swiper('.swiper-story', {
    // speed: 600,
    slidesPerView: 'auto',
    pagination: {
      el: '.story-progressbar',
      type: 'progressbar',
      clickable: true,
    },

    // 이전, 다음 버튼 사용
    navigation: {
      nextEl: '.story-button-next',
      prevEl: '.story-button-prev',
    },

  });
});