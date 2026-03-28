<script>
  import { onMount, tick } from 'svelte'

  import landing_mobile_url from '../assets/denisa_img/landing.mp4'
  import landing_pc_url from '../assets/denisa_img/landing_pc.mp4'

  const model_name = 'Denisa'
  const tagline = 'Elegance, expressiveness, and visual excellence.'
  const hero_handle = '@denyssa.e'
  const hero_keywords = 'ITALY · GLAMOUR · FINE ART'

  const pc_media_query = '(min-width: 900px)'

  let hero_video_el = null
  let video_src = landing_mobile_url

  async function sync_hero_video() {
    if (typeof window === 'undefined') return
    const next_src = window.matchMedia(pc_media_query).matches ? landing_pc_url : landing_mobile_url
    if (next_src !== video_src) {
      video_src = next_src
      await tick()
    }
    if (hero_video_el) {
      hero_video_el.load()
      const play_promise = hero_video_el.play()
      if (play_promise !== undefined) {
        play_promise.catch(() => {})
      }
    }
  }

  onMount(() => {
    sync_hero_video()
    const mq = window.matchMedia(pc_media_query)
    const on_change = () => {
      sync_hero_video()
    }
    mq.addEventListener('change', on_change)
    return () => mq.removeEventListener('change', on_change)
  })
</script>

<section id="home" class="hero_section" aria-label="Introduction">
  <div class="hero_media" aria-hidden="true">
    <video
      bind:this={hero_video_el}
      class="hero_media_video"
      src={video_src}
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    ></video>
  </div>
  <div class="hero_overlay"></div>

  <div class="hero_shell">
    <div class="hero_copy">
      <h1 class="hero_title">{model_name}</h1>
      <p class="hero_tagline">{tagline}</p>
      <a href="#portfolio" class="hero_cta_ghost">View gallery</a>
    </div>

    <div class="hero_footer_strip">
      <span class="hero_handle_text">{hero_handle}</span>
      <span class="hero_keywords_text">{hero_keywords}</span>
    </div>
  </div>
</section>

<style>
  .hero_section {
    position: relative;
    isolation: isolate;
    min-height: 100vh;
    min-height: 100dvh;
    color: #f5f3f0;
    overflow: hidden;
  }

  .hero_media {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero_media_video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    transform: scale(1.02);
  }

  .hero_overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(ellipse 75% 55% at 85% 15%, rgba(90, 28, 38, 0.14), transparent 52%),
      linear-gradient(180deg, rgba(6, 6, 8, 0.4) 0%, rgba(6, 6, 8, 0.22) 38%, rgba(4, 4, 6, 0.58) 100%),
      radial-gradient(ellipse 90% 70% at 50% 100%, rgba(0, 0, 0, 0.55) 0%, transparent 55%);
  }

  .hero_shell {
    position: relative;
    z-index: 2;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: var(--content-max);
    margin: 0 auto;
    width: 100%;
    padding: calc(var(--nav-height) + 1.25rem) 1.35rem calc(1.25rem + env(safe-area-inset-bottom, 0));
    box-sizing: border-box;
  }

  .hero_copy {
    padding-bottom: 0.5rem;
  }

  .hero_title {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(3rem, 12vw, 5rem);
    font-weight: 500;
    letter-spacing: 0.06em;
    line-height: 1.02;
    color: #f5f2ee;
    text-transform: capitalize;
  }

  .hero_tagline {
    margin: 1rem 0 0;
    max-width: 20rem;
    font-family: var(--font-serif);
    font-size: clamp(1.05rem, 3.8vw, 1.35rem);
    font-style: italic;
    font-weight: 400;
    line-height: 1.45;
    color: rgba(240, 235, 230, 0.92);
  }

  .hero_cta_ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.75rem;
    padding: 0.85rem 1.75rem;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--color-text-bright);
    border: 1px solid rgba(255, 255, 255, 0.85);
    border-radius: 2px;
    background: transparent;
    transition:
      background 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease;
  }

  .hero_cta_ghost:hover {
    background: rgba(107, 42, 50, 0.18);
    border-color: rgba(200, 90, 102, 0.55);
  }

  .hero_footer_strip {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.75rem 1rem;
    margin-top: 2.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .hero_handle_text {
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: rgba(240, 235, 230, 0.78);
  }

  .hero_keywords_text {
    font-family: var(--font-serif);
    font-size: 0.62rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(240, 235, 230, 0.82);
    text-align: right;
  }

  @media (min-width: 768px) {
    .hero_shell {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .hero_title {
      font-size: clamp(3.5rem, 6vw, 4.5rem);
    }

    .hero_tagline {
      max-width: 28rem;
    }
  }
</style>
