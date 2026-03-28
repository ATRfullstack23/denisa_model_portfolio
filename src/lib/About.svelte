<script>
  import about_image from '../assets/denisa_img/ab.jpeg'

  const genre_pills = ['Glamour', 'Boudoir', 'Nude Art']

  const language_pills = ['Italian', 'English', 'Romanian']

  const measurement_details = [
    { label: 'Hair', value: 'Dark brown' },
    { label: 'Eyes', value: 'Dark brown' },
    { label: 'Skin', value: 'White, fair olive' },
    { label: 'Height', value: '170 cm' },
    { label: 'Chest', value: '95 cm' },
    { label: 'Waist', value: '70 cm' },
    { label: 'Hips', value: '95 cm' },
    { label: 'Shoe', value: '40 EU · 9 US · 7 UK' },
  ]
</script>

<section id="about" class="about_section" aria-labelledby="about_heading">
  <div class="about_bg" aria-hidden="true"></div>

  <div class="about_inner">
    <div class="about_visual">
      <div class="about_image_wrap">
        <img
          src={about_image}
          alt="Denisa — portrait"
          width="560"
          height="700"
          loading="lazy"
        />
      </div>
      <p class="about_photographer">PC: <a href="https://www.instagram.com/andres_borella/" target="_blank" rel="noopener noreferrer">@andres_borella</a></p>
    </div>

    <div class="about_content">
      <p class="about_kicker">About</p>
      <h2 id="about_heading" class="about_title">Denisa</h2>

      <div class="about_prose">
        <p class="about_paragraph">
          I&apos;m a professional Romanian photomodel living in Italy. I started modeling at age 19,
          driven by a deep passion for photography and a commitment to visual excellence. My approach
          focuses on bringing a unique blend of elegance, expressiveness, and sensuality to every
          project.
        </p>
      </div>

      <h3 class="about_subheading">Genres</h3>
      <ul class="about_pills">
        {#each genre_pills as item}
          <li>{item}</li>
        {/each}
      </ul>
      <p class="about_note">
        I specialize in Glamour, Boudoir, and Nude Art, and I am open to exploring other genres
        within the artistic scope of Nude Art.
      </p>

      <h3 class="about_subheading">Video &amp; presence</h3>
      <p class="about_paragraph">
        In addition to photography, I have experience in on-camera speaking roles for corporate
        videos. I am fully comfortable and confident behind the camera, making me available for both
        photo and video productions.
      </p>

      <h3 class="about_subheading">Bookings</h3>
      <p class="about_paragraph about_booking">
        I am available for bookings and collaborations worldwide.
      </p>

      <h3 class="about_subheading">Languages</h3>
      <ul class="about_pills about_pills_languages">
        {#each language_pills as lang}
          <li>{lang}</li>
        {/each}
      </ul>

      <div class="measurements_block">
        <h3 class="about_subheading">Measurements</h3>
        <dl class="measurements_list">
          {#each measurement_details as row}
            <div class="measurement_row">
              <dt class="measurement_label">{row.label}</dt>
              <dd class="measurement_value">{row.value}</dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>
  </div>
</section>

<style>
  .about_section {
    position: relative;
    padding: 3rem 1.25rem 3rem;
  }

  .about_bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      165deg,
      #080808 0%,
      #0a0809 42%,
      #070707 100%
    );
    opacity: 1;
    z-index: 0;
  }

  .about_inner {
    position: relative;
    z-index: 1;
    max-width: var(--content-max);
    margin: 0 auto;
    display: grid;
    gap: 2.5rem;
    align-items: start;
  }

  .about_image_wrap {
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    max-width: 480px;
    margin: 0 auto;
  }

  .about_image_wrap img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
  }

  .about_photographer {
    margin: 0.75rem 0.5rem 0.5rem;
    font-size: 0.55rem;
    color: var(--color-text-muted);
    text-align: left;
    text-transform: lowercase;
  }

  .about_photographer a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .about_photographer a:hover {
    color: var(--color-text);
  }

  .about_kicker {
    margin: 0 0 0.5rem;
    font-size: 0.56rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .about_title {
    margin: 0 0 1.25rem;
    font-family: var(--font-serif);
    font-size: clamp(1.45rem, 3.6vw, 1.95rem);
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--color-text);
  }

  .about_prose {
    margin-bottom: 1.75rem;
  }

  .about_paragraph {
    margin: 0 0 1rem;
    font-size: 0.8rem;
    color: var(--color-text-muted);
    max-width: 38rem;
    line-height: 1.6;
  }

  .about_paragraph:last-child {
    margin-bottom: 0;
  }

  .about_note {
    margin: 0 0 1.75rem;
    max-width: 38rem;
    font-size: 0.78rem;
    line-height: 1.58;
    color: var(--color-text-muted);
  }

  .about_booking {
    font-weight: 500;
    color: var(--color-text);
  }

  .about_subheading {
    margin: 0 0 0.75rem;
    font-size: 0.56rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .about_content h3.about_subheading:not(:first-of-type) {
    margin-top: 1.75rem;
  }

  .about_pills {
    list-style: none;
    margin: 0 0 0.85rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .about_pills li {
    padding: 0.34rem 0.72rem;
    font-size: 0.66rem;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    background: var(--color-glass);
  }

  .about_pills_languages {
    margin-bottom: 0;
  }

  .measurements_block {
    margin-top: 1.75rem;
    max-width: 22rem;
  }

  .measurements_list {
    margin: 0;
    padding: 0.85rem 1rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-glass-border);
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  }

  .measurement_row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 0.4rem 0;
  }

  .measurement_row + .measurement_row {
    margin-top: 0.15rem;
  }

  .measurement_label {
    margin: 0;
    flex: 0 1 auto;
    font-size: 0.55rem;
    font-weight: 500;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    line-height: 1.35;
  }

  .measurement_value {
    margin: 0;
    flex: 0 1 55%;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.35;
    color: var(--color-text);
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  @media (min-width: 900px) {
    .about_section {
      padding-left: 0;
      padding-right: 0;
    }

    .about_inner {
      max-width: none;
      width: 100%;
      margin: 0;
      padding-right: max(1.25rem, calc((100vw - var(--content-max)) / 2 + 1.25rem));
      padding-left: 0;
      grid-template-columns: minmax(0, 1.48fr) minmax(0, 1fr);
      gap: 3rem 3.25rem;
      align-items: stretch;
      justify-items: stretch;
    }

    .about_visual {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      min-height: 0;
      min-width: 0;
      width: 100%;
      max-width: none;
      margin: 0;
      padding: 0;
      align-self: stretch;
      justify-self: stretch;
    }

    .about_visual .about_image_wrap {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      margin-bottom: 0;
      max-width: none;
      width: 100%;
      align-self: stretch;
      flex: 1 1 auto;
      min-height: 0;
      position: relative;
      border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
      overflow: hidden;
      background: transparent;
      box-shadow: 12px 12px 40px rgba(26, 26, 26, 0.07);
    }

    .about_visual .about_image_wrap img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      aspect-ratio: unset;
      object-fit: cover;
      object-position: left center;
      display: block;
      margin: 0;
    }

    .about_content {
      width: 100%;
      min-width: 0;
      padding-right: 0;
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .about_content .about_pills {
      justify-content: flex-start;
    }

    .about_content .measurements_block {
      width: 100%;
      max-width: 22rem;
    }
  }

  @media (min-width: 1200px) {
    .about_inner {
      grid-template-columns: minmax(0, 1.58fr) minmax(0, 1fr);
      gap: 3.5rem 3.5rem;
    }
  }
</style>
