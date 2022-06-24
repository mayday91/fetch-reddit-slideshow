const form = document.querySelector('#form')

const imageArrayURL = []

const container = document.getElementById('container')

const carousel = document.getElementById('carousel')

const input = document.querySelector('#input')


const onShowMemeSuccess = (meme) => {
  console.log(imageArrayURL)
  for (let i=0; i < 6; i++){
    imageArrayURL[i] = meme.data.children[i].data.url
  }
  let i = 1
  imageArrayURL.forEach(imageURL => {
    document.getElementById(`slide${i}`).setAttribute('src', `${imageURL}`)
    i++
  })
}

const onShowMemeFailure = () => {
  console.log('Show Image Failure')
}
const onGetMemeFailure = () => {
  console.log('NOT WORKING YET!')
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchValue = input.value.replace(/\s/g, '+')
  container.style.display = 'none'
  carousel.style.display = 'flex'
  
  fetch(`https://www.reddit.com/search.json?q=${searchValue}&sort=new+nsfw:no+type:png+type:jpg`)
  .then(res => res.json())
  .then(onShowMemeSuccess)
  .catch(onShowMemeFailure)
})

const reset = document.getElementById('reset')
reset.addEventListener('click', function (){
    container.style.display = 'flex'
    carousel.style.display = 'none'
})