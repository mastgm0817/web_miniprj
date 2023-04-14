// 부트스트랩 자바스크립트 파일에서 가져옴
$(document).ready(function(){
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
    });
  });

  function moveCard() {
    const cardDeck = document.getElementById('card-deck');
    cardDeck.classList.add('move');
    setTimeout(() => {
      const firstCard = cardDeck.querySelector('.card:first-child');
      cardDeck.appendChild(firstCard);
      cardDeck.classList.remove('move');
    }, 1000);
  }
  
  // 일정 시간 간격으로 카드 영역 이동 함수를 호출
  setInterval(moveCard, 3000);