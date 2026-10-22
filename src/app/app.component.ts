import { Component, signal } from "@angular/core";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
})
export class AppComponent {
  menuOpen = signal(false);
  private appUrl = environment.appUrl.replace(/\/$/, "");

  get loginUrl(): string {
    return `${this.appUrl}/login`;
  }

  get registerUrl(): string {
    return `${this.appUrl}/register`;
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }
}
