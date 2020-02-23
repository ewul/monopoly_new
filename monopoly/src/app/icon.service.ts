import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private iconRegistry: MatIconRegistry;
  private sanitizer: DomSanitizer;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.iconRegistry = iconRegistry;
    this.sanitizer = sanitizer;
  }

  addSvgIcon(name: string, url: string) {
    this.iconRegistry.addSvgIcon(name,
      this.sanitizer.bypassSecurityTrustResourceUrl(url)
    )
  }
}
