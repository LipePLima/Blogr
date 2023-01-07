import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  itens = [
    {
      title: "Produtos",
      topics: ["Visão geral", "Precificação", "Mercado", "Característica", "Integrações"]
    },
    {
      title: "Companhia",
      topics: ["Sobre", "Equipe", "Blog", "Carreiras"]
    },
    {
      title: "Contatos",
      topics: ["Contatos", "Notícias", "LinkedIn"]
    }
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
