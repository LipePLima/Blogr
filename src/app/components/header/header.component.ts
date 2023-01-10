import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './headerMQ.component.css']
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

  dropSubList () {
    let arrow   = document.querySelectorAll('#chevron');
    let subList = document.querySelectorAll("#item-list");

    if (subList !== null) {
      for (let i = 0; i < subList.length; i++) {
        subList[i].classList.toggle('item-list-active')
        arrow[i].classList.toggle('chevron-active')
      }
    }
  }
}
