const wishlist = [
  { name: "Livre Hacke-moi si tu peux", url: "https://amzn.eu/d/7fb3pbo", img: "Hacksitupeux.jpg" },
  { name: "Livre Cybersécurité", url: "https://amzn.eu/d/jkslDxE", img: "cybersec.jpg" },
  { name: "Raspberry Pi 5", url: "https://amzn.eu/d/5qRqL9D", img: "raspberry pi 5.jpg" },
  { name: "Raspberry Pi 4", url: "https://urlr.me/u8gWnE", img: "raspberry pi 4.jpg" },
  { name: "Starter kit Arduino", url: "https://amzn.eu/d/a3klAf6", img: "arduino.jpg" },
  { name: "Switch Ethernet", url: "https://amzn.eu/d/cWVvYOt", img: "netgear.jpg" }
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
const birthday = new Date("2025-06-25T00:00:00").getTime()

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