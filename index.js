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
  },
  {
    title: '부산바다체',
    description:
      '부산체를 기반으로 한 부산바다체는 부산의 바다를 모티브로 하여 디자인되었습니다.',
    url: 'https://tumblbug.com/busanbada/story',
    className: 'busan',
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
          font-family: '한화 R';
          font-style: 'normal';
          font-weight: 400;
          src: url('./02HanwhaR.ttf') format('ttf');
        }

        .hanwha * {
          font-family: '한화 R', sans-serif;
        }
      </style>
    `,
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
          src: url('./DankMono-Regular.otf') format('otf');
        }

        .dank-mono * {
          font-family: 'Dank Mono', monospace;
        }
      </style>
    `,
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
          src: url('./IntelOneMono-Medium.otf') format('otf');
        }

        .intel-one-mono * {
          font-family: 'Intel One Mono', monospace;
        }
      </style>
    `,
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
          src: url('./jihacheol.ttf') format('ttf');
        }

        .jihacheol * {
          font-family: '지하철', sans-serif;
        }
      </style>
    `,
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
  },
  {
    title: '고운바탕',
    description: '단정하고 고운 손글씨.',
    url: 'https://github.com/yangheeryu/Gowun-Batang',
    className: 'gowun-batang',
    tags: `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap" rel="stylesheet">

      <style>
        .gowun-batang * {
          font-family: 'Gowun Batang', serif;
        }
      </style>
    `,
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
  },
  {
    title: 'SUITE Variable',
    description: 'Large Straight! ㅎㅆㅂㅛㅠ',
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
  },
]

// shuffle function
const shuffle = (list) => {
  list.sort(() => Math.random() - 0.5)
}

// shuffle repositories
shuffle(repositories)

const outputEl = document.querySelector('#output')

repositories.forEach((repo) => {
  // const div = document.createElement('div')
  // div.innerHTML = `
  //   <a href="${repo.url}" target="_blank">
  //     <h2>${repo.title}</h2>
  //     <p>${repo.description}</p>
  //   </a>
  // `
  // outputEl.appendChild(div)
  const div = document.createElement('div')
  div.className = repo.className
  div.innerHTML = `
    <a href="${repo.url}" target="_blank">
      <h2>${repo.title}</h2>
      <p>${repo.description}</p>
    </a>
  `
  outputEl.appendChild(div)

  const head = document.querySelector('head')
  head.insertAdjacentHTML('beforeend', repo.tags)
})

// const setHeadingWeight = (weight) => {
//   // font-variation-settings: ""wght" 606;
//   document.documentElement.style.setProperty('--heading-weight', weight)
// }

// {
//   let weight = 900
//   let diff = -1
//   let pause = 0
//   setInterval(() => {
//     if (pause-- > 0) {
//       return
//     }
//     weight += diff
//     if (weight >= 1000) {
//       diff = -1
//       pause = 250
//     } else if (weight <= 100) {
//       diff = 1
//       pause = 250
//     }
//     setHeadingWeight(weight)
//   }, 10)
// }
