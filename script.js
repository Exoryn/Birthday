const wishlist = [
  { name: "Manette Xbox Series X", url: "https://amzn.to/...", img: "https://via.placeholder.com/150" },
  { name: "Livre Cybersécurité", url: "https://amzn.to/...", img: "https://via.placeholder.com/150" },
  { name: "Raspberry Pi 5", url: "https://amzn.to/...", img: "https://via.placeholder.com/150" }
]

const container = document.getElementById("wishlist")

wishlist.forEach(item => {
  const card = document.createElement("div")
  card.className = "card"
  card.innerHTML = `
    <h3>${item.name}</h3>
    <img src="${item.img}" alt="${item.name}" width="100%">
    <a href="${item.url}" target="_blank">
      <button>Je le veux trop !</button>
    </a>
  `
  container.appendChild(card)
})

// Countdown
const countdown = document.getElementById("countdown")
const birthday = new Date("2025-06-29T00:00:00").getTime()

const interval = setInterval(() => {
  const now = new Date().getTime()
  const distance = birthday - now

  if (distance < 0) {
    clearInterval(interval)
    countdown.innerHTML = "🎉 C'est mon anniversaire ! 🎉"
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  countdown.innerHTML = `⏳ ${days}j ${hours}h ${minutes}m ${seconds}s`
}, 1000)