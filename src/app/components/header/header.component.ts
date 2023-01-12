import { itens, listClass } from './interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './headerMQ.component.css']
})

export class HeaderComponent {
  itens: itens[] = [
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

  dropMenu (): void {
    const menu  = document.getElementById("menuList");
    const menuH = document.getElementById("menuHeader");

    if (menu !== null && menuH !== null) {
      menu.classList.toggle("menuList-active")
      menuH.classList.toggle("menuHeader-active")
    }
  }

  dropSubList (event: Event) {
    event.stopPropagation()

    const parentElement: ParentNode = (event.target as HTMLElement).parentElement!;

    const subList = parentElement.querySelectorAll('#item-list');
    const btn     = parentElement.querySelectorAll('#btnHeader');
    const arrow   = parentElement.querySelectorAll('#chevron');

    const ul = parentElement.parentNode;
    const listClass: listClass[] = [
      {
        searchClass: '.item-list-active',
        elementClass: 'item-list-active'
      },
      {
        searchClass: '.btnHeader-active',
        elementClass: 'btnHeader-active'
      },
      {
        searchClass: '.chevron-active',
        elementClass: 'chevron-active'
      }
    ]

    // listClass.forEach( e => {
    //   const check = ul?.querySelectorAll(e.searchClass)
    //   check?.forEach( el => {
    //     if (el.classList.contains(e.elementClass)) {
    //       el.classList.remove(e.elementClass)
    //     }
    //   })
    // })

    for (let i = 0; i < subList.length; i++) {
      btn[i].classList.toggle('btnHeader-active');
      subList[i].classList.toggle('item-list-active');
      arrow[i].classList.toggle('chevron-active');
    }
  }
}
