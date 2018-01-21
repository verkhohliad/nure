export const getSpecialities = async () => {
  return await {
    headers: [
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

    items: [
      {
        value: false,
        cipher: '051',
        specialty: 'Економіка',
        specialization: 'Економічна кібернетика',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 100,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '113',
        specialty: 'Прикладна математика',
        specialization: 'Прикладна математика',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '113',
        specialty: 'Прикладна математика',
        specialization: 'Криптологія',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '121',
        specialty: 'Інженерія програмного забезпечення',
        specialization: 'Програмна інженерія',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '122',
        specialty: 'Комп`ютерні науки',
        specialization: 'Інформатика',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '122',
        specialty: 'Комп`ютерні науки',
        specialization: 'Консолідована інформація',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '122',
        specialty: 'Комп`ютерні науки',
        specialization: 'Інформаційно-комунікаційні технології',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '122',
        specialty: 'Комп`ютерні науки',
        specialization: 'Комп’ютерні науки',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '122',
        specialty: 'Комп`ютерні науки',
        specialization: 'Штучний інтелект',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '123',
        specialty: 'Комп`ютерна інженерія',
        specialization: 'Комп’ютерна інженерія',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '124',
        specialty: 'Системний аналіз',
        specialization: 'Системний аналіз',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '125',
        specialty: 'Кібербезпека',
        specialization: 'Безпека інформаційних і комунікаційних систем',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '125',
        specialty: 'Кібербезпека',
        specialization: 'Системи технічного захисту інформації',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '126',
        specialty: 'Інформаційні системи та технології',
        specialization: 'Інформаційні системи та технології',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '126',
        specialty: 'Інформаційні системи та технології',
        specialization: 'Інформаційні технологіїї інтернету речей',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '126',
        specialty: 'Інформаційні системи та технології',
        specialization: 'Інформаційні системи в медицині',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '151',
        specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        specialization: 'Автоматизація та комп’ютерно-інтегровані технології',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '151',
        specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        specialization: 'Автоматизація та комп’ютерно-інтегровані ресурсозберігаючі техноогії. Альтернативна енергетика',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '151',
        specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
        specialization: 'Системна інженерія',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '152',
        specialty: 'Метрологія та інформаційно-вимірювальна техніка',
        specialization: 'Оптотехніка',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '152',
        specialty: 'Метрологія та інформаційно-вимірювальна техніка',
        specialization: 'Технічна експертиза',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '153',
        specialty: 'Мікро- та наносистемна техніка',
        specialization: 'Мікро- та наноелектроніка',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '163',
        specialty: 'Біомедична інженерія',
        specialization: 'Біомедична інженерія',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '171',
        specialty: 'Електроніка',
        specialization: 'Системи, технології і комп\'ютерні засоби мультімедіа',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '171',
        specialty: 'Електроніка',
        specialization: 'Електронні пристрої та системи',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '172',
        specialty: 'Телекомунікації та радіотехніка',
        specialization: 'Радіотехніка',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '172',
        specialty: 'Телекомунікації та радіотехніка',
        specialization: 'Інженерія відновлюваних джерел енергії',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '172',
        specialty: 'Телекомунікації та радіотехніка',
        specialization: 'Інтелектуальні технології засобів радіоелектроніки',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '172',
        specialty: 'Телекомунікації та радіотехніка',
        specialization: 'Радіоелектронні засоби вбудованих систем',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '172',
        specialty: 'Телекомунікації та радіотехніка',
        specialization: 'Телекомунікації',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '172',
        specialty: 'Телекомунікації та радіотехніка',
        specialization: 'Інфокомунікаційна інженерія',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '172',
        specialty: 'Телекомунікації та радіотехніка',
        specialization: 'Інформаційно-мережна інженерія',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '173',
        specialty: 'Авіоніка',
        specialization: 'Вбудовані системи авіоніки',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
      {
        value: false,
        cipher: '186',
        specialty: 'Видавництво та поліграфія',
        specialization: 'Видавничо-поліграфічна справа',
        marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1;',
        minMark: 164.75,
        volume: 25,
        period: '3 р. 10 м.',
        cost: '10900 грн.'
      },
    ]
  }
};

