<script>
  import { onMount } from 'svelte'

  let use_light_nav = false
  let mobile_open = false

  function scroll_to_section(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    mobile_open = false
  }

  function toggle_mobile() {
    mobile_open = !mobile_open
  }

  onMount(() => {
    const home = document.getElementById('home')
    let io = null
    if (home) {
      io = new IntersectionObserver(
        (entries) => {
          const visible = entries[0].isIntersecting
          use_light_nav = !visible
        },
        { threshold: 0.08, rootMargin: '-52px 0px 0px 0px' }
      )
      io.observe(home)
    }

    return () => {
      if (io) io.disconnect()
    }
  })

  const nav_links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'follow', label: 'Follow' },
    { id: 'contact', label: 'Contact' },
  ]
</script>

<header class="site_nav" class:nav_light={use_light_nav}>
  <div class="nav_inner">
    <button
      type="button"
      class="nav_menu_btn"
      class:nav_menu_btn_framed={!use_light_nav}
      aria-label="Toggle menu"
      on:click={toggle_mobile}
    >
      <span class="nav_menu_line"></span>
      <span class="nav_menu_line"></span>
      <span class="nav_menu_line"></span>
    </button>

    <button type="button" class="nav_brand" on:click={() => scroll_to_section('home')}>
      <span class="nav_brand_text">DENISA</span>
    </button>

    <nav class="nav_desktop" aria-label="Primary">
      {#each nav_links as link}
        <button
          type="button"
          class="nav_link"
          on:click={() => scroll_to_section(link.id)}
        >
          {link.label}
        </button>
      {/each}
    </nav>

    <button type="button" class="nav_icon_btn" aria-label="Follow" on:click={() => scroll_to_section('follow')}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" aria-hidden="true">
        <path d="M6 7h12M6 12h12M6 17h8" />
      </svg>
    </button>
  </div>

  {#if mobile_open}
    <div class="nav_mobile_panel" role="dialog" aria-modal="true">
      {#each nav_links as link}
        <button
          type="button"
          class="nav_mobile_link"
          on:click={() => scroll_to_section(link.id)}
        >
          {link.label}
        </button>
      {/each}
    </div>
  {/if}
</header>

<style>
  .site_nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.25rem;
    background: transparent;
    color: var(--color-text-bright);
    transition:
      background 0.45s ease,
      box-shadow 0.45s ease,
      color 0.35s ease,
      backdrop-filter 0.45s ease;
  }

  .site_nav.nav_light {
    background: rgba(10, 10, 10, 0.62);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 var(--color-border);
    color: var(--color-text);
  }

  .nav_inner {
    width: 100%;
    max-width: var(--content-max);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .nav_menu_btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    min-width: 44px;
    height: 44px;
    padding: 0 10px;
    border: none;
    background: transparent;
    color: inherit;
  }

  .nav_menu_btn_framed {
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.15);
  }

  .site_nav.nav_light .nav_menu_btn_framed {
    border-color: rgba(255, 255, 255, 0.18);
    background: rgba(0, 0, 0, 0.2);
  }

  .nav_menu_line {
    display: block;
    width: 20px;
    height: 1.5px;
    background: currentColor;
    border-radius: 1px;
  }

  .nav_brand {
    border: none;
    background: none;
    padding: 0.25rem 0.5rem;
    color: inherit;
    transition: opacity 0.3s ease;
  }

  .nav_brand_text {
    font-family: var(--font-serif);
    font-size: clamp(0.72rem, 1.8vw, 0.82rem);
    font-weight: 500;
    letter-spacing: 0.42em;
    text-transform: uppercase;
    color: inherit;
  }

  .nav_desktop {
    display: none;
    align-items: center;
    gap: 0.25rem;
  }

  .nav_link {
    border: none;
    background: transparent;
    padding: 0.5rem 0.85rem;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: inherit;
    opacity: 0.85;
    transition: opacity 0.25s ease;
  }

  .site_nav:not(.nav_light) .nav_link {
    color: rgba(240, 235, 230, 0.9);
  }

  .site_nav.nav_light .nav_link {
    color: var(--color-text-muted);
  }

  .nav_link:hover {
    opacity: 1;
  }

  .site_nav.nav_light .nav_link:hover {
    color: var(--color-text);
  }

  .nav_icon_btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: inherit;
    opacity: 0.9;
  }

  @media (max-width: 899px) {
    .site_nav:not(.nav_light) {
      background: transparent;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      box-shadow: none;
    }

    .site_nav:not(.nav_light) .nav_brand {
      opacity: 0;
      pointer-events: none;
    }

    .site_nav.nav_light {
      background: rgba(8, 8, 8, 0.68);
      backdrop-filter: blur(22px);
      -webkit-backdrop-filter: blur(22px);
      color: var(--color-text);
      box-shadow: 0 1px 0 var(--color-border);
    }

    .site_nav:not(.nav_light) .nav_link {
      color: var(--color-text-muted);
    }

    .site_nav:not(.nav_light) .nav_link:hover {
      color: var(--color-text);
    }

    .nav_menu_btn_framed {
      border: 1px solid rgba(255, 255, 255, 0.22);
      background: rgba(0, 0, 0, 0.22);
    }

    .nav_icon_btn {
      display: none;
    }
  }

  .nav_mobile_panel {
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    padding: 1rem 1.25rem 1.5rem;
    background: rgba(12, 12, 12, 0.78);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    animation: fadeSlide 0.35s ease;
  }

  @keyframes fadeSlide {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav_mobile_link {
    text-align: left;
    border: none;
    background: transparent;
    padding: 0.75rem 0;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text);
    border-bottom: 1px solid var(--color-border);
  }

  @media (min-width: 900px) {
    .nav_menu_btn {
      display: none;
    }

    .nav_desktop {
      display: flex;
    }

    .nav_mobile_panel {
      display: none;
    }

    .nav_icon_btn {
      display: flex;
    }
  }
</style>
