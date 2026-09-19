import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header">
    <h1>My Profile</h1>
  </header>

  <main class="container">
    <section class="card" id="card">
      <img src="/profile.jpg" alt="Tomiris" class="avatar">

      <h2>Tomiris Oraz</h2>

      <p>
        I am an aspiring web developer.
        I enjoy learning HTML, CSS and JavaScript.
        My goal is to become a frontend developer.
      </p>

      <div class="links">
        <a href="mailto:tomiris@example.com">Email</a>
        <a href="https://github.com/Tomiris-lab1112">GitHub</a>
      </div>

      <button id="likeBtn">🤍 Like</button>
    </section>
  </main>

  <footer class="footer">
    2026 Tomiris Oraz
  </footer>
`

const button = document.querySelector('#likeBtn')
const card = document.querySelector('#card')

button.addEventListener('click', () => {
  card.classList.toggle('liked')

  if (button.textContent === '🤍 Like') {
    button.textContent = '❤️ Liked'
  } else {
    button.textContent = '🤍 Like'
  }
})