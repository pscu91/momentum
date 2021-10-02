const quotes = [
  {
    quote: '가장 빛나는 레뷰를 보여준 분에게는 톱스타로 가는 길이 열릴 겁니다.',
    author: '기린',
  },
  {
    quote: '무대에 가득 열린 과실, 하지만 모두 무르니까 누군가가 지켜 줘야 해.',
    author: '다이바 나나',
  },
  {
    quote: '반짝이는 무대도 너무 좋지만, 반짝이는 당신은 더 좋아.',
    author: '츠유자키 마히루',
  },
  {
    quote:
      '나나는 모두의 바나나 같네, 달콤하고 부드럽고 영양 만점! 어깨 결림까지 풀어 주잖아.',
    author: '아이죠 카렌',
  },
  {
    quote:
      '작은 별을 따면 당신은 작은 행복을 손에 넣고, 큰 별을 따면 당신은 큰 부를 손에 넣죠.',
    author: '스타라이트',
  },
  {
    quote:
      '스타라이트, 이것은 저 멀리 떨어진 별의 먼 옛날의 아득한 미래의 이야기.',
    author: '스타라이트',
  },
  {
    quote: '결국 스타라이트는 비극, 결말은 이별이야.',
    author: '카구라 히카리',
  },
  {
    quote: '오늘 밤 반짝임을 당신께!',
    author: '텐도 마야',
  },
  {
    quote: '카구라 히카리, 저 애도 내 무대에 필요해졌어요.',
    author: '다이바 나나',
  },
  {
    quote: '모두를 스타라이트 하겠습니다!',
    author: '아이죠 카렌',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quote}"`;
author.innerText = `- ${todayQuote.author}`;
