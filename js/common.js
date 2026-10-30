$(function(){
  // 변수지정
  // 헤더
  const body = $("body");
  const hd = $("#kbank-hd");
  let lastScrollTop = 0; // 문서가 마지막으로 스크롤 된 양
  const depth1 = $(".depth1");
  const depth2 = ".depth2";
  const hdBg = $(".hd-bg");
  const menuCount = 2; // 메뉴 갯수
  let submenuPos = $(depth2).offset().top; // 서브메뉴 Y좌표

  //----------------헤더 고정 구현--------------
  $(window).on("scroll", function () {
    let currentScroll = $(this).scrollTop(); //현재 스크롤 된 양
    if (currentScroll > lastScrollTop) { // 아래로 스크롤했을 때 헤더 필요 없음
      hd.removeClass("fixed").addClass("hide"); // 헤더 고정 풀고 화면 밖으로
    } else { // 위로 스크롤했을 때 헤더 필요
      hd.addClass("fixed").removeClass("hide"); // 헤더를 창에 고정 화면 안으로
    } 
    if (currentScroll == 0) { // 맨 위에서는 헤더 필요 fixed 제거
      hd.removeClass("fixed hide"); // 헤더 고정 풀기
    } 
    lastScrollTop = currentScroll; // 현재 스크롤 된 양을 마지막 양으로 업데이트
  });

  //----------------GNB구현---------------
  // const depth2Height = ["640px", "540px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px", "0px"];
  let depth2Height = [];
  // depth2Height[0] = depth1.eq(0).find(depth2).innerHeight() + 68;
  // depth2Height[1] = depth1.eq(1).find(depth2).innerHeight() + 68;
  // console.log(depth2Height);
  // 반복문 : for(초기값; 조건문; 증감식) {실행}
  for(let i = 0; i < menuCount; i++) {
    depth2Height[i] = depth1.eq(i).find(depth2).innerHeight() + submenuPos;
    // console.log(depth2Height[i]);
  }
  // depth1.each(function(i){
  //   depth2Height[i] = $(this).find(depth2).innerHeight() + 68;
  //   console.log(depth2Height[i]);
  // });


  // 서브메뉴 숨기기
  depth1.addClass("disable");

  let num;

  // 함수
  depth1.mouseenter(function(){
    num = $(this).index();
    // console.log(num);
    if(body.hasClass("dark")){
      hd.removeClass("dark");
    }
    hdBg.css("height", depth2Height[num]);
    depth1.removeClass("active").addClass("disable");
    $(this).removeClass("disable").addClass("active");
  });
  depth1.mouseleave(function(){
    if(body.hasClass("dark")){
      hd.addClass("dark");
    }
    hdBg.css("height", "0");
    $(this).removeClass("active").addClass("disable");
  });
  hdBg.mouseleave(function(){
    $(this).css("height", "0");
    depth1.removeClass("active").addClass("disable");
  });
});