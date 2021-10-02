const quotes = [
  {
    quote: '피할수 없으면 즐겨라!',
    author: '로버트 엘리엇',
  },
  {
    quote:
      '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.',
    author: '찰리 채플린',
  },
  {
    quote:
      '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.',
    author: '단테',
  },
  {
    quote:
      '네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다.',
    author: '간디',
  },
  {
    quote: '1퍼센트의 가능성, 그것이 나의 길이다.',
    author: '나폴레옹',
  },
  {
    quote: '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.',
    author: '괴테',
  },
  {
    quote: '화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.',
    author: '마크 트웨인',
  },
  {
    quote: '고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.',
    author: '헬렌 켈러',
  },
  {
    quote:
      '고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.',
    author: '베토벤',
  },
  {
    quote: '당신이 할수 있다고 믿든, 할수 없다고 믿든, 믿는 대로 될것이다.',
    author: '헨리 포드',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `" ${todayQuote.quote} "`;
author.innerText = `by ${todayQuote.author}`;
