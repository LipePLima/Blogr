import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  itens = [
    {title: "Produtos"},
    {title: "Companhia"},
    {title: "Contatos"}
  ];
   
  dropMenu () {
    let menu  = document.getElementById("menuList");
    let menuH = document.getElementById("menuHeader");
    if (menu !== null && menuH !== null) {
      menu.classList.toggle("menuList-active")
      menuH.classList.toggle("menuHeader-active")
    }
    
  }
}
