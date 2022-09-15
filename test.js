const slideElements = document.getElementById('theme_time_data');

  const paragraphElements = slideElements.getElementsByTagName('li');
  for (const paragraphElement of paragraphElements) {
     // 검색한 p 태그의 내용 출력
     console.log(paragraphElement.textContent);
  }