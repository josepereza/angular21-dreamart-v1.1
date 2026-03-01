import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  public closeMobileMenu() {
    const navMenu = document.getElementById('nav');
    const navToggler = document.querySelector('.navbar-toggler');
    
    if (navMenu && navMenu.classList.contains('show')) {
      // Try Bootstrap's native Collapse API first
      if ((window as any).bootstrap?.Collapse) {
        const bsCollapse = (window as any).bootstrap.Collapse.getInstance(navMenu);
        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          // If no instance, create one and hide
          const collapse = new (window as any).bootstrap.Collapse(navMenu, { toggle: false });
          collapse.hide();
        }
      } else {
        // Fallback: manual class removal
        navMenu.classList.remove('show');
        
        // Update toggler aria-expanded
        if (navToggler) {
          navToggler.setAttribute('aria-expanded', 'false');
          navToggler.classList.add('collapsed');
        }
      }
      
      // Remove backdrop if exists
      const backdrop = document.querySelector('.navbar-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  }

}
