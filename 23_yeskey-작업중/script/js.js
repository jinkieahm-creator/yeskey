const body = document.body;
const mobBtn = document.querySelector(".mob_btn")
const header = document.querySelector("header")
const h_nav = document.querySelector(".h_nav")

// 모바일 메뉴 초기화
function resetMenu(){
  body.classList.remove('mOpen')
  closeSubMenu()
}

// 화면 크기가 커졌을때 모바일에서 적용된 것 초기화
window.addEventListener('resize', ()=>{
  if(window.innerWidth >= 1240 ){
    resetMenu()
  }
})

// 스크롤
window.addEventListener('scroll',()=>{
  header.classList.toggle("scrolling", window.scrollY > 100)
})

//헤더에 hover
header.addEventListener('mouseover',()=>{
  header.classList.add("scrolling")
})
header.addEventListener('mouseout',()=>{
  if(window.scrollY <= 100){
    header.classList.remove("scrolling")
  }
})

// pc 네비게이션
h_nav.addEventListener('mouseover',()=>{
  header.classList.add("on")
})
header.addEventListener('mouseout', (e) => {
  if (!header.contains(e.relatedTarget)) {
    header.classList.remove("on");
  }
})
// e.relatedTarget : 마우스가 머물러 있냐를 확인



// 모바일 네비게이션 
mobBtn.addEventListener('click', ()=>{
  body.classList.toggle('mOpen')

  if(!body.classList.contains('mOpen')){
    closeSubMenu()
  }  
})





// section3_ slide
const rows = document.querySelectorAll('#section3 .row')

rows.forEach( row =>{
  const leftBtn = row.querySelector('#section3 .left')
  const rightBtn = row.querySelector('#section3 .right')
  const imgs = row.querySelectorAll('.row_inner img')

  //오른쪽 버튼
  rightBtn.addEventListener('click', function(e){
    e.preventDefault();
    const activeImg = row.querySelector('.row_inner img.active')
    activeImg.classList.remove('active')

    if(activeImg.nextElementSibling){
      console.log(activeImg)
      activeImg.nextElementSibling.classList.add('active')
    } else { 
      imgs[0].classList.add('active')
    }
    
  })

  //왼쪽 버튼
  leftBtn.addEventListener('click', function(e){
    e.preventDefault()
    const activeImg = row.querySelector('.row_inner img.active')
    activeImg.classList.remove('active')

    if(activeImg.previousElementSibling){
      console.log(activeImg)
      activeImg.previousElementSibling.classList.add('active')
    } else { 
      imgs[imgs.length-1].classList.add('active')
    }
  })
})


// 모바일 슬라이드메뉴
const subNav = document.querySelector('.subNav_wrap')
const depth1Btn = document.querySelectorAll('.depth1 > li > span')


// 첫번째 depth1메뉴 클릭하면 depth2열리게
depth1Btn.forEach(btn => {
  btn.addEventListener('click',()=>{
    const parent = btn.parentElement;
    //클릭한 depth1버튼의 부모li에 .active유무를 변수에 넣어줌
    const isOpen = parent.classList.contains('active')
    

    // 모든 depth1메뉴 닫기 
    subNav.querySelectorAll('.depth1 > li').forEach(li => {
      console.log('클릭!')
      li.classList.remove('active');
    })

    //클릭한 메뉴가 active가 없을때만 열어줌
    if(!isOpen){
      parent.classList.add('active')
    }
    
  })
})

// depth2메뉴 클릭하면 depth3열리게
const depth2Btn = subNav.querySelectorAll('.depth2 > li > a')
console.log(depth2Btn)

depth2Btn.forEach(btn => {
  btn.addEventListener('click', ()=>{
    const parent = btn.parentElement;
    const depth3 = parent.querySelector('.depth3')
    
    if(!depth3) return;
    parent.classList.toggle('on')
  })
})

// 모바일 슬라이드 - 열려있는 하위 메뉴 닫기 함수
function closeSubMenu() {
  subNav.querySelectorAll('.depth1 > li.active').forEach(li => {      
      li.classList.remove('active');
    })
  subNav.querySelectorAll('.depth2 > li.on').forEach(li => {      
      li.classList.remove('on');
    })
}

// #section3 play/stop버튼
const stopPlayBtn = document.querySelector('.stop_play')
const rowInners = document.querySelectorAll('.row_inner')

stopPlayBtn.addEventListener('click', ()=>{
  const isPaused = stopPlayBtn.classList.toggle('paused')
  //console.log(isPaused)

  rowInners.forEach(row => {
    row.style.animationPlayState = isPaused ? 'paused' : 'running'
  })

  stopPlayBtn.setAttribute(
    'aria-label', 
    isPaused ? "애니메이션 재생" : "애니메이션 정지")
})


// footer Family Button
const footBtn = document.querySelector('.family_btn')
const footWrap = document.querySelector('.family_wrap')

footBtn.addEventListener('click', function(e){
  e.preventDefault();
  footWrap.classList.toggle('active')
})