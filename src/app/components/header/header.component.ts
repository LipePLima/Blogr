import { itens, listClass } from './interface';
import { Component } from '@angular/core';
import { last } from 'rxjs';

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

    const ul = document.querySelector('#list-itens');
    const listClass: listClass[] = [
      {
        searchId: ul?.querySelectorAll('#item-list'),
        elementClass: 'item-list-active'
      },
      {
        searchId: ul?.querySelectorAll('#btnHeader'),
        elementClass: 'btnHeader-active'
      },
      {
        searchId: ul?.querySelectorAll('#chevron'),
        elementClass: 'chevron-active'
      }
    ]

    listClass.forEach( e => {
      e.searchId?.forEach( el => {
        const element = el as HTMLElement

        if (element.classList.contains(e.elementClass)) {
          element.classList.remove(e.elementClass)
        }
      })
    })

    const parentElement = (event.target as HTMLElement).parentElement!;

    const subList = parentElement.querySelectorAll('#item-list');
    const btn     = parentElement.querySelectorAll('#btnHeader');
    const arrow   = parentElement.querySelectorAll('#chevron');


    for (let i = 0; i < subList.length; i++) {
      subList[i].classList.toggle('item-list-active');
      btn[i].classList.toggle('btnHeader-active');
      arrow[i].classList.toggle('chevron-active');
    }
  }
}
