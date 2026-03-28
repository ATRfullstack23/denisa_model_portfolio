<script>
  const brands = [
    { name: 'Naked Underwear', url: 'https://www.instagram.com/naked.underwear?igsh=MXJnNDNuZGhtc2Fpdw==' },
    { name: 'Rihoas', url: 'https://www.instagram.com/rihoas_official?igsh=Z2Y3aDB4dWcxdTFz' },
    { name: 'Berlook', url: 'https://www.instagram.com/berlookofficial?igsh=MTFjdmhmM3Frd2U0Mw==' },
    { name: 'Samiol', url: 'https://www.instagram.com/samiol.official?igsh=N3c2bGV0dHFlc3Rr' }
  ]
</script>

<section id="experience" class="experience_section" aria-labelledby="experience_heading">
  <div class="experience_inner">
    <header class="experience_header">
      <p class="experience_kicker">Experience</p>
      <h2 id="experience_heading" class="experience_title">Collaborations &amp; growth</h2>
      <p class="experience_lead">
        Photography, glamour, and video collaborations — working with photographers, brands, and
        production teams in Italy and internationally.
      </p>
    </header>

    <div class="brands_strip">
      <p class="brands_label">Brands &amp; partners</p>
      <ul class="brands_list">
        {#each brands as brand}
          <li>
            <a href={brand.url} target="_blank" rel="noopener noreferrer" class="brand_chip">
              {brand.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  .experience_section {
    padding: 3rem 1.25rem 2.25rem;
    background: linear-gradient(180deg, #090909 0%, #070707 55%, #060606 100%);
  }

  .experience_inner {
    max-width: var(--content-max);
    margin: 0 auto;
  }

  .experience_kicker {
    margin: 0 0 0.5rem;
    font-size: 0.64rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .experience_title {
    margin: 0 0 0.75rem;
    font-family: var(--font-serif);
    font-size: clamp(1.65rem, 4.2vw, 2.35rem);
    font-weight: 500;
    color: var(--color-text);
  }

  .experience_lead {
    margin: 0 0 1.75rem;
    max-width: 34rem;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-muted);
  }

  .brands_strip {
    margin-bottom: 0;
    padding: 1.5rem 1.25rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    background: var(--color-glass);
    backdrop-filter: blur(12px);
  }

  .brands_label {
    margin: 0 0 1rem;
    font-size: 0.6rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  .brands_list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .brand_chip {
    display: inline-block;
    padding: 0.44rem 0.85rem;
    font-size: 0.74rem;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    background: rgba(255, 255, 255, 0.04);
    color: var(--color-text);
    text-decoration: none;
    transition: background 0.3s ease, border-color 0.3s ease;
  }

  .brand_chip:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 768px) {
    .brands_list {
      gap: 0.65rem;
    }
  }
</style>
