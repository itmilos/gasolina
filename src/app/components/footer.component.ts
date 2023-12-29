import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bgd-footer',
  standalone: true,
  template: `
    <footer>
      <p>
        Made with <a href="https://analogjs.org" target="_blank">AnalogJS</a> ❤️
      </p>


      <nav class="footer-links">
        <a routerLink="/terms-and-privacy" routerLinkActive="active-link"
          >Terms & Privacy</a
        >
      </nav>
      <p class="footer-copy">
        2023-{{ year }} Gasolina ©. All rights
        reserved.
      </p>
    </footer>
  `,
  styles: [
    `
      footer {
        text-align: center;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-top: 1px solid var(--border-color);
      }

      p {
        margin: 0;
      }

      .footer-links {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: center;
      }

      .footer-links > a {
        display: flex;
      }

      .footer-copy {
        padding: 0 1rem;
        word-break: break-word;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
