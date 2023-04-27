<script>
  import '../app.css'
  import Footer from '../components/Footer.svelte'
  import Header from '../components/Header.svelte'
</script>

<div class="app">
  <header>
    <Header />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</div>
