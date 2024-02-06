import React, { useState, useEffect } from 'react';
import './App.css';

const NewsBoard = () => {
  const NEWS = [
    "프로스펙스 X 한국타이어 콜라보레이션 골프화 출시",
    "1월 출석체크 시 출석 포인트 +  경품 증정",
    "방한대전 UP TO 30% OFF (겨울의류, 방한신발 및 용품)",
    "국민/신한/현대카드 결제 시 최대 1만원 즉시할인 (소진 시 종료)",
    "New Year Sale ~70% + 첫구매 20% + 포인트 2배 + 룰렛이벤트",
    "1월 신규가입 고객 대상 구매 이벤트"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  let boardSetInterval = 0;

  useEffect(() => {
    startInterval();
    return () => {
      stopBoardInterval();
    };
  }, []);

  const startInterval = () => {
    boardSetInterval = setInterval(newsBoard, 2000);
  }

  const stopBoardInterval = () => {
    clearInterval(boardSetInterval);
  }

  const newsBoard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % NEWS.length);
  }

  return (
    <div className="boardBack" id="boardSliderBack">
      <div id="boardSlider">
        {NEWS[currentIndex]}
      </div>
    </div>
  );
}

export default NewsBoard;
