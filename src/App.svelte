<script>
  import Navbar from './lib/Navbar.svelte'
  import Hero from './lib/Hero.svelte'
  import About from './lib/About.svelte'
  import Portfolio from './lib/Portfolio.svelte'
  import Experience from './lib/Experience.svelte'
  import FollowGallery from './lib/FollowGallery.svelte'
  import Contact from './lib/Contact.svelte'
  import Footer from './lib/Footer.svelte'
</script>

<div class="app_shell">
  <Navbar />
  <main class="page_main">
    <Hero />
    <About />
    <Portfolio />
    <Experience />
    <FollowGallery />
    <Contact />
  </main>
  <Footer />
</div>

<style>
  .app_shell {
    min-height: 100vh;
  }

  .page_main {
    display: block;
  }
</style>
