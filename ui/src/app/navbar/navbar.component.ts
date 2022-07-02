import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentMenuItemId = 1;
  menuItems = [
    { id: 1, libelle: "Tableau de bord", active: true, routerLink: "/dashboard" },
    { id: 2, libelle: "Activités", routerLink: "/activities" },
    { id: 3, libelle: "Ressources" },
    { id: 4, libelle: "Projets", routerLink: "/projects" },
    { id: 5, libelle: "Alertes", badge: "2", routerLink: "/alerts" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: number) {
    var currentMenuItemSelected = this.menuItems.find(o => o.id === this.currentMenuItemId);
    currentMenuItemSelected ? currentMenuItemSelected.active = false : null;

    var newMenuItemSelected = this.menuItems.find(o => o.id === id);
    newMenuItemSelected ? newMenuItemSelected.active = true : null;

    this.currentMenuItemId = id;
  }
}
