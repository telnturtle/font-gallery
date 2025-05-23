const repositories = [
  {
    title: 'Noto Serif',
    description: '구글의 Noto 폰트 프로젝트의 세리프 글꼴',
    url: 'https://fonts.google.com/noto/specimen/Noto+Serif',
    className: 'noto-serif',
    tags: `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200..900&display=swap" rel="stylesheet">
    `,
    language: ['latin', 'korean'],
  },
  {
    title: '부산',
    description: '부산시 공식 서체',
    url: 'https://www.busan.go.kr/bhbusan',
    className: 'busan',
    tags: `
      <style>
        @font-face {
          font-family: 'Busan';
          font-style: normal;
          font-weight: 400;
          src: url('//fastly.jsdelivr.net/korean-webfonts/1/orgs/govs/busan/Busan/Busan.woff2') format('woff2'),
          url('//fastly.jsdelivr.net/korean-webfonts/1/orgs/govs/busan/Busan/Busan.woff') format('woff');
        }

        .busan * {
          font-family: 'Busan', sans-serif;
        }
      </style>
    `,
    language: ['latin', 'korean'],
  },
  {
    title: '부산바다체',
    description:
      '부산체를 기반으로 한 부산바다체는 부산의 바다를 모티브로 하여 디자인되었습니다.',
    url: 'https://tumblbug.com/busanbada/story',
    className: 'busanbada',
    tags: `
      <style>
        @font-face {
            font-family: 'BusanBada';
            src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BusanBada.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        
        .busanbada * {
          font-family: 'BusanBada', sans-serif;
        }
      </style>
    `,
    language: ['latin', 'korean'],
  },
  {
    title: '한화',
    description:
      'Hanwha Group의 공식 서체, 한화그룹의 브랜드 아이덴티티를 담고 있습니다.',
    url: 'https://www.hanwha.co.kr/company/introduce.do',
    className: 'hanwha',
    tags: `
      <style>
        @font-face {
          font-family: '한화';
          font-style: 'normal';
          font-weight: 400;
          src: url('./02HanwhaR.ttf') format('truetype');
        }
        @font-face {
          font-family: '한화';
          font-style: 'normal';
          font-weight: 700;
          src: url('./01HanwhaB.ttf') format('truetype');
        }

        .hanwha * {
          font-family: '한화', sans-serif;
        }
      </style>
    `,
    language: ['latin', 'korean'],
  },
  {
    title: 'Dank Mono',
    description:
      'A typeface designed for coding aesthetes with modern displays in mind. Delightful ligatures and an italic variant and bold style.',
    url: 'https://philpl.gumroad.com/l/dank-mono',
    className: 'dank-mono',
    tags: `
      <style>
        @font-face {
          font-family: 'Dank Mono';
          font-style: 'normal';
          font-weight: 400;
          src: url('./DankMono-Regular.otf') format('opentype');
        }
        @font-face {
          font-family: 'Dank Mono';
          font-style: 'normal';
          font-weight: 700;
          src: url('./DankMono-Bold.otf') format('opentype');
        }

        .dank-mono * {
          font-family: 'Dank Mono', monospace;
        }
      </style>
    `,
    language: ['latin'],
  },
  {
    title: 'Intel One Mono',
    description:
      'A monospace typeface designed with input from a team of low-vision and legally blind developers for optimized legibility.',
    url: 'https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html',
    className: 'intel-one-mono',
    tags: `
      <style>
        @font-face {
          font-family: 'Intel One Mono';
          font-style: 'normal';
          font-weight: 400;
          src: url('./IntelOneMono-Medium.otf') format('opentype');
        }
        @font-face {
          font-family: 'Intel One Mono';
          font-style: 'normal';
          font-weight: 700;
          src: url('./IntelOneMono-Bold.otf') format('opentype');
        }

        .intel-one-mono * {
          font-family: 'Intel One Mono', monospace;
        }
      </style>
    `,
    language: ['latin'],
  },
  {
    title: '지하철체',
    description: '지하철역에서 볼 수 있는, 옛날부터 사용되어온 글꼴입니다.',
    url: 'https://blog.naver.com/sendei333/222195624371',
    className: 'jihacheol',
    tags: `
      <style>
        @font-face {
          font-family: '지하철';
          font-style: 'normal';
          font-weight: 400;
          src: url('./jihacheol.ttf') format('truetype');
        }

        .jihacheol * {
          font-family: '지하철', sans-serif;
        }
      </style>
    `,
    language: ['latin', 'korean'],
  },
  {
    title: 'Merriweather',
    description: 'I used this font for my google docs resume.',
    url: 'https://fonts.google.com/specimen/Merriweather',
    className: 'merriweather',
    tags: `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet">

      <style>
        .merriweather * {
          font-family: 'Merriweather', serif;
        }
      </style>
    `,
    language: ['latin'],
  },
  {
    title: '고운바탕',
    description: '단정하고 고운 손글씨.',
    url: 'https://github.com/yangheeryu/Gowun-Batang',
    className: 'gowun-batang',
    tags: `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" rel="stylesheet">

      <style>
        .gowun-batang * {
          font-family: 'Gowun Batang', serif;
        }
      </style>
    `,
    language: ['latin', 'korean'],
  },
  {
    title: 'IBM Plex Sans KR',
    description: '한국어와 영어를 캐주얼하게 사용하기 좋습니다.',
    url: 'https://www.ibm.com/plex/',
    className: 'ibm-plex-sans-kr',
    tags: `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap" rel="stylesheet">

      <style>
        .ibm-plex-sans-kr * {
          font-family: 'IBM Plex Sans KR', sans-serif;
        }
      </style>
    `,
    language: ['latin', 'korean'],
  },
  {
    title: 'SUITE Variable',
    description: 'Large Straight! 12345',
    url: 'https://sun.fo/suite/',
    className: 'suite-variable',
    tags: `
      <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUITE@2/fonts/variable/woff2/SUITE-Variable.css" rel="stylesheet">

      <style>
        .suite-variable * {
          font-family: 'SUITE Variable', sans-serif;
        }
      </style>
    `,
    language: ['latin', 'korean'],
  },
  {
    title: 'Cascadia Code',
    description: 'Code !== Mono <|| ||> <<===<<==||==>>===>> <~~ Microsoft',
    url: 'https://github.com/microsoft/cascadia-code',
    className: 'cascadia-code',
    tags: `
      <link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet">

      <style>
        .cascadia-code * {
          font-family: 'Cascadia Code', monospace;
          font-variant-ligatures: common-ligatures;
        }
      </style>
    `,
    language: ['latin'],
  },
]

const loremIpsum = {
  latin: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  korean: `요약을 너무, 국제화에 2025년 인간은 사람이나 대응책을 먹이다. 환경이 뛴 나누고 있는데, 세계관 크는데, 같고서 기술과 있는 개입된다. 그 준비에 등 의장의 것 한 낯설어 물은 주요가 확인시키라 아니다. 몰리자 아들에 섞다 모두 직조도 이 퇴근길을 사랑을 있다.`,
}

repositories.forEach((item) => {
  item.language.forEach((lang) => {
    item.loremIpsum = item.loremIpsum || ''
    item.loremIpsum += `<p class="lorem-ipsum">${loremIpsum[lang]}</p>`
  })
})

// shuffle function
const shuffle = (list) => {
  list.sort(() => Math.random() - 0.5)
}

// shuffle repositories
shuffle(repositories)

const outputEl = document.querySelector('#output')

repositories.forEach((repo, index) => {
  const div = document.createElement('div')
  div.className = repo.className
  div.innerHTML = `
    <a href="${repo.url}" target="_blank">
      <h2>${repo.title}</h2>
      <p>${repo.description}</p>
    </a>
    ${repo.loremIpsum}
  `
  // 초기 opacity 0로 설정 (optional)
  div.style.opacity = 0
  // 애니메이션 적용: 0.5초 동안 fadeIn, delay는 index에 따라 0.22초씩 증가
  div.style.animation = `fadeIn 0.5s ease forwards`
  div.style.animationDelay = `${index * 0.22}s`

  outputEl.appendChild(div)

  const head = document.querySelector('head')
  head.insertAdjacentHTML('beforeend', repo.tags)
})
