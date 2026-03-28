<script>
  const social_links = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/denyssa.e?igsh=MmR5YjNqbW42MXB0',
      handle: '@denyssa.e',
    },
    { label: 'Email', href: 'mailto:denyssa.model@gmail.com', handle: 'denyssa.model@gmail.com' },
  ]
</script>

<section id="contact" class="contact_section" aria-labelledby="contact_heading">
  <div class="contact_bg" aria-hidden="true"></div>

  <div class="contact_inner">
    <header class="contact_header">
      <p class="contact_kicker">Contact</p>
      <h2 id="contact_heading" class="contact_title">Let&apos;s work together</h2>
      <p class="contact_lead">
        Available for bookings and collaborations worldwide. For campaigns, press, and projects —
        reach out by email or social. I typically respond within a few business days.
      </p>
    </header>

    <div class="contact_details">
      <ul class="social_inline" style="margin-top: 0;">
        {#each social_links as s}
          <li>
            <a class="social_link" href={s.href} target="_blank" rel="noreferrer">
              <span class="social_label">{s.label}</span>
              <span class="social_handle">{s.handle}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  .contact_section {
    position: relative;
    padding: 3rem 1.25rem 2.5rem;
    overflow: hidden;
    color: var(--color-text);
  }

  .contact_bg {
    position: absolute;
    inset: 0;
    background: var(--color-bg);
    z-index: 0;
  }

  .contact_inner {
    position: relative;
    z-index: 1;
    max-width: var(--content-max);
    margin: 0 auto;
  }

  .contact_kicker {
    margin: 0 0 0.5rem;
    font-size: 0.56rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: rgba(249, 247, 242, 0.42);
  }

  .contact_title {
    margin: 0 0 0.75rem;
    font-family: var(--font-serif);
    font-size: clamp(1.4rem, 3.5vw, 2rem);
    font-weight: 500;
    color: var(--color-text);
  }

  .contact_lead {
    margin: 0 0 1.5rem;
    max-width: 32rem;
    font-size: 0.8rem;
    line-height: 1.52;
    color: rgba(249, 247, 242, 0.58);
  }

  .contact_details {
    max-width: 28rem;
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: none;
  }

  .detail_block {
    margin-bottom: 1.25rem;
  }

  .detail_label {
    margin: 0 0 0.35rem;
    font-size: 0.55rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(249, 247, 242, 0.45);
  }

  .detail_link {
    font-size: 0.86rem;
    font-weight: 500;
    color: #f0ebe3;
    border-bottom: 1px solid rgba(249, 247, 242, 0.28);
    padding-bottom: 2px;
    transition:
      color 0.25s ease,
      border-color 0.25s ease;
  }

  .detail_link:hover {
    color: var(--color-text-bright);
    border-bottom-color: rgba(249, 247, 242, 0.5);
  }

  .social_inline {
    list-style: none;
    margin: 1.5rem 0 0;
    padding: 0;
  }

  .social_inline li + li {
    margin-top: 0.85rem;
  }

  .social_link {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    color: inherit;
    transition: opacity 0.25s ease;
  }

  .social_link:hover {
    opacity: 0.92;
  }

  .social_label {
    font-size: 0.55rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(249, 247, 242, 0.42);
  }

  .social_handle {
    font-size: 0.78rem;
    color: rgba(249, 247, 242, 0.92);
  }

  .social_link:hover .social_handle {
    color: var(--color-text-bright);
  }
</style>
