import firstImg from '../assets/img/first.jpg';
import secondImg from '../assets/img/second.jpg';
import thirdImg from '../assets/img/third.jpg';
import fourthImg from '../assets/img/fourth.jpg';
import fifthImg from '../assets/img/fifth.jpg';
import sixthImg from '../assets/img/6th.jpg';

export const announcementsMock = () => {
  return [
    {
      id: 1,
      img: firstImg,
      title: 'Питання і відповіді про контрактну форму навчання в ХНУРЕ',
      description: 'Зарахування до лав студентів вищого навчального закладу - завжди хвилюючий процес, під час якого навіть самі впевнені.',
      value: 'questions',
      url: '/',
    }, {
      id: 2,
      img: secondImg,
      title: 'Розклад вступних іспитів в ХНУРЕ 2017',
      description: 'Розклад вступних іспитів ХНУРЕ і додаткових вступних випробувань для вступу',
      value: 'exams',
      url: '/',
    }, {
      id: 3,
      img: thirdImg,
      title: 'Правила i порядок подачі документів в ХНУРЕ',
      description: 'Реєстрація електронних кабінетів вступників та завантаження додатків до документів.',
      value: 'documents',
      url: '/',
    }, {
      id: 4,
      img: fourthImg,
      title: 'Правила прийому до ХНУРЕ у 2017 році',
      description: 'А ти знаєш, що: 1. Якщо ти іногородній, то маєш право на отримання місця в гуртожитку на період вступної кампанії. 2. Якщо у тебе повну середню загальну освіту, ти можеш: подати до 9 заяв на 4 спеціальності в своєму електронному кабінеті або особисто в Консультаційному центрі Приймальної комісії ХНУРЕ з 12 до 26 липня 2017 р вказавши пріоритети свого вибору',
      value: 'admissionRules',
      url: '/',
    }, {
      id: 5,
      img: fifthImg,
      title: 'Спеціальності і спеціалізації для надходження на 1 курс в ХНУРЕ',
      description: '',
      value: 'specialities',
      url: '/',
    }, {
      id: 6,
      img: sixthImg,
      title: 'Перелік пільг при вступі до ВНЗ, пільги ХНУРЕ і бланки для пільг',
      description: '',
      value: 'privileges',
      url: '/',
    },
  ]
};

export const newsMock = () => {
  return []
};

export const facultiesMock = () => {
  return []
};

export const specializationsMock = () => {
  return []
};

export const specialitiesMock = () => {
  return {
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
          {text: 'Факультет', value: 'faculty'},
          {text: 'ЗНО і Коефіціенти для вступу', value: 'marks'},
          {text: 'Прохідний бал минулих років', value: 'minMark'},
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
          {text: 'Факультет', value: 'faculty'},
          {text: 'Ліцензійний обсяг', value: 'volume'},
          {text: 'Термін навчання', value: 'period'},
          {text: 'Вартість контракту (за 1 рік)', value: 'cost'}
        ],
      }
    },


    items: {
      secondEducation:
        [
          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Інженерія програмного забезпечення',
            specialization: 'Інженерія програмного забезпечення',
            volume: 25,
            period: '1 р. 10 м.',
            cost: '11900 грн.'
          },

          {
            value: false,
            cipher: '122',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Системи штучного інтелекту',
            volume: 2,
            period: '1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Кібербезпека',
            specialization: 'Безпека інформаційних і комунікаційних систем',
            volume: 5,
            period: '1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Кібербезпека',
            specialization: 'Безпека державних Інформаційних ресурсів',
            volume: 5,
            period: '1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '163',
            field_of_knowledge: '16. Хімічна та біоінженерія',
            faculty: 'ЕЛБІ',
            specialty: 'Біомедична інженерія',
            specialization: 'Біомедична інженерія',
            volume: 10,
            period: '1 р. 10 м.',
            cost: '11900 грн.'
          },

          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Телекомунікаційні системи та мережі',
            volume: 1,
            period: ' 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інформаційні мережі зв`язку',
            volume: 10,
            period: ' 1 р. 10 м.',
            cost: '11900 грн.'
          },
        ],

      master: {
        extramural: [
          {
            value: false,
            cipher: '051',
            field_of_knowledge: '05. Соціальні та поведінкові науки',
            specialty: 'Економіка',
            specialization: 'Економічна кібернетика',
            faculty: 'ІТМ',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '073',
            field_of_knowledge: '07. Управління та адміністрування',
            specialty: 'Менеджмент',
            specialization: 'Управління фінансово-економічною безпекою',
            faculty: 'ІТМ',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },

          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'ІРТЗІ',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформаційно-комунікаційні технології',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '9900 грн.'
          },

          {
            value: false,
            cipher: '122',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформаційні управляючі системи та технології',
            volume: 15,
            period: '1 р. 5 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '122',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Системи штучного інтелекту',
            volume: 30,
            period: '1 р. 5 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '123',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Комп’ютерні системи та мережі',
            volume: 25,
            period: '1 р. 5 м. - 1 р. 10 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '123',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Системне програмування',
            volume: 20,
            period: '1 p. 5 м. ; 1 р. 10 м.',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'ІРТЗІ',
            specialty: 'Кібербезпека',
            specialization: 'Системи технічного захисту інформації',
            volume: 13,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Кібербезпека',
            specialization: 'Безпека інформаційних і комунікаційних систем',
            volume: 7,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'ІК',
            specialty: 'Кібербезпека',
            specialization: 'Адміністративний менеджмент у сфері захисту информації',
            volume: 5,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '151',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'АКТ',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Комп’ютерно-інтегровані технологічні процеси і виробництва',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '151',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'АКТ',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизоване управління технологічними процесами',
            volume: 15,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '152',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'ЕЛБІ',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Лазерна і оптоелектронна техніка ',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '163',
            field_of_knowledge: '16. Хімічна та біоінженерія',
            faculty: 'ЕЛБІ',
            specialty: 'Біомедична інженерія',
            specialization: 'Біомедична інженерія',
            volume: 20,
            period: '1 p. 5 м. ; 1 р. 10 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '163',
            field_of_knowledge: '16. Хімічна та біоінженерія',
            faculty: 'ЕЛБІ',
            specialty: 'Біомедична інженерія',
            specialization: 'Ортопедичні технології та інженерії ',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '171',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ЕЛБІ',
            specialty: 'Електроніка',
            specialization: 'Електронні прилади та пристрої ',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційна інженерія',
            volume: 8,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІРТЗІ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіотехніка',
            volume: 43,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІРТЗІ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Апаратура радіозв’язку, радіомовлення і телебачення ',
            volume: 35,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'АКТ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіоелектронні апарати та засоби ',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'АКТ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інтелектуальні технології мікросистемної радіоелектронної техніки',
            volume: 35,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційні мережі зв`язку',
            volume: 15,
            period: '1 р. 5 м. , 1 р. 10 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Телекомунікаційні системи та мережі',
            volume: 10,
            period: '1 р. 5 м. , 1 р. 10 м.',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційна інженерія',
            volume: 10,
            period: '1 р. 5 м. ',
            cost: '7500 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інформаційно-мережна інженерія',
            volume: 11,
            period: '1 р. 5 м. ',
            cost: '7500 грн.'
          },

          {
            value: false,
            cipher: '186',
            field_of_knowledge: '18. Виробництво та технології',
            faculty: 'КН',
            specialty: 'Видавництво та поліграфія',
            specialization: 'Технології друкованих видань',
            volume: 12,
            period: '1 р. 5 м.',
            cost: '7500 грн.'
          }
        ],


        daily: [
          {
            value: false,
            cipher: '051',
            field_of_knowledge: '05. Соціальні та поведінкові науки',
            specialty: 'Економіка',
            specialization: 'Економічна кібернетика',
            faculty: 'ІТМ',
            volume: 60,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '073',
            field_of_knowledge: '07. Управління та адміністрування',
            specialty: 'Менеджмент',
            specialization: 'Управління фінансово-економічною безпекою',
            faculty: 'ІТМ',
            volume: 30,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '113',
            field_of_knowledge: '11. Математика та статистика',
            faculty: 'ІТМ',
            specialty: 'Прикладна математика',
            specialization: 'Прикладна математика',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '12900 грн'
          },
          {
            value: false,
            cipher: '113',
            field_of_knowledge: '11. Математика та статистика',
            faculty: 'ІТМ',
            specialty: 'Прикладна математика',
            specialization: 'Криптологія',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '12900 грн'
          },


          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Інженерія програмного забезпечення',
            specialization: 'Програмне забезпечення систем  ',
            volume: 70,
            period: '1 р. 5 м.',
            cost: '14900 грн'
          },
          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Інженерія програмного забезпечення',
            specialization: 'Інженерія програмного забезпечення',
            volume: 50,
            period: '1 р. 5 м.',
            cost: '14900 грн'
          },


          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформатика',
            volume: 54,
            period: '1 р. 5 м.',
            cost: '14900 грн'
          },

          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Соціальна інформатика',
            volume: 15,
            period: '1 р. 5 м.',
            cost: '12900 грн'
          },

          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформаційно-комунікаційні технології',
            volume: 30,
            period: '1 р. 10 м.',
            cost: '12900 грн'
          },

          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформаційні управляючі системи та технології',
            volume: 24,
            period: '1 р. 5 м.',
            cost: '14900 грн'
          },

          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Інформаційні технології проектування',
            volume: 29,
            period: '1 р. 5 м.',
            cost: '14900 грн'
          },


          {
            value: false,
            cipher: '121',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Data Science ',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '34000 грн.'
          },
          {
            value: false,
            cipher: '122',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'ІТМ',
            specialty: 'Комп`ютерні науки',
            specialization: ' Консолідована інформація',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },

          {
            value: false,
            cipher: '122',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Системне проектування',
            volume: 28,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '122',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Системи штучного інтелекту ',
            volume: 52,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '122',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'ІТМ',
            specialty: 'Комп`ютерні науки',
            specialization: 'Консолідована інформація',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '122',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КН',
            specialty: 'Комп`ютерні науки',
            specialization: 'Управління проектами в галузі інформаційних технологій ',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '14900 грн.'
          },


          {
            value: false,
            cipher: '123',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Комп’ютерні системи та мережі',
            volume: 55,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '123',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Системне програмування ',
            volume: 54,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '14900 грн.'
          },
          {
            value: false,
            cipher: '123',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Спеціалізовані комп’ютерні системи',
            volume: 60,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '14900 грн.'
          },


          {
            value: false,
            cipher: '124',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'ІТМ',
            specialty: 'Системний аналіз',
            specialization: 'Системний аналіз і управління',
            volume: 25,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '124',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'ІТМ',
            specialty: 'Системний аналіз',
            specialization: 'Консолідована інформація ',
            volume: 30,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },


          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Кібербезпека',
            specialization: 'Безпека інформаційних і комунікаційних систем',
            volume: 52,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Кібербезпека',
            specialization: 'Безпека державних інформаційних ресурсів',
            volume: 23,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'КІУ',
            specialty: 'Кібербезпека',
            specialization: 'Адміністративний менеджмент у сфері захисту інформації',
            volume: 40,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '125',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'ІРТЗІ',
            specialty: 'Кібербезпека',
            specialization: 'Системи технічного захисту інформації, авторизація її обробки',
            volume: 62,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '151',
            field_of_knowledge: '12. Інформаційні технології',
            faculty: 'АКТ',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Комп’ютеризовані системи управління та автоматика',
            volume: 50,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '151',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'КІУ',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Комп’ютеризовані та робототехнічні системи',
            volume: 45,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '151',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'АКТ',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизоване управління технологічними процесами',
            volume: 55,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '151',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'АКТ',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Комп’ютерно-інтегровані технологічні процеси і виробництва',
            volume: 55,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },

          {
            value: false,
            cipher: '152',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'ІК',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Метрологія та вимірювальна техніка',
            volume: 20,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '152',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'ІК',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Метрологічне забезпечення випробувань та якості продукції ',
            volume: 20,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },

          {
            value: false,
            cipher: '152',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'ІК',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Якість, стандартизація та сертифікація',
            volume: 15,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },

          {
            value: false,
            cipher: '152',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'ЕЛБІ',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Фотоніка та оптоінформатика ',
            volume: 30,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '153',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'ЕЛБІ',
            specialty: 'Мікро- та наносистемна техніка',
            specialization: 'Мікро- та наноелектроннні прилади і пристрої ',
            volume: 36,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '152',
            field_of_knowledge: '15. Автоматизація та приладобудування',
            faculty: 'ЕЛБІ',
            specialty: 'Мікро- та наносистемна техніка',
            specialization: 'Лазерна і оптоелектронна техніка ',
            volume: 10,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '163',
            field_of_knowledge: '16. Хімічна та біоінженерія',
            faculty: 'ЕЛБІ',
            specialty: 'Біомедична інженерія',
            specialization: 'Біомедична інженерія ',
            volume: 70,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '163',
            field_of_knowledge: '16. Хімічна та біоінженерія',
            faculty: 'ЕЛБІ',
            specialty: 'Біомедична інженерія',
            specialization: 'Інформаційні технології в біомедицині ',
            volume: 20,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },

          {
            value: false,
            cipher: '171',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІРТЗІ',
            specialty: 'Електроніка',
            specialization: 'Системи, технології і комп\'ютерні засоби мультимедіа',
            volume: 36,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '171',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ЕЛБІ',
            specialty: 'Електроніка',
            specialization: 'Електронні прилади та пристрої',
            volume: 60,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інфокомунікаційна інженерія',
            volume: 22,
            period: '1 р. 5 м. ; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІРТЗІ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіотехніка',
            volume: 41,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІРТЗІ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інженерія відновлюваних джерел енергії',
            volume: 23,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІРТЗІ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Апаратура радіозв’язку, радіомовлення і телебачення',
            volume: 45,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'АКТ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіоелектронні апарати та засоби',
            volume: 62,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІРТЗІ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіоелектронні пристрої,системи та комплекси',
            volume: 23,
            period: '1 р. 5 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Телекомунікаційні системи та мережі',
            volume: 80,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'АКТ',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інтелектуальні технології мікросистемної радіоелектронної техніки',
            volume: 91,
            period: '1 р. 5 м.; ',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інформаційні мережі зв`язку',
            volume: 28,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '172',
            field_of_knowledge: '17. Електроніка та телекомунікації',
            faculty: 'ІК',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інформаційно-мережна інженерія',
            volume: 29,
            period: '1 р. 5 м.; 1 р. 10 м.',
            cost: '11900 грн.'
          },
          {
            value: false,
            cipher: '186',
            field_of_knowledge: '18. Видавництво та технології',
            faculty: 'КН',
            specialty: 'Видавництво та поліграфія',
            specialization: 'Технологія друкованих видань (КН)',
            volume: 8,
            period: '1 р. 5 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '186',
            field_of_knowledge: '18. Видавництво та технології',
            faculty: 'КН',
            specialty: 'Видавництво та поліграфія',
            specialization: 'технології електронних мультімедійних видань (КН)',
            volume: 18,
            period: '1 р. 5 м. ; 1 р. 10 м.',
            cost: '12900 грн.'
          },
          {
            value: false,
            cipher: '186',
            field_of_knowledge: '18. Видавництво та технології',
            faculty: 'КН',
            specialty: 'Видавництво та поліграфія',
            specialization: 'Комп’ютерні технології та системи Видавничо-поліграфічих Виробництв (кн)',
            volume: 15,
            period: '1 р. 5 м. ; 1 р. 10 м.',
            cost: '12900 грн.'
          },
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
            faculty: 'ІТМ',
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
            faculty: 'ІТМ',
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
            faculty: 'ІТМ',
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
            faculty: 'КН',
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
            faculty: 'ІТМ',
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
            faculty: 'ІТМ',
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
            faculty: 'ІРТЗІ',
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
            faculty: 'КН',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 166.1,
            volume: 412,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '122',
            specialty: 'Комп`ютерні науки',
            specialization: 'Штучний інтелект',
            faculty: 'КН',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 164.75,
            volume: 60,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '123',
            specialty: 'Комп`ютерна інженерія',
            specialization: 'Комп’ютерна інженерія',
            faculty: 'КІУ',
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
            faculty: 'ІТМ',
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
            faculty: 'КІУ',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 155.1,
            volume: 160,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Системи технічного захисту інформації',
            faculty: 'ІРТЗІ',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 155.35,
            volume: 98,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '125',
            specialty: 'Кібербезпека',
            specialization: 'Управління інформаційною безпекою',
            faculty: 'ІК',
            marks: 'У - 0.2; М - 0.5; ІМ/Ф - 0.2; А - 0.1;',
            minMark: 155.2,
            volume: 50,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '126',
            specialty: 'Інформаційні системи та технології',
            specialization: 'Інформаційні системи та технології',
            faculty: 'КН',
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
            faculty: 'ІРТЗІ',
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
            faculty: 'КН',
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
            faculty: 'АКТ',
            marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 141,
            volume: 85,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '151',
            specialty: 'Автоматизація та комп’ютерно-інтегровані технології',
            specialization: 'Автоматизація та комп’ютерно-інтегровані ресурсозберігаючі техноогії. Альтернативна енергетика',
            faculty: 'АКТ',
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
            faculty: 'АКТ',
            marks: 'У - 0.25; М - 0.4; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 140.6,
            volume: 140,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '152',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Оптотехніка',
            faculty: 'ЕЛБІ',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 133.65,
            volume: 70,
            period: '3 р. 10 м.',
            cost: '10900 грн.'
          },
          {
            value: false,
            cipher: '152',
            specialty: 'Метрологія та інформаційно-вимірювальна техніка',
            specialization: 'Технічна експертиза',
            faculty: 'ІК',
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
            faculty: 'ЕЛБІ',
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
            faculty: 'ЕЛБІ',
            marks: 'У - 0.2; Б - 0.35; ІМ/М - 0.3; А - 0.1; П - 0.05;',
            minMark: 158.85,
            volume: 132,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '171',
            specialty: 'Електроніка',
            specialization: 'Системи, технології і комп\'ютерні засоби мультімедіа',
            faculty: 'ІРТЗІ',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.2; П - 0.05;',
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
            faculty: 'ЕЛБІ',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 139.65,
            volume: 128,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіотехніка',
            faculty: 'ІРТЗІ',
            marks: 'У - 0.3; М - 0.3; ІМ/ІУ - 0.3; А - 0.1; П - 0.05;',
            minMark: 132.2,
            volume: 545,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інженерія відновлюваних джерел енергії',
            faculty: 'ІРТЗІ',
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
            faculty: 'АКТ',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 230,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Радіоелектронні засоби вбудованих систем',
            faculty: 'АКТ',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 50,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Телекомунікації',
            faculty: 'ІК',
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
            faculty: 'ІК',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 60,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '172',
            specialty: 'Телекомунікації та радіотехніка',
            specialization: 'Інформаційно-мережна інженерія',
            faculty: 'ІК',
            marks: 'У - 0.3; М - 0.35; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 164.75,
            volume: 67,
            period: '3 р. 10 м.',
            cost: '9900 грн.'
          },
          {
            value: false,
            cipher: '173',
            specialty: 'Авіоніка',
            specialization: 'Вбудовані системи авіоніки',
            faculty: 'АКТ',
            marks: 'У - 0.3; М - 0.35; ІМ/ІУ - 0.2; А - 0.1; П - 0.05;',
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
            faculty: 'КН',
            marks: 'У - 0.2; М - 0.45; ІМ/Ф - 0.2; А - 0.1; П - 0.05;',
            minMark: 152.25,
            volume: 205,
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
