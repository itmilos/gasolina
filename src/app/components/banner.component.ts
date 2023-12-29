import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bgd-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1 style="display: none">It's not just a keychain</h1>

    <img
      alt="gasolina-keychain-italy-alfa-romeo-gulietta-type-940-tb"
      src="/gasolina-keychain-italy-alfa-romeo-gulietta-type-940-tb.png"
      class="banner-logo"
      fetchPriority="high"
      loading="eager"
    />

    <p class="banner-title">Revolutionizing Car Enthusiast Merchandise</p>

    <div class="banner-details">
      <p class="conference-day"><b>PRESALE </b> : DEC 27, 2023</p>
      <p><b>UNTIL</b> : January 23, 2024</p>
    </div>

    <a class="tickets-button" routerLink="/" fragment="tickets">
      Get Your Gasolina Keychain
    </a>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4rem 1rem;
        border-bottom: 1px solid var(--border-color);
        background-image: url(banner-bg.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      .banner-logo {
        width: 100%;
        height: auto;
        max-width: 505px;
      }

      .banner-title {
        margin: 2rem 0 4rem 0;
        font-weight: 600;
        font-size: 1.25rem;
        text-align: center;
      }

      .banner-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 4rem;
      }

      .banner-details > p {
        margin: 0;
        text-align: center;
        font-weight: 600;
      }

      .conference-day {
        padding: 0.5rem 1.5rem;
        background: white;
        color: var(--background-color);
        border-radius: 1.5rem 0;
      }

      .tickets-button {
        font-weight: 600;
        text-decoration: none;
        border: 2px solid var(--accent-color);
        border-radius: 0.5rem;
        padding: 0.75rem 1.5rem;
        box-shadow: 0 0 14px 0 var(--accent-color);
      }

      .tickets-button:hover {
        color: inherit;
        background: red;
        opacity: 0.9;
      }

      @media only screen and (min-width: 850px) {
        :host {
          padding: 6rem 0;
        }

        .banner-logo {
          max-width: 270px;
        }

        .banner-title {
          font-size: 2rem;
        }

        .banner-details,
        .tickets-button {
          font-size: 1.5rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {}
