import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  beers = [
    {
      colorBackground: '#C9E1F3',
      colorTitle: '#221F20',
      colorSubtitle: '#4C658B',
      colorPlaceholder: '#EFF5FA',
      title: 'CITRON GIVRÉ',
      subtitle: 'India Pale Ale',
      description: 'La Citron Givré est une édition limitée d\'une IPA houblonnée à cru avec une nouvelle variété de houblon de la côte Pacifique du nord ouest des Etats Unis: le houblon Lemondrop.Celui - ci apporte des arômes de citron, de thé, de menthe et de fleur d\'oranger - qui composent un rappel de la douceur de l\'été au coeur de l\'hiver.',
      alcool: 7,
      amertume: 75
    },
    {
      colorBackground: '#4F6D80',
      colorTitle: '#FEFAFB',
      colorSubtitle: '#7FA8B9',
      colorPlaceholder: '#79A6B7',
      title: 'SMOKE ON THE WATER',
      subtitle: 'Bière au Malt Fumé',
      description: 'La Smoke on the Water est composée de trois malts traditionnels: le malt pils pour une base aux accents de céréales et de miel, le malt Munich pour la touche toastée et enfin une pointe de Rauchmalt délivrant des notes élégantes de hêtre fumé légères au nez comme en bouche.',
      alcool: 6.5,
      amertume: 65
    },
    {
      colorBackground: '#19171c',
      colorTitle: '#c8e5f8',
      colorSubtitle: '#e5e4a8',
      colorPlaceholder: '#4daa91',
      title: 'IPA CITRA GALACTIQUE',
      subtitle: 'Bière India Pale Ale',
      description: 'Nous avons conçu l\'IPA Citra Galactique à partir d\'une sélection de nos houblons favoris. Ils donnent à cette bière des notes explosives de citron et de fruits tropicaux, dont l\'amertume s\'éteint sur une touche finale sèche.',
      alcool: 6.5,
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
