<script>
  function scroll_to_section(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const footer_nav = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'follow', label: 'Follow' },
    { id: 'contact', label: 'Contact' },
  ]

  const connect_links = [
    { label: 'Instagram', href: 'https://www.instagram.com/denyssa.e?igsh=MmR5YjNqbW42MXB0' },
    { label: 'Privacy', href: '#' },
    { label: 'Contact', href: '#contact' },
  ]

  const current_year = new Date().getFullYear()
</script>

<footer class="site_footer">
  <div class="footer_inner">
    <div class="footer_col footer_brand">
      <p class="footer_logo">Denisa</p>
      <p class="footer_blurb">
        Romanian photomodel based in Italy — glamour, boudoir, and nude art. Bookings worldwide.
      </p>
    </div>

    <div class="footer_col">
      <p class="footer_heading">Navigate</p>
      <ul class="footer_links">
        {#each footer_nav as item}
          <li>
            <button type="button" class="footer_link_btn" on:click={() => scroll_to_section(item.id)}>
              {item.label}
            </button>
          </li>
        {/each}
      </ul>
    </div>

    <div class="footer_col">
      <p class="footer_heading">Connect</p>
      <ul class="footer_links">
        {#each connect_links as c}
          <li>
            <a class="footer_anchor" href={c.href}>{c.label}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="footer_col footer_social">
      <p class="footer_heading">Follow</p>
      <div class="social_icons">
        <a
          class="icon_link"
          href="https://www.instagram.com/denyssa.e?igsh=MmR5YjNqbW42MXB0"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
              stroke="currentColor"
              stroke-width="1.25"
            />
            <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-width="1.25" />
            <circle cx="17" cy="7" r="1" fill="currentColor" />
          </svg>
        </a>
        <a class="icon_link" href="mailto:denyssa.model@gmail.com" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6h16v12H4V6zm0 0l8 6 8-6"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="footer_bottom">
    <p class="footer_copy">&copy; {current_year} Denisa. All rights reserved.</p>
  </div>
</footer>

<style>
  .site_footer {
    padding: 1.75rem 1.25rem 1.5rem;
    background: var(--color-bg);
    border-top: none;
    color: var(--color-text);
  }

  .footer_inner {
    max-width: var(--content-max);
    margin: 0 auto;
    display: grid;
    gap: 2.5rem;
  }

  .footer_logo {
    margin: 0 0 0.75rem;
    font-family: var(--font-serif);
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-text);
  }

  .footer_blurb {
    margin: 0;
    max-width: 22rem;
    font-size: 0.82rem;
    color: rgba(249, 247, 242, 0.58);
    line-height: 1.58;
  }

  .footer_heading {
    margin: 0 0 1rem;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(249, 247, 242, 0.42);
  }

  .footer_links {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer_links li + li {
    margin-top: 0.5rem;
  }

  .footer_link_btn {
    border: none;
    background: none;
    padding: 0;
    font-size: 0.82rem;
    color: rgba(249, 247, 242, 0.88);
    text-align: left;
    transition: color 0.25s ease;
  }

  .footer_link_btn:hover {
    color: var(--color-text-bright);
  }

  .footer_anchor {
    font-size: 0.82rem;
    color: rgba(249, 247, 242, 0.88);
    border-bottom: 1px solid transparent;
    transition:
      color 0.25s ease,
      border-color 0.25s ease;
  }

  .footer_anchor:hover {
    color: var(--color-text-bright);
    border-bottom-color: rgba(249, 247, 242, 0.35);
  }

  .social_icons {
    display: flex;
    gap: 0.75rem;
  }

  .icon_link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid rgba(249, 247, 242, 0.14);
    color: rgba(249, 247, 242, 0.92);
    background: rgba(0, 0, 0, 0.35);
    transition:
      transform 0.3s ease,
      border-color 0.25s ease,
      background 0.25s ease;
  }

  .icon_link:hover {
    transform: translateY(-2px);
    background: rgba(0, 0, 0, 0.55);
    border-color: rgba(249, 247, 242, 0.22);
  }

  .footer_bottom {
    max-width: var(--content-max);
    margin: 1.75rem auto 0;
    padding-top: 1.25rem;
    border-top: none;
    text-align: center;
  }

  .footer_copy {
    margin: 0;
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    color: rgba(249, 247, 242, 0.45);
  }

  @media (min-width: 768px) {
    .footer_inner {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .footer_brand {
      grid-column: span 2;
    }
  }

  @media (min-width: 1000px) {
    .footer_inner {
      grid-template-columns: 1.4fr 1fr 1fr 0.9fr;
      align-items: start;
    }

    .footer_brand {
      grid-column: auto;
    }
  }
</style>
