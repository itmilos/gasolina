import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-event-details',
  standalone: true,
  template: `
    <p class="event-description">

      <span class="highlighted-text">Gasolina Keychain</span> where passion meets innovation.
      Our uniquely crafted keychain combines <span class="highlighted-text">a sleek metal silhouette</span>
      with <b>detailed car model information</b>, packaged in a
      <span class="highlighted-text">design-forward paper that doubles as a car perfume holder</span>.
      <b>It's not just a keychain; it's an expression of your love for cars.</b>
    </p>


    <p class="event-organization">
      Crafted with 🤖 by the <a href="https://sites.google.com/awsm.company/awsm/">AWSM</a> team.
    </p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding: 4rem 1rem;
        border-bottom: 1px solid var(--border-color);
      }

      .event-description,
      .event-organization {
        line-height: 1.7;
        margin: 0;
      }

      .event-organization {
        text-align: center;
        margin-top: 1rem;
        font-weight: 600;
      }

      .event-stats {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .event-stats-item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .event-stats-item > .highlighted-text {
        font-size: 3rem;
      }

      @media only screen and (min-width: 850px) {
        .event-description,
        .event-organization {
          max-width: 900px;
          font-size: 1.25rem;
        }

        .event-stats {
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          max-width: 1000px;
        }

        .event-stats-item > .highlighted-text {
          font-size: 4rem;
        }

        .event-stats-label {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {}
