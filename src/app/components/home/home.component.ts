import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  beers = [
    {
      colorBackground: '#19171c',
      colorTitle: '#c8e5f8',
      colorSubtitle: '#e5e4a8',
      colorPlaceholder: '#4daa91',
      title: 'IPA CITRA GALACTIQUE',
      subtitle: 'Bière India Pale Ale',
      description: 'Nous avons conçu l\'IPA Citra Galactique à partir d\'une sélection de nos houblons favoris. Ils donnent à cette bière des notes explosives de citron et de fruits tropicaux, dont l\'amertume s\'éteint sur une touche finale sèche.',
      alcool: 6.5,
      style: 'India Pale Ale',
      amertume: 65,
      image: 'https://lh3.googleusercontent.com/jsWcha5MRG1JlIIkZxunV3Wv6OOldcADVOJtYd6Ed_PEhzZ9ymGVqPrgzMa39FCaQFtnvGCkAC2sR73tATfSbovkv9XPXAk_ZwSeG6rV_gjS7w=w304'
    },
    {
      colorBackground: '#678d9a',
      colorTitle: '#313e53',
      colorSubtitle: '#d2e7eb',
      colorPlaceholder: '#ac5032',
      title: 'A L\'OUEST',
      subtitle: 'Bière Pale Wheat Ale',
      description: 'A l’Ouest est une bière aux notes florales et fruitées à laquelle l’apport de malt de blé confère une fraîcheur en bouche et un trouble naturel. Son nom est un clin d’oeil à nos familles et amis du Pays Bigouden.',
      image: 'https://lh3.googleusercontent.com/ePCPZCJCHLUfk_b2fIWlsVqzUvF360saASD5fc9p4H5Kahw9kkSAoPZh4mpeHrhpsPUo5pwMQ9_JHzGhbUZAGcFtPXfxh9dmcG2q_SO12cSupQ=w283'
    },
    {
      colorBackground: '#38362b',
      colorTitle: '#d9cead',
      colorSubtitle: '#c3c8a0',
      colorPlaceholder: '#dbcfb0',
      title: 'NICE TO MEET YOU',
      subtitle: 'Bière Double IPA',
      description: 'Nice to Meet You est une bière créée pour ceux qui estiment qu’assez de houblon... c\'est encore trop peu ! Du premier arôme à la dernière goutte, rien ne viendra atténuer la puissance des cinq variétés de houblons qui composent cette Double IPA.',
      image: 'https://lh3.googleusercontent.com/VZCC45_x_zxUQZ9lD4Yi5EhgoMob2gsTuomtSQ-kEfvehwOR-3BCgnTF-Mg4not1bV9WvQbqO4S77CnKPNlca7ksUcYK2fVZYR1H1sfwwGsZdA=w304'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
