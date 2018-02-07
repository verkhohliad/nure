export const getSpecialities = async () => {
  return await {
    headers: {
      bachelor: {
        extramural: [
          {
            text: 'Шифр',
            align: 'left',
            sortable: true,
            value: 'cipher'
          },
          {text: 'Спеціальність', value: 'specialty'},
          {text: 'Спеціалізація', value: 'specialization'},
          {text: 'Ліцензійний обсяг', value: 'volume'},
          {text: 'Вартість контракту (за 1 рік)', value: 'cost'}
        ],
        daily: [
          {
            text: 'Шифр',
            align: 'left',
            sortable: true,
            value: 'cipher'
          },
          {text: 'Спеціальність', value: 'specialty'},
          {text: 'Спеціалізація', value: 'specialization'},
          {text: 'ЗНО і Коефіціенти для вступу', value: 'marks'},
          {text: 'Мінімальний прохідний бал в 2016 році', value: 'minMark'},
          {text: 'Ліцензійний обсяг', value: 'volume'},
          {text: 'Термін навчання', value: 'period'},
          {text: 'Вартість контракту (за 1 рік)', value: 'cost'}
        ],
      },
      master: {
        headers: [
          {
            text: 'Шифр',
            align: 'left',
            sortable: true,
            value: 'cipher'
          },
          {text: 'Спеціальність', value: 'specialty'},
          {text: 'Спеціалізація', value: 'specialization'},
          {text: 'Ліцензійний обсяг', value: 'volume'},
          {text: 'Вартість контракту (за 1 рік)', value: 'cost'}
        ],
      }
    },
    items: {
      master: {
        extramural: [
          {
            value: false,
            cipher: '051',
            specialty: 'Економіка',
            specialization: 'Економічна кібернетика',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '073',
            specialty: 'Менеджмент',
            specialization: 'Управління фінансово-економічною безпекою',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
       
    
          {
            value: false,
            cipher: '121',
            specialty: 'Інженерія програмного забезпечення',
            specialization: 'Програмна інженерія',
            volume: 5,
            period: '1 р. 5 м.',
            cost: '9900 грн.'
          },
     
    
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформаційно-комунікаційні технології',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '9900 грн.'
          },
     
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Штучний інтелект',
            volume: 4,
            period: '1 р. 5 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '123',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Комп’ютерні системи та мережі',
            volume: 25,
            period: '1 p. 5 м. ; 1 р. 10 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '123',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Системне програмування',
            volume: 20,
            period: '1 p. 5 м. ; 1 р. 10 м.',
            cost: '7500 грн.'
          },
    
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Безпека інформаційних і комунікаційних систем',
            volume: 7,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Системи технічного захисту інформації',
            volume: 13,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Адміністративний менеджмент у сфері захисту информації',
            volume: 5,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
 
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизація та комп’ютерно-інтегровані технології',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
    
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'автоматизоване управління технологічними процесами',
            volume: 15,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '152',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Оптотехніка',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          
          {
            value: false,
            cipher: '163',
            specialty: 'Біомедична інженерія',
            specialization: 'Біомедична інженерія',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
         
          {
            value: false,
            cipher: '171',
            specialty: 'Електроніка',
            specialization: 'Електронні пристрої та системи',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіотехніка',
            volume: 43,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Апаратура разіозвязку,радіомовлення і телебачення',
            volume: 35,
            period: '1 р. 5 м.',
            cost: '7500 грн.'

          },
          
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіоелектронні засоби вбудованих систем',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '7500 грн.'

          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інтелектуальні технології мікросистемної радіоелектронної техніки',
            volume: 35,
            period: '1 р. 5 м.',
            cost: '7500 грн.'


          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційні мережі звязку',
            volume: 15,
            period: '1 р. 5 м. , 1 р. 10 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Телекомунікаційні системи та мережі',
            volume: 10,
            period: '1 р. 5 м. , 1 р. 10 м.',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційна інженерія',
            volume: 8,
            period: '1 р. 5 м. ',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'інформаційно-мережна інженерія',
            volume: 11,
            period: '1 р. 5 м. ',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '186',
            specialty: 'Видавництво та поліграфія',
            specialization: 'Видавничо-поліграфічна справа',
            volume: 12,
            period: '1 р. 5 м. , 1 р. 10 м.',
            cost: '7500 грн.'
          }
        ],
        daily: [
          {
            value: false,
            cipher: '051',
            specialty: 'Економіка',
            specialization: 'Економічна кібернетика',
            volume: 70,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '113',
            specialty: 'Прикладна математика',
            specialization: 'Прикладна математика',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '12900 грн'
          },
          {
            value: false,
            cipher: '113',
            specialty: 'Прикладна математика',
            specialization: 'Криптологія',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '12900 грн'
          },
          {
            value: false,
            cipher: '121',
            specialty: 'Інженерія програмного забезпечення',
            specialization: 'Програмна інженерія',
            volume: 150,
            period: '1 р. 5 м.',
            cost: '14900 грн'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформатика',
            volume: 54,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Консолідована інформація',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформаційно-комунікаційні технології',
            volume: 30,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Комп’ютерні науки',
            volume: 60,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Штучний інтелект',
            volume: 60,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '123',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Комп’ютерна інженерія',
            volume: 214,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '124',
            specialty: 'Системний аналіз',
            specialization: 'Системний аналіз',
            volume: 55,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Безпека інформаційних і комунікаційних систем',
            volume: 52,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Системи технічного захисту інформації',
            volume: 75,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '126',
            specialty: 'Інформаційні системи та технології',
            specialization: 'Інформаційні системи та технології',
            volume: 40,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '126',
            specialty: 'Інформаційні системи та технології',
            specialization: 'Інформаційні технологіїї інтернету речей',
            volume: 50,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '126',
            specialty: 'Інформаційні системи та технології',
            specialization: 'Інформаційні системи в медицині',
            volume: 15,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизація та комп’ютерно-інтегровані технології',
            volume: 230,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизація та комп’ютерно-інтегровані ресурсозберігаючі техноогії. Альтернативна енергетика',
            volume: 60,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Системна інженерія',
            volume: 45,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '152',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Оптотехніка',
            volume: 20,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '152',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Технічна експертиза',
            volume: 15,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '153',
            specialty: 'Мікро- та наносистемна техніка',
            specialization: 'Мікро- та наноелектроніка',
            volume: 36,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '163',
            specialty: 'Біомедична інженерія',
            specialization: 'Біомедична інженерія',
            volume: 110,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '171',
            specialty: 'Електроніка',
            specialization: 'Системи, технології і комп\'ютерні засоби мультімедіа',
            volume: 36,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '171',
            specialty: 'Електроніка',
            specialization: 'Електронні пристрої та системи',
            volume: 60,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіотехніка',
            volume: 84,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інженерія відновлюваних джерел енергії',
            volume: 23,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інтелектуальні технології засобів радіоелектроніки',
            volume: 100,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіоелектронні засоби вбудованих систем',
            volume: 82,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Телекомунікації',
            volume: 100,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційна інженерія',
            volume: 30,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інформаційно-мережна інженерія',
            volume: 40,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '173',
            specialty: 'Авіоніка',
            specialization: 'Вбудовані системи авіоніки',
            volume: 100,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '186',
            specialty: 'Видавництво та поліграфія',
            specialization: 'Видавничо-поліграфічна справа',
            volume: 55,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          }
        ]
      },
      bachelor: {
        extramural: [
          {
            value: false,
            cipher: '051',
            specialty: 'Економіка',
            specialization: 'Економічна кібернетика',
            volume: 130,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
    
          {
            value: false,
            cipher: '121',
            specialty: 'Інженерія програмного забезпечення',
            specialization: 'Програмна інженерія',
            volume: 100,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },

          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Комп’ютерні науки',
            volume: 88,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Штучний інтелект',
            volume: 25,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
          {
            value: false,
            cipher: '123',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Комп’ютерна інженерія',
            volume: 115,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
  
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Безпека інформаційних і комунікаційних систем',
            volume: 40,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Системи технічного захисту інформації',
            volume: 22,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },

          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизація та комп’ютерно-інтегровані технології',
            volume: 35,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
      
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Системна інженерія',
            volume: 20,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
          {
            value: false,
            cipher: '152',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Оптотехніка',
            volume: 70,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
 
          {
            value: false,
            cipher: '163',
            specialty: 'Біомедична інженерія',
            specialization: 'Біомедична інженерія',
            volume: 18,
            period: '4 р. 10 м.',
            cost: '4600 грн.'
          },

          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіотехніка',
            volume: 20,
            period: '4 р. 10 м.',
            cost: '4600 грн.'
          },

          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інтелектуальні технології засобів радіоелектроніки',
            volume: 75,
            period: '4 р. 10 м.',
            cost: '4600 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіоелектронні засоби вбудованих систем',
            volume: 20,
            period: '4 р. 10 м.',
            cost: '4600 грн.'

          },

          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційна інженерія',
            volume: 89,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інформаційно-мережна інженерія',
            volume: 83,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          },
          {
            value: false,
            cipher: '173',
            specialty: 'Авіоніка',
            specialization: 'Вбудовані системи авіоніки',
            volume: 30,
            period: '4 р. 10 м.',
            cost: '4600 грн.'
          },
          {
            value: false,
            cipher: '186',
            specialty: 'Видавництво та поліграфія',
            specialization: 'Видавничо-поліграфічна справа',
            volume: 45,
            period: '4 р. 10 м.',
            cost: '5500 грн.'
          }

        ],
        daily: [
          {
            value: false,
            cipher: '051',
            specialty: 'Економіка',
            specialization: 'Економічна кібернетика',
            marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
            minMark: 164.75,
            volume: 250,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '113',
            specialty: 'Прикладна математика',
            specialization: 'Прикладна математика',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 152.65,
            volume: 75,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '113',
            specialty: 'Прикладна математика',
            specialization: 'Криптологія',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 25,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '121',
            specialty: 'Інженерія програмного забезпечення',
            specialization: 'Програмна інженерія',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 176.9,
            volume: 355,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформатика',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 166.05,
            volume: 200,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Консолідована інформація',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 20,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформаційно-комунікаційні технології',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 40,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Комп’ютерні науки',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 166.1,
            volume: 500,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Штучний інтелект',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 85,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '123',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Комп’ютерна інженерія',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 157.65,
            volume: 475,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '124',
            specialty: 'Системний аналіз',
            specialization: 'Системний аналіз',
            marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 151.95,
            volume: 100,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Безпека інформаційних і комунікаційних систем',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 155.1,
            volume: 200,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Системи технічного захисту інформації',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 155.35,
            volume: 120,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '126',
            specialty: 'Інформаційні системи та технології',
            specialization: 'Інформаційні системи та технології',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 35,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '126',
            specialty: 'Інформаційні системи та технології',
            specialization: 'Інформаційні технологіїї інтернету речей',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 50,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '126',
            specialty: 'Інформаційні системи та технології',
            specialization: 'Інформаційні системи в медицині',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 15,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизація та комп’ютерно-інтегровані технології',
            marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 141,
            volume: 120,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизація та комп’ютерно-інтегровані ресурсозберігаючі техноогії. Альтернативна енергетика',
            marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 60,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Системна інженерія',
            marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 140.6,
            volume: 160,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '152',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Оптотехніка',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 133.65,
            volume: 140,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '152',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Технічна експертиза',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 150,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '153',
            specialty: 'Мікро- та наносистемна техніка',
            specialization: 'Мікро- та наноелектроніка',
            marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 135.65,
            volume: 240,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '163',
            specialty: 'Біомедична інженерія',
            specialization: 'Біомедична інженерія',
            marks: 'У - 0.2; Б - 0.35; ІМ/М - 0.3; А - 0.1; П - 0.05;',
            minMark: 158.85,
            volume: 150,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '171',
            specialty: 'Електроніка',
            specialization: 'Системи, технології і комп\'ютерні засоби мультімедіа',
            marks: 'У - 0.2; М - 0.35; ІМ/Ф - 0.3; А - 0.2; П - 0.05;',
            minMark: 164.75,
            volume: 65,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '171',
            specialty: 'Електроніка',
            specialization: 'Електронні пристрої та системи',
            marks: 'У - 0.2; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 139.65,
            volume: 140,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіотехніка',
            marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
            minMark: 132.2,
            volume: 565,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інженерія відновлюваних джерел енергії',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 133,
            volume: 35,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інтелектуальні технології засобів радіоелектроніки',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 305,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіоелектронні засоби вбудованих систем',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 70,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Телекомунікації',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 130.45,
            volume: 210,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційна інженерія',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 155,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інформаційно-мережна інженерія',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 150,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '173',
            specialty: 'Авіоніка',
            specialization: 'Вбудовані системи авіоніки',
            marks: 'У - 0.3; М - 0.35; ІМ/ІУ - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 100,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '186',
            specialty: 'Видавництво та поліграфія',
            specialization: 'Видавничо-поліграфічна справа',
            marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 152.25,
            volume: 250,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          }
        ],
        // secondCourse: [
        //   {
        //     value: false,
        //     cipher: '051',
        //     specialty: 'Економіка',
        //     specialization: 'Економічна кібернетика',
        //     marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',

        //     volume: 100,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '113',
        //     specialty: 'Прикладна математика',
        //     specialization: 'Прикладна математика',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 50,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '113',
        //     specialty: 'Прикладна математика',
        //     specialization: 'Криптологія',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 25,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '121',
        //     specialty: 'Інженерія програмного забезпечення',
        //     specialization: 'Програмна інженерія',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 250,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Інформатика',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 140,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Консолідована інформація',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 300,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Інформаційно-комунікаційні технології',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 300,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Комп’ютерні науки',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 300,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Штучний інтелект',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 300,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '123',
        //     specialty: 'Комп`ютерна інженерія',
        //     specialization: 'Комп’ютерна інженерія',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 300,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '124',
        //     specialty: 'Системний аналіз',
        //     specialization: 'Системний аналіз',
        //     marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 50,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '125',
        //     specialty: 'Кібербезпека',
        //     specialization: 'Безпека інформаційних і комунікаційних систем',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 100,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '125',
        //     specialty: 'Кібербезпека',
        //     specialization: 'Системи технічного захисту інформації',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 70,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '126',
        //     specialty: 'Інформаційні системи та технології',
        //     specialization: 'Інформаційні системи та технології',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 100,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '126',
        //     specialty: 'Інформаційні системи та технології',
        //     specialization: 'Інформаційні технологіїї інтернету речей',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 100,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '126',
        //     specialty: 'Інформаційні системи та технології',
        //     specialization: 'Інформаційні системи в медицині',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 100,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '151',
        //     specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        //     specialization: 'Автоматизація та комп’ютерно-інтегровані технології',
        //     marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 100,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '151',
        //     specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        //     specialization: 'Автоматизація та комп’ютерно-інтегровані ресурсозберігаючі техноогії. Альтернативна енергетика',
        //     marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 100,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '151',
        //     specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        //     specialization: 'Системна інженерія',
        //     marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 100,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '152',
        //     specialty: 'Метрологія та інформаційно-вимірювальна техніка',
        //     specialization: 'Оптотехніка',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 70,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '152',
        //     specialty: 'Метрологія та інформаційно-вимірювальна техніка',
        //     specialization: 'Технічна експертиза',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 50,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '153',
        //     specialty: 'Мікро- та наносистемна техніка',
        //     specialization: 'Мікро- та наноелектроніка',
        //     marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 120,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '163',
        //     specialty: 'Біомедична інженерія',
        //     specialization: 'Біомедична інженерія',
        //     marks: 'У - 0.2; Б - 0.35; ІМ/М - 0.3; А - 0.1; П - 0.05;',

        //     volume: 60,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '171',
        //     specialty: 'Електроніка',
        //     specialization: 'Системи, технології і комп\'ютерні засоби мультімедіа',
        //     marks: 'У - 0.2; М - 0.35; ІМ/Ф - 0.3; А - 0.2; П - 0.05;',

        //     volume: 35,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '171',
        //     specialty: 'Електроніка',
        //     specialization: 'Електронні пристрої та системи',
        //     marks: 'У - 0.2; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 100,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Радіотехніка',
        //     marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',

        //     volume: 315,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Інженерія відновлюваних джерел енергії',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 35,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Інтелектуальні технології засобів радіоелектроніки',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 305,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Радіоелектронні засоби вбудованих систем',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 280,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Телекомунікації',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 330,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Інфокомунікаційна інженерія',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 155,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Інформаційно-мережна інженерія',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',

        //     volume: 150,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '173',
        //     specialty: 'Авіоніка',
        //     specialization: 'Вбудовані системи авіоніки',
        //     marks: 'У - 0.3; М - 0.35; ІМ/ІУ - 0.2; А - 0.1;',

        //     volume: 100,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '186',
        //     specialty: 'Видавництво та поліграфія',
        //     specialization: 'Видавничо-поліграфічна справа',
        //     marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 175,

        //     cost: '9900 грн.'
        //   }
        // ],
        // thirdCourse: [
        //   {
        //     value: false,
        //     cipher: '051',
        //     specialty: 'Економіка',
        //     specialization: 'Економічна кібернетика',
        //     marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',

        //     volume: 100,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '113',
        //     specialty: 'Прикладна математика',
        //     specialization: 'Прикладна математика',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //     volume: 50,
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '113',
        //     specialty: 'Прикладна математика',
        //     specialization: 'Криптологія',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 25,

        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '121',
        //     specialty: 'Інженерія програмного забезпечення',
        //     specialization: 'Програмна інженерія',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 250,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Інформатика',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',

        //     volume: 140,

        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Консолідована інформація',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 300,
        //
        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Інформаційно-комунікаційні технології',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 300,
        //
        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Комп’ютерні науки',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 300,
        //
        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '122',
        //     specialty: 'Комп`ютерні науки',
        //     specialization: 'Штучний інтелект',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 300,
        //
        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '123',
        //     specialty: 'Комп`ютерна інженерія',
        //     specialization: 'Комп’ютерна інженерія',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 300,
        //
        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '124',
        //     specialty: 'Системний аналіз',
        //     specialization: 'Системний аналіз',
        //     marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 50,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '125',
        //     specialty: 'Кібербезпека',
        //     specialization: 'Безпека інформаційних і комунікаційних систем',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 100,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '125',
        //     specialty: 'Кібербезпека',
        //     specialization: 'Системи технічного захисту інформації',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 70,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '126',
        //     specialty: 'Інформаційні системи та технології',
        //     specialization: 'Інформаційні системи та технології',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 100,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '126',
        //     specialty: 'Інформаційні системи та технології',
        //     specialization: 'Інформаційні технологіїї інтернету речей',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 100,
        //
        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '126',
        //     specialty: 'Інформаційні системи та технології',
        //     specialization: 'Інформаційні системи в медицині',
        //     marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 100,
        //
        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '151',
        //     specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        //     specialization: 'Автоматизація та комп’ютерно-інтегровані технології',
        //     marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 100,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '151',
        //     specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        //     specialization: 'Автоматизація та комп’ютерно-інтегровані ресурсозберігаючі техноогії. Альтернативна енергетика',
        //     marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 100,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '151',
        //     specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        //     specialization: 'Системна інженерія',
        //     marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 100,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '152',
        //     specialty: 'Метрологія та інформаційно-вимірювальна техніка',
        //     specialization: 'Оптотехніка',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 70,
        //
        //     cost: '10900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '152',
        //     specialty: 'Метрологія та інформаційно-вимірювальна техніка',
        //     specialization: 'Технічна експертиза',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 50,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '153',
        //     specialty: 'Мікро- та наносистемна техніка',
        //     specialization: 'Мікро- та наноелектроніка',
        //     marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 120,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '163',
        //     specialty: 'Біомедична інженерія',
        //     specialization: 'Біомедична інженерія',
        //     marks: 'У - 0.2; Б - 0.35; ІМ/М - 0.3; А - 0.1; П - 0.05;',
        //
        //     volume: 60,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '171',
        //     specialty: 'Електроніка',
        //     specialization: 'Системи, технології і комп\'ютерні засоби мультімедіа',
        //     marks: 'У - 0.2; М - 0.35; ІМ/Ф - 0.3; А - 0.2; П - 0.05;',
        //
        //     volume: 35,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '171',
        //     specialty: 'Електроніка',
        //     specialization: 'Електронні пристрої та системи',
        //     marks: 'У - 0.2; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 100,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Радіотехніка',
        //     marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        //
        //     volume: 315,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Інженерія відновлюваних джерел енергії',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 35,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Інтелектуальні технології засобів радіоелектроніки',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 305,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Радіоелектронні засоби вбудованих систем',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 280,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Телекомунікації',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 330,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Інфокомунікаційна інженерія',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 155,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '172',
        //     specialty: 'Телекомунікації та радіотехніка',
        //     specialization: 'Інформаційно-мережна інженерія',
        //     marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
        //
        //     volume: 150,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '173',
        //     specialty: 'Авіоніка',
        //     specialization: 'Вбудовані системи авіоніки',
        //     marks: 'У - 0.3; М - 0.35; ІМ/ІУ - 0.2; А - 0.1;',
        //
        //     volume: 100,
        //
        //     cost: '9900 грн.'
        //   },
        //   {
        //     value: false,
        //     cipher: '186',
        //     specialty: 'Видавництво та поліграфія',
        //     specialization: 'Видавничо-поліграфічна справа',
        //     marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1;',
        //
        //     volume: 175,
        //
        //     cost: '9900 грн.'
        //   }
        //
        // ]
      }
    }
  }
};

