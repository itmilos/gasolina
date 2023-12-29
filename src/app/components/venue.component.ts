import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-venue',
  standalone: true,
  template: `
    <h2 id="venue" class="section-title">Factory</h2>

    <div class="venue-details">
      <h3>Jugošped</h3>

      <a
        class="venue-address"
        href="https://maps.app.goo.gl/uh7bNak6RsHN53iGA"
        target="_blank"
      >
        Jugosped 26, Beograd 11000, Serbia
      </a>
    </div>

    <div class="gallery">
      <img src="/factory/jugosped1.jpg" loading="lazy" alt="Jugosped Photo 1" />
      <img src="/factory/jugosped2.jpeg" loading="lazy" alt="Jugosped Photo 2" />
      <img src="/factory/jugosped3.jpg" loading="lazy" alt="Jugosped Photo 3" />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
      }

      .venue-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0 1rem;
        margin-bottom: 2rem;
      }

      h3 {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
      }

      .venue-address {
        text-align: center;
      }

      .gallery {
        margin: 0 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .gallery > img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 0.5rem;
      }

      @media only screen and (min-width: 850px) {
        h3 {
          font-size: 1.5rem;
        }

        .venue-address {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VenueComponent {}
