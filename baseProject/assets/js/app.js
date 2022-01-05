// 配列操作、　オブジェクト操作、　DOM操作
// Object: {key: value}
// 省略記法

const api = {
  'oowada': {
    name: 'naoki',
    sex: 'man',
    food: () => {
      //これがメソッド
    },
    height: 180
  },
  'nagashima': {
    name: 'yuto',
    sex: 'man',
    food: 'ドリトス',
    height: 174
  },
}

const array = ['owada', 'yoshida', 'sakadume', 'nagashima', 'hayashi', 'pirouchi']

// console.log({api}, '省略記法だよ')

const handler = document.getElementById('handler')
const target = document.getElementById('target')
let isToggleDisplay = false
// handlerを押したら、targetがゆっくり出現する
handler.addEventListener('click', function(event) {
  isToggleDisplay = !isToggleDisplay

  if(isToggleDisplay) {
    target.classList.add("isOpen")
  } else {
    target.classList.remove("isOpen")
  }
})


console.log({handler, target})
