<script>
  import { follow_gallery_images, follow_instagram_url, follow_handle } from '../data/follow_gallery_data.js'
</script>

<section id="follow" class="follow_section" aria-labelledby="follow_heading">
  <div class="follow_inner">
    <header class="follow_header">
      <h2 id="follow_heading" class="follow_title">FOLLOW</h2>
      <p class="follow_handle">@{follow_handle}</p>
      <a
        class="follow_btn"
        href={follow_instagram_url}
        target="_blank"
        rel="noreferrer noopener"
      >
        INSTAGRAM
      </a>
    </header>

    <div class="follow_grid" role="list">
      {#each follow_gallery_images as img}
        <figure class="follow_cell" role="listitem">
          <div class="follow_img_wrap">
            <img src={img.src} alt={img.alt} width="400" height="560" loading="lazy" decoding="async" />
          </div>
        </figure>
      {/each}
    </div>
  </div>
</section>

<style>
  .follow_section {
    --follow-bg: var(--color-bg);
    --follow-text: var(--color-text);
    --follow-muted: var(--color-text-muted);

    padding: 2rem 1.25rem 2.75rem;
    background: var(--follow-bg);
  }

  .follow_inner {
    max-width: 440px;
    margin: 0 auto;
  }

  .follow_header {
    margin-bottom: 1.25rem;
    text-align: left;
  }

  .follow_title {
    margin: 0;
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 10vw, 3.75rem);
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--follow-text);
    line-height: 1;
  }

  .follow_handle {
    margin: 0.85rem 0 1.25rem;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    font-weight: 400;
    color: var(--follow-muted);
  }

  .follow_btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 11rem;
    padding: 0.75rem 1.75rem;
    font-family: var(--font-sans);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(244, 238, 236, 0.95);
    background: var(--color-accent-fill);
    border: 1px solid var(--color-accent-outline);
    border-radius: 0;
    box-shadow: none;
    transition:
      background 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease;
  }

  .follow_btn:hover {
    background: var(--color-accent-fill-hover);
    border-color: rgba(170, 88, 98, 0.55);
    transform: translateY(-1px);
  }

  .follow_btn:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
  }

  .follow_grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .follow_cell {
    margin: 0;
    padding: 0;
  }

  .follow_img_wrap {
    position: relative;
    overflow: hidden;
    background: var(--color-surface);
    aspect-ratio: 3 / 4;
  }

  .follow_img_wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.001);
    transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .follow_cell:hover .follow_img_wrap img {
    transform: scale(1.04);
  }

  @media (min-width: 600px) {
    .follow_inner {
      max-width: 480px;
    }
  }

  @media (min-width: 900px) {
    .follow_inner {
      max-width: 760px;
      padding-left: 0;
      padding-right: 0;
    }

    .follow_grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.85rem 1rem;
    }
  }
</style>
