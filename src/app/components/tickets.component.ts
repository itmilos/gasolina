import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-tickets',
  standalone: true,
  template: `
    <h2 id="tickets" class="section-title">Gasolina Keychain</h2>

    <div class="tickets">
      <div class="ticket red-ticket">
        <span class="badge">until January 23</span>

        <div class="ticket-info">
          <h3 class="ticket-name">Pre Sale</h3>
          <p class="ticket-price">19,99 $</p>
        </div>

        <hr />

        <ul>
          <li>Metal Sheet Desig</li>
          <li>Front: Stunning car silhouette outline.</li>
          <li>Back: Table with car model details - year, engine specs, acceleration, speed, and weight.</li>
          <li>Strong paper with a car-specific design.</li>
          <li>Specially selected car perfume included.</li>
          <li>Flag of the car's country of origin for a personalized touch.</li>

        </ul>

        <a class="buy-button" [href]="buyTicketsLink" target="_blank">
          Buy Now
        </a>
      </div>

      <div class="ticket">
<!--        <span class="badge">30 seats available</span>-->

        <div class="ticket-info">
          <h3 class="ticket-name">Regural Price</h3>
          <p class="ticket-price">24.99 $</p>
        </div>

        <hr />

<!--        <ul>-->
<!--          <li>Early access to gasolina app</li>-->
<!--        </ul>-->

        <p class="buy-button" [href]="buyTicketsLink" target="_blank">
          Post January 23
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border-color);
      }

      .tickets {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
      }

      .ticket {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2.25rem 1rem 2rem 1rem;
        border-radius: 0.5rem;
        max-width: 300px;
        position: relative;
      }

      .badge {
        top: -1px;
        position: absolute;
        right: -1px;
        border-radius: 0 0.5rem;
        font-size: 0.79rem;
        font-weight: 600;
        white-space: nowrap;
        padding: 0.25rem 0.5rem;
      }

      .ticket-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }

      .ticket-name {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
      }

      .ticket-price {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 0;
      }

      .ticket > hr {
        border: 1px solid var(--border-color);
        width: 100%;
        margin: 0;
      }

      .ticket > ul {
        padding: 0 0 0 1.25rem;
        margin: 0.5rem 0 1rem 0;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .buy-button {
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
      }

      .buy-button:hover {
        color: inherit;
        opacity: 0.9;
      }

      .red-ticket {
        border: 2px solid var(--red-color);
        box-shadow: 0 0 14px 0 var(--red-color);
      }

      .red-ticket > .badge {
        background-color: var(--red-color);
      }

      .red-ticket > .buy-button {
        background-color: var(--red-color);
      }

      .purple-ticket {
        border: 2px solid var(--purple-color);
        box-shadow: 0 0 14px 0 var(--purple-color);
      }

      .purple-ticket > .badge {
        background-color: var(--purple-color);
      }

      .purple-ticket > .buy-button {
        background-color: var(--purple-color);
      }

      .companies-note {
        margin: 2rem 1rem 0 1rem;
      }

      @media only screen and (min-width: 850px) {
        .tickets {
          flex-direction: row;
          justify-content: center;
          align-items: stretch;
          gap: 4rem;
        }

        .ticket {
          justify-content: start;
        }

        .buy-button {
          margin-top: auto;
        }

        .companies-note {
          margin: 2rem auto 0 auto;
          text-align: center;
          max-width: 800px;
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsComponent {
  readonly buyTicketsLink =
    'https://checkout.stripe.com/c/pay/cs_live_a1FfZOUu2SRhHUeBHlePDLXLOhX4UYg1k5jwUUNpcy7MLjajwalwl7Bt3t#fidkdWxOYHwnPyd1blppbHNgWjA0SlE9PX1OR0lGbz1GTm42XTNCN1x9UEwyYnY9Y19SZGhgb1RGdWpHSmpQQTBfbH1gVWwzTHVidEMzNUNqQlNxZkwxbUNJbWhgb2gwbGBKcF9PMG9jTlVHNTVSS2BzfDRNNicpJ3VpbGtuQH11anZgYUxhJz8nZEBQM3RuYkpWNERMNGdsY1xfJ3gl';
}
