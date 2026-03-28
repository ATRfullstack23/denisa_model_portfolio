<script>
  import { portfolio_items, category_labels } from '../data/portfolio_data.js'

  let active_category = 'all'

  let visible_items = portfolio_items

  function set_category(cat) {
    active_category = cat
    if (cat === 'all') {
      visible_items = portfolio_items
    } else {
      visible_items = portfolio_items.filter((item) => item.category === cat)
    }
  }

  const filter_keys = ['all', 'collaboration', 'brand_shoots']

  /** @type {{ id: string, category: string, title: string, description: string, image: string } | null} */
  let selected_work = null

  function open_work_modal(item) {
    selected_work = item
  }

  function close_work_modal() {
    selected_work = null
  }

  function on_modal_backdrop_click(e) {
    if (e.target === e.currentTarget) close_work_modal()
  }

  function on_window_keydown(e) {
    if (e.key === 'Escape' && selected_work) close_work_modal()
  }

  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = selected_work ? 'hidden' : ''
  }
</script>

<svelte:window on:keydown={on_window_keydown} />

<section id="portfolio" class="portfolio_section" aria-labelledby="portfolio_heading">
  <div class="portfolio_inner">
    <header class="portfolio_header">
      <p class="portfolio_kicker">Portfolio</p>
      <h2 id="portfolio_heading" class="portfolio_title">Selected work</h2>
      <p class="portfolio_intro">
        Campaigns and brand stories — a visual archive of recent collaborations.
      </p>
    </header>

    <div class="filter_row" role="tablist" aria-label="Filter by category">
      {#each filter_keys as key}
        <button
          type="button"
          class="filter_btn"
          class:active={active_category === key}
          on:click={() => set_category(key)}
          role="tab"
          aria-selected={active_category === key}
        >
          {category_labels[key]}
        </button>
      {/each}
    </div>

    <div class="portfolio_grid">
      {#each visible_items as item}
        <article class="portfolio_card">
          <div class="card_media">
            <div class="card_image_wrap">
              <img src={item.image} alt="" width="600" height="750" loading="lazy" />
              <div class="card_overlay">
                <span class="card_tag">{category_labels[item.category]}</span>
                <button
                  type="button"
                  class="card_cta_btn"
                  aria-label={'View full — ' + item.title}
                  on:click={() => open_work_modal(item)}
                >
                  View full
                </button>
              </div>
            </div>
          </div>
          <div class="card_body">
            <p class="card_meta">
              {category_labels[item.category]}
              {#if item.photographer}
                <span class="card_photographer"> — <a href={`https://www.instagram.com/${item.photographer.replace('@', '')}/`} target="_blank" rel="noopener noreferrer">{item.photographer}</a></span>
              {/if}
            </p>
            <h3 class="card_title">{item.title}</h3>
            <p class="card_desc">{item.description}</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

{#if selected_work}
  <div class="work_modal_backdrop" role="presentation" on:click={on_modal_backdrop_click}>
    <div
      class="work_modal_panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work_modal_title"
      tabindex="-1"
    >
      <button
        type="button"
        class="work_modal_close"
        aria-label="Close"
        on:click={close_work_modal}
      >
        <span aria-hidden="true">×</span>
      </button>
      <div class="work_modal_layout">
        <div class="work_modal_image_wrap">
          <img
            src={selected_work.image}
            alt={selected_work.title}
            width="900"
            height="1125"
            loading="eager"
          />
        </div>
        <div class="work_modal_caption">
          <p class="work_modal_meta">
            {category_labels[selected_work.category]}
            {#if selected_work.photographer}
              <span class="modal_photo_credit"> — <a href={`https://www.instagram.com/${selected_work.photographer.replace('@', '')}/`} target="_blank" rel="noopener noreferrer">{selected_work.photographer}</a></span>
            {/if}
          </p>
          <h3 id="work_modal_title" class="work_modal_title">{selected_work.title}</h3>
          <p class="work_modal_desc">{selected_work.description}</p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .portfolio_section {
    padding: 3rem 1.25rem 3rem;
    background: var(--color-bg);
  }

  .portfolio_inner {
    max-width: var(--content-max);
    margin: 0 auto;
  }

  @media (max-width: 699px) {
    .portfolio_section {
      padding: 3rem 0 3rem;
    }

    .portfolio_inner {
      padding: 0 1.25rem;
    }

    /* Full-bleed images: cancel inner inset only for the grid */
    .portfolio_grid {
      margin-left: -1.25rem;
      margin-right: -1.25rem;
      width: calc(100% + 2.5rem);
    }

    .card_image_wrap {
      border-radius: 0;
    }

    .card_body {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }

  .portfolio_kicker {
    margin: 0 0 0.5rem;
    font-size: 0.64rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .portfolio_title {
    margin: 0 0 0.75rem;
    font-family: var(--font-serif);
    font-size: clamp(1.65rem, 4.2vw, 2.35rem);
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--color-text);
  }

  .portfolio_intro {
    margin: 0 0 2.25rem;
    max-width: 32rem;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-muted);
  }

  .filter_row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .filter_btn {
    padding: 0.48rem 0.85rem;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background: var(--color-glass);
    transition:
      background 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease,
      transform 0.25s ease;
  }

  .filter_btn:hover {
    color: var(--color-text);
    border-color: var(--color-border-medium);
    transform: translateY(-1px);
  }

  .filter_btn.active {
    color: rgba(244, 238, 236, 0.96);
    background: var(--color-accent-fill);
    border-color: var(--color-accent-outline);
  }

  .filter_btn.active:hover {
    background: var(--color-accent-fill-hover);
    border-color: rgba(170, 88, 98, 0.55);
  }

  .portfolio_grid {
    display: grid;
    gap: 2.5rem;
  }

  .portfolio_card {
    margin: 0;
  }

  .card_media {
    display: block;
    width: 100%;
  }

  .card_image_wrap {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
  }

  .card_image_wrap img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    transform: scale(1.001);
    transition:
      transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      filter 0.5s ease;
  }

  .card_overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 1.25rem;
    background: linear-gradient(
      to top,
      rgba(26, 26, 26, 0.55),
      rgba(26, 26, 26, 0.08) 55%,
      transparent
    );
    opacity: 0;
    backdrop-filter: blur(0);
    transition:
      opacity 0.45s ease,
      backdrop-filter 0.45s ease;
  }

  .card_media:hover .card_image_wrap img,
  .card_media:focus-within .card_image_wrap img {
    transform: scale(1.06);
    filter: brightness(0.92);
  }

  .card_media:hover .card_overlay,
  .card_media:focus-within .card_overlay {
    opacity: 1;
    backdrop-filter: blur(2px);
  }

  .card_tag {
    font-size: 0.6rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(249, 247, 242, 0.9);
  }
  
  .card_photographer {
    text-transform: lowercase;
    font-size: 0.62em;
  }

  .card_photographer a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .card_photographer a:hover {
    color: var(--color-text);
  }

  .modal_photo_credit {
    text-transform: lowercase;
    font-size: 0.68em;
  }

  .modal_photo_credit a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .modal_photo_credit a:hover {
    color: var(--color-text);
  }

  .card_cta_btn {
    margin-top: 0.5rem;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
    font-size: 0.65rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #f9f7f2;
    border-bottom: 1px solid rgba(249, 247, 242, 0.5);
    padding-bottom: 2px;
    text-align: left;
  }

  .card_cta_btn:hover,
  .card_cta_btn:focus-visible {
    color: var(--color-text-bright);
    border-bottom-color: rgba(249, 247, 242, 0.85);
    outline: none;
  }

  .card_cta_btn:focus-visible {
    box-shadow: 0 0 0 2px rgba(249, 247, 242, 0.45);
    border-radius: 2px;
  }

  .card_body {
    margin-top: 1.25rem;
  }

  .card_meta {
    margin: 0 0 0.35rem;
    font-size: 0.58rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .card_title {
    margin: 0 0 0.5rem;
    font-family: var(--font-serif);
    font-size: 1.28rem;
    font-weight: 500;
    color: var(--color-text);
  }

  .card_desc {
    margin: 0;
    font-size: 0.84rem;
    line-height: 1.5;
    color: var(--color-text-muted);
    max-width: 36rem;
  }

  @media (min-width: 700px) {
    .portfolio_grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .portfolio_grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .work_modal_backdrop {
    position: fixed;
    inset: 0;
    z-index: 1100;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100dvh;
    padding: 1.25rem 1rem 1.5rem;
    box-sizing: border-box;
    background: rgba(26, 26, 26, 0.58);
    backdrop-filter: blur(4px);
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .work_modal_panel {
    --modal_image_max_h: min(82dvh, 800px);
    position: relative;
    width: 100%;
    max-width: min(920px, 100%);
    margin: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-lg);
    background: transparent;
    box-shadow: none;
    overflow: visible;
  }

  .work_modal_close {
    position: absolute;
    top: 0.65rem;
    right: 0.65rem;
    z-index: 3;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: rgba(26, 26, 26, 0.55);
    color: #f9f7f2;
    font-size: 1.5rem;
    line-height: 1;
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  .work_modal_close:hover,
  .work_modal_close:focus-visible {
    background: rgba(26, 26, 26, 0.78);
    color: var(--color-text-bright);
  }

  .work_modal_layout {
    position: relative;
    width: 100%;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: transparent;
  }

  .work_modal_image_wrap {
    position: relative;
    width: 100%;
    min-height: 0;
    max-height: var(--modal_image_max_h);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .work_modal_image_wrap img {
    max-width: 100%;
    max-height: var(--modal_image_max_h);
    width: auto;
    height: auto;
    object-fit: contain;
    object-position: center;
    display: block;
    border-radius: var(--radius-lg);
  }

  .work_modal_caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    padding: 2rem 1.25rem 1.1rem;
    background: linear-gradient(
      to top,
      rgba(10, 10, 10, 0.94) 0%,
      rgba(10, 10, 10, 0.72) 48%,
      transparent 100%
    );
  }

  @media (min-width: 900px) {
    .work_modal_panel {
      --modal_image_max_h: min(86dvh, 820px);
      max-width: min(960px, calc(100vw - 2rem));
    }

    .work_modal_layout {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      max-height: min(88dvh, 860px);
      min-height: 0;
      overflow: hidden;
      background: var(--color-bg);
      box-shadow: var(--shadow-soft);
    }

    .work_modal_image_wrap {
      flex: 1 1 58%;
      min-width: 0;
      max-height: none;
      align-self: stretch;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.35rem 0 0.35rem 0.35rem;
    }

    .work_modal_image_wrap img {
      max-height: min(88dvh, 860px);
      width: auto;
      height: auto;
      border-radius: var(--radius-md);
    }

    .work_modal_caption {
      position: relative;
      flex: 0 0 min(300px, 34vw);
      max-width: 340px;
      align-self: stretch;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem 1.35rem 1.5rem 1.25rem;
      background: var(--color-bg);
      border-left: 1px solid var(--color-border);
    }

    .work_modal_close {
      left: 0.65rem;
      right: auto;
    }
  }

  .work_modal_meta {
    margin: 0 0 0.35rem;
    font-size: 0.58rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .work_modal_title {
    margin: 0 0 0.45rem;
    font-family: var(--font-serif);
    font-size: clamp(1.15rem, 2.6vw, 1.45rem);
    font-weight: 500;
    color: var(--color-text);
  }

  .work_modal_desc {
    margin: 0;
    font-size: 0.84rem;
    color: var(--color-text-muted);
    line-height: 1.5;
    max-width: 40rem;
  }
</style>
