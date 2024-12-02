export const categories = [
          // CONDENSATORS
  {
    id: 1,
    name: 'Конденсаторы',
    cost: '31 523',
    typeCostFirst: 'Безналичный расчет',
    typeCostSecond: 'Наличный расчет',
    image: 'https://i.ibb.co/tqrCbSt/testing.png',
    products: [
      { id: 1, name: 'Конденсаторы КМ зелёные общая группа', desc: 'Группа: Н90, F, U и т.п.', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '124712', costSecond: '118476' },
      { id: 2, name: 'Конденсаторы КМ зелёные группы V; M1500', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '153146', costSecond: '145489' },
      { id: 3, name: 'Конденсаторы КМ зеленые группы Н30', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '120469', costSecond: '114445' },
      { id: 4, name: 'Конденсаторы КМ зеленые группы Н30 68n, 68nM, 68Н', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '144563', costSecond: '137334' },
      { id: 5, name: 'Конденсаторы КМ зеленые группы D', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '122615', costSecond: '116484' },
      { id: 6, name: 'Конденсаторы КМ зелёные группы D 68n, 68nM', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '125523', costSecond: '119247' },
      { id: 7, name: 'Конденсаторы КМ рыжие общая группа', desc: 'Группа: Н90, F, U и т.п.', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '106916', costSecond: '101570' },
      { id: 8, name: 'Конденсаторы КМ рыжие группы V; М1500', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '140384', costSecond: '133365' },
      { id: 9, name: 'Конденсаторы КМ рыжие группы Н30; D; E', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '84328', costSecond: '80112' },
      { id: 10, name: 'Конденсаторы КМ рыжие группы Н50', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '147424', costSecond: '140053' },
      { id: 11, name: 'Конденсаторы КМ рыжие группы Н50 М15', desc: 'Размер: средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '151098', costSecond: '143543' },
      { id: 12, name: 'Конденсаторы КМ рыжие группы Н90 М68, 1М0', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '149654', costSecond: '142171' },
      { id: 13, name: 'Конденсаторы КМ рыжие группы Н90 1М5, 2М2', desc: 'С маркировкой года производства', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '177789', costSecond: '170606' },
      { id: 14, name: 'Конденсаторы КМ бескорпусные (отечественного производства)', desc: 'Немагнитные', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '124712', costSecond: '118476' },
      { id: 15, name: 'Конденсаторы КМ', desc: 'Страна: Болгария', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '86640', costSecond: '82308' },
      { id: 16, name: 'Конденсаторы К10-17; К10-23; К10-43; К10-47; К10-48', desc: 'Пластмассовый корпус', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '45944', costSecond: '43647' },
      { id: 17, name: 'Конденсаторы К10-17; К10-23; К10-43', desc: 'Керамический корпус', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '33182', costSecond: '31523' },
      { id: 18, name: 'Конденсаторы К10-23 группы Н30; D', desc: 'Размер: средний', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '74427', costSecond: '70706' },
      { id: 19, name: 'Конденсаторы К10-26', desc: 'Размер: средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '61665', costSecond: '58582' },
      { id: 20, name: 'Конденсаторы К10-28 группы Н30 1М0В; 1М5; 2М2', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '231', costSecond: '202' },
      { id: 21, name: 'Конденсаторы К10-47 группы Н30 25В; 50В 1М0; 1М5; 2М2', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '231', costSecond: '202' },
      { id: 22, name: 'Конденсаторы К10-47 группы Н30 25В;50В М33; М47; М68;', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '116', costSecond: '101' },
      { id: 23, name: 'Конденсаторы К10-47 группы Н90 25В; 50В 1М0; 1М5; 2М2 ... 6М8', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '173', costSecond: '152' },
      { id: 24, name: 'Конденсаторы К10-47 группы Н90 25В; 50В М33; М47; М68', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '87', costSecond: '76' },
      { id: 25, name: 'Конденсаторы К10-28; К10-47 общая группа', desc: 'Группа: Н30; D; Н50; Н90 и т.п.', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '59542', costSecond: '52099' },
      { id: 26, name: 'Конденсаторы 47 JD М33; М47; М68 до 93 года', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '77', costSecond: '67' },
      { id: 27, name: 'Конденсаторы 47 JF 1М0; 1М5; 2М2 ... 6М8 до 93 года', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '129', costSecond: '113' },
      { id: 28, name: 'Конденсаторы 47 JF М33; М47; М68 до 93 года', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '64', costSecond: '56' },
      { id: 29, name: 'Конденсаторные сборки Б18-11', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '41349', costSecond: '36755' },
      { id: 30, name: 'Конденсаторы К52-1', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '31712', costSecond: '28302' },
      { id: 31, name: 'Конденсаторы К52-1БМ; К52-1М', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '182181', costSecond: '161240' },
      { id: 32, name: 'Конденсаторы К52-2', desc: 'Размер: мелкий', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '47', costSecond: '42' },
      { id: 33, name: 'Конденсаторы К52-2С', desc: 'Размер: мелкий; Черная крышка', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '336', costSecond: '293' },
      { id: 34, name: 'Конденсаторы К52-2; К52-5', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '223', costSecond: '198' },
      { id: 35, name: 'Конденсаторы К52-2', desc: 'Размер: крупный; Чёрная крышка', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '112', costSecond: '100' },
      { id: 36, name: 'Конденсаторы К52-2', desc: 'Размер: крупный; Цвет: салатовый', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '112', costSecond: '100' },
      { id: 37, name: 'Конденсаторы К52-2', desc: 'Размер: крупный; Чёрная крышка', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '993', costSecond: '893' },
      { id: 38, name: 'Конденсаторы К52-7', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '811', costSecond: '721' },
      { id: 39, name: 'Конденсаторы К52-9; К52-11; К52-17; К52-18', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '9620', costSecond: '8501' },
      { id: 40, name: 'Линия задержки МЛЗ', desc: 'Любой номинал', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '0', costSecond: '15' },
      { id: 41, name: 'Конденсаторы ЭТ; ЭТН', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '6199', costSecond: '5478' },
      { id: 42, name: 'Конденсаторы ЭТО', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '50', costSecond: '45' },
      { id: 43, name: 'Конденсаторы ЭТО', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '245', costSecond: '216' },
      { id: 44, name: 'Конденсаторы К53-1; К53-7; К53-18', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '4114', costSecond: '3580' },
      { id: 45, name: 'Конденсаторы керамические К10-7', desc: 'Размер: мелкий, средний, крупный; Цвет: красный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'от кг', costFirst: '362', costSecond: '344' },
      { id: 46, name: 'Конденсаторы керамические К15-5 и подобные', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'от кг', costFirst: '0', costSecond: '344' },
      { id: 47, name: 'Конденсаторы подстроечные', desc: 'Размер: средний', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'от кг', costFirst: '0', costSecond: '344' },
      { id: 48, name: 'Конденсаторы трубчатые КД-2, КТ-1, КТ-2, КТ-3 и подобные', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'от кг', costFirst: '0', costSecond: '344' },
    ],
  },

                // LAMPS
  {
    id: 2,
    name: 'Лампы',
    cost: '2975.96',
    typeCostFirst: 'Цена на новые',
    typeCostSecond: 'Цена на б/у',
    image: 'https://i.ibb.co/tqrCbSt/testing.png',
    products: [
      {
        id: 1, name: 'ГИ-18БМ',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '51906.2'
      },
      {
        id: 2, name: 'ГИ-19Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '1107.33'
      },
      {
        id: 3, name: 'ГИ-36',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2768.33'
      },
      {
        id: 4, name: 'ГМИ-2Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '6574.79'
      },
      {
        id: 5, name: 'ГМИ-4Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '4567.75'
      },
      {
        id: 6, name: 'ГМИ-5',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2975.96'
      },
      {
        id: 7, name: 'ГМИ-7',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '7543.7'
      },
      {
        id: 8, name: 'ГМИ-7-1',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '8028.16'
      },
      {
        id: 8, name: 'ГМИ-10',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '1038.12'
      },
      {
        id: 9, name: 'ГМИ-11',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2975.96'
      },
      {
        id: 10, name: 'ГМИ-14Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '9204.7'
      },
      {
        id: 11, name: 'ГМИ-20',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2491.5'
      },
      {
        id: 12, name: 'ГМИ-21-1',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '1038.12'
      },
      {
        id: 13, name: 'ГМИ-24Б-5',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '7682.12'
      },
      {
        id: 14, name: 'ГМИ-26 УХВ 3в',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '3322'
      },
      {
        id: 15, name: 'ГМИ-29А-1',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '22008.23'
      },
      {
        id: 16, name: 'ГМИ-29Б-1',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '22008.23'
      },
      {
        id: 17, name: 'ГМИ-32Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '8028.16'
      },
      {
        id: 18, name: 'ГМИ-32Б-1',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '8028.16'
      },
      {
        id: 19, name: 'ГМИ-38',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2560.71'
      },
      {
        id: 20, name: 'ГМИ-42Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '5744.29'
      },
      {
        id: 21, name: 'ГМИ-46Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '13495.61'
      },
      {
        id: 22, name: 'ГМИ-83В',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2283.87'
      },
      {
        id: 23, name: 'ГМИ-89',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '1314.96'
      },
      {
        id: 24, name: 'ГМИ-90',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2733.73'
      },
      {
        id: 25, name: 'ГС-23Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '3232.03'
      },
      {
        id: 26, name: 'ГС-36Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '678.24'
      },
      {
        id: 27, name: 'ГУ-34б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '380.65'
      },
      {
        id: 28, name: 'ГУ-34Б-1',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2643.76'
      },
      {
        id: 29, name: 'ГУ-43А',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2415.37'
      },
      {
        id: 30, name: 'ГУ-43Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '2754.49'
      },
      {
        id: 31, name: 'ГУ-70Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '671.32'
      },
      {
        id: 32, name: 'ГУ-71Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '5578.19'
      },
      {
        id: 33, name: 'ГУ-72',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '989.68'
      },
      {
        id: 34, name: 'ГУ-73Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '6422.53'
      },
      {
        id: 35, name: 'ГУ-73П',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '6422.53'
      },
      {
        id: 36, name: 'ГУ-74Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '1702.52'
      },
      {
        id: 37, name: 'ГУ-78Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '5668.16'
      },
      {
        id: 38, name: 'ГУ-84Б',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '4463.93'
      },
      {
        id: 39, name: 'К-351',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '1058.89'
      },
      {
        id: 40, name: 'К-352',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '0',
        costSecond: '636.72'
      },
      {
        id: 41, name: 'Сетки от ламп',
        desc: 'цена договорная', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'кг',
        costFirst: '0',
        costSecond: '0'
      },
    ],
  },
  {
    id: 3,
    name: 'Микросхемы',
    cost: '32',
    typeCostFirst: 'Цена розницы на новые',
    typeCostSecond: 'Цена розницы на б/у',
    image: 'https://i.ibb.co/tqrCbSt/testing.png',
    products: [
      {
        id: 1, name: '133, 134 и подобные',
        desc: '14 ног, 0 подложек', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '48.38',
        costSecond: '32.69'
      },
      {
        id: 2, name: '133, 134 и подобные',
        desc: '14 ног, 1 подложка', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '69.96',
        costSecond: '52.31'
      },
      {
        id: 2, name: '133, 134 и подобные',
        desc: '14 ног, 2 подложки', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '163.46',
        costSecond: '130.77'
      },
      {
        id: 3, name: '564 и подобные',
        desc: '14 ног (жёлтый торец)', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '91.54',
        costSecond: '78.46'
      },
      {
        id: 4, name: '564 и подобные',
        desc: '14 ног (жёлтый торец) с 1990 года', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '52.31',
        costSecond: '47.08'
      },
      {
        id: 5, name: '564 и подобные',
        desc: '14 ног (жёлтый торец) 2 подложки', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '91.54',
        costSecond: '78.46'
      },
      {
        id: 6, name: '133, 564 и подобные',
        desc: '16 ног 0 подложек.', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '91.54',
        costSecond: '78.46'
      },
      {
        id: 7, name: '133, 564 и подобные',
        desc: '16 ног 1 подложка (выпуклая)', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '85',
        costSecond: '65.39'
      },
      {
        id: 8, name: '133, 564 и подобные',
        desc: '16 ног 1 подложка (плоская)', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '130.77',
        costSecond: '117.69'
      },
      {
        id: 9, name: '133 ИД 10',
        desc: '16 ног 1 подложка.', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '117.69',
        costSecond: '98.08'
      },
      {
        id: 10, name: '130,133 и подобные',
        desc: '18 ног без подложки', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '98.08',
        costSecond: '85'
      },
      {
        id: 11, name: '1564ап4 и подобные',
        desc: '20 ног, 1 подложка', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '117.69',
        costSecond: '98.08'
      },
      {
        id: 12, name: '556 рт 5 и подобные',
        desc: '24 ноги без подложки', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '124.23',
        costSecond: '91.54'
      },
      {
        id: 13, name: '537 ру 16 и подобные',
        desc: '28 ног, без подложки', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '124.89',
        costSecond: '92.19'
      },
      {
        id: 14, name: '133 ИД3; 556 РТ7-1 и подобные',
        desc: '24,28 ног 1 подложка', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '261.54',
        costSecond: '228.85'
      },
      {
        id: 15, name: 'КД 908,917 и подобные',
        desc: 'без подложки', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '58.85',
        costSecond: '45.77'
      },
      {
        id: 16, name: 'КД 908,917 и подобные',
        desc: '1 подложка', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '104.62',
        costSecond: '91.54'
      },
      {
        id: 17, name: 'КД 908,917 и подобные',
        desc: '2 подложки', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '176.54',
        costSecond: '150.39'
      },
      {
        id: 18, name: '142 ЕН 1,2 НД1-5',
        desc: '16 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '98.08',
        costSecond: '78.46'
      },
      {
        id: 19, name: '142 ЕН 3,5,8,9',
        desc: '4, 8 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '156.92',
        costSecond: '130.77'
      },
      {
        id: 20, name: '435 УВ1; ХП1 и подобные',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '32.69',
        costSecond: '29.42'
      },
      {
        id: 21, name: '140 и подобные',
        desc: '8 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '143.85',
        costSecond: '78.46'
      },
      {
        id: 22, name: '140 и подобные',
        desc: '12 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '170',
        costSecond: '78.46'
      },
      {
        id: 23, name: 'АОТы, АОДы',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '104.62',
        costSecond: '78.46'
      },
      {
        id: 24, name: '565 РУ 1,2',
        desc: 'керамический корпус', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '196.16',
        costSecond: '130.77'
      },
      {
        id: 25, name: '565 РУ 3',
        desc: 'керамический корпус', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '143.85',
        costSecond: '117.69'
      },
      {
        id: 26, name: '565 РУ 5',
        desc: 'с желтой крышкой', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '209.23',
        costSecond: '183.08'
      },
      {
        id: 27, name: '580 и подобные',
        desc: '16 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '130.77',
        costSecond: '104.62'
      },
      {
        id: 28, name: '580 и подобные',
        desc: '20 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '163.46',
        costSecond: '130.77'
      },
      {
        id: 29, name: '580 и подобные',
        desc: '24 ноги', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '183.08',
        costSecond: '143.85'
      },
      {
        id: 30, name: 'ИД005 и подобные',
        desc: '24 ноги жёлтый верх.', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '196.16',
        costSecond: '163.46'
      },
      {
        id: 31, name: '580 и подобные',
        desc: '28 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '228.85',
        costSecond: '163.46'
      },
      {
        id: 32, name: '580 и подобные',
        desc: '32 ноги', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '248.46',
        costSecond: '196.16'
      },
      {
        id: 33, name: '580 и подобные',
        desc: '40 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '313.85',
        costSecond: '248.46'
      },
      {
        id: 34, name: '580, 1801 и подобные',
        desc: '42 ноги', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '261.54',
        costSecond: '228.85'
      },
      {
        id: 35, name: '580, 1801 и подобные',
        desc: '48 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '294.23',
        costSecond: '261.54'
      },
      {
        id: 36, name: 'К1107пв1',
        desc: '48 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '385.77',
        costSecond: '300.77'
      },
      {
        id: 37, name: '519 РЕ',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '130.77',
        costSecond: '91.54'
      },
      {
        id: 38, name: 'К1ЖГ',
        desc: '', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '163.46',
        costSecond: '117.69'
      },
      {
        id: 39, name: '580, 1801 и подобные',
        desc: '50 ног', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '294.23',
        costSecond: '241.92'
      },
      {
        id: 40, name: '580, 1801 и подобные',
        desc: '64 ноги', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '326.93',
        costSecond: '261.54'
      },
      {
        id: 41, name: '580, 1801 и подобные',
        desc: 'с желтым верхом 64 ноги', image: 'https://i.ibb.co/tqrCbSt/testing.png',
        countType: 'шт',
        costFirst: '340',
        costSecond: '274.62ч  '
      },
    ],
  },
  {
    id: 4,
    name: 'Конденсаторы',
    cost: '31 523',
    typeCostFirst: 'Безналичный расчет',
    typeCostSecond: 'Наличный расчет',
    image: 'https://i.ibb.co/tqrCbSt/testing.png',
    products: [
      { id: 1, name: 'Конденсаторы КМ зелёные общая группа', desc: 'Группа: Н90, F, U и т.п.', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '124712', costSecond: '118476' },
      { id: 2, name: 'Конденсаторы КМ зелёные группы V; M1500', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '153146', costSecond: '145489' },
      { id: 3, name: 'Конденсаторы КМ зеленые группы Н30', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '120469', costSecond: '114445' },
      { id: 4, name: 'Конденсаторы КМ зеленые группы Н30 68n, 68nM, 68Н', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '144563', costSecond: '137334' },
      { id: 5, name: 'Конденсаторы КМ зеленые группы D', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '122615', costSecond: '116484' },
      { id: 6, name: 'Конденсаторы КМ зелёные группы D 68n, 68nM', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '125523', costSecond: '119247' },
      { id: 7, name: 'Конденсаторы КМ рыжие общая группа', desc: 'Группа: Н90, F, U и т.п.', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '106916', costSecond: '101570' },
      { id: 8, name: 'Конденсаторы КМ рыжие группы V; М1500', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '140384', costSecond: '133365' },
      { id: 9, name: 'Конденсаторы КМ рыжие группы Н30; D; E', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '84328', costSecond: '80112' },
      { id: 10, name: 'Конденсаторы КМ рыжие группы Н50', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '147424', costSecond: '140053' },
      { id: 11, name: 'Конденсаторы КМ рыжие группы Н50 М15', desc: 'Размер: средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '151098', costSecond: '143543' },
      { id: 12, name: 'Конденсаторы КМ рыжие группы Н90 М68, 1М0', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '149654', costSecond: '142171' },
      { id: 13, name: 'Конденсаторы КМ рыжие группы Н90 1М5, 2М2', desc: 'С маркировкой года производства', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '177789', costSecond: '170606' },
      { id: 14, name: 'Конденсаторы КМ бескорпусные (отечественного производства)', desc: 'Немагнитные', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '124712', costSecond: '118476' },
      { id: 15, name: 'Конденсаторы КМ', desc: 'Страна: Болгария', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '86640', costSecond: '82308' },
      { id: 16, name: 'Конденсаторы К10-17; К10-23; К10-43; К10-47; К10-48', desc: 'Пластмассовый корпус', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '45944', costSecond: '43647' },
      { id: 17, name: 'Конденсаторы К10-17; К10-23; К10-43', desc: 'Керамический корпус', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '33182', costSecond: '31523' },
      { id: 18, name: 'Конденсаторы К10-23 группы Н30; D', desc: 'Размер: средний', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '74427', costSecond: '70706' },
      { id: 19, name: 'Конденсаторы К10-26', desc: 'Размер: средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '61665', costSecond: '58582' },
      { id: 20, name: 'Конденсаторы К10-28 группы Н30 1М0В; 1М5; 2М2', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '231', costSecond: '202' },
      { id: 21, name: 'Конденсаторы К10-47 группы Н30 25В; 50В 1М0; 1М5; 2М2', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '231', costSecond: '202' },
      { id: 22, name: 'Конденсаторы К10-47 группы Н30 25В;50В М33; М47; М68;', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '116', costSecond: '101' },
      { id: 23, name: 'Конденсаторы К10-47 группы Н90 25В; 50В 1М0; 1М5; 2М2 ... 6М8', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '173', costSecond: '152' },
      { id: 24, name: 'Конденсаторы К10-47 группы Н90 25В; 50В М33; М47; М68', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '87', costSecond: '76' },
      { id: 25, name: 'Конденсаторы К10-28; К10-47 общая группа', desc: 'Группа: Н30; D; Н50; Н90 и т.п.', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '59542', costSecond: '52099' },
      { id: 26, name: 'Конденсаторы 47 JD М33; М47; М68 до 93 года', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '77', costSecond: '67' },
      { id: 27, name: 'Конденсаторы 47 JF 1М0; 1М5; 2М2 ... 6М8 до 93 года', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '129', costSecond: '113' },
      { id: 28, name: 'Конденсаторы 47 JF М33; М47; М68 до 93 года', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '64', costSecond: '56' },
      { id: 29, name: 'Конденсаторные сборки Б18-11', desc: 'Размер: крупный (1,5*1,2 см)', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '41349', costSecond: '36755' },
      { id: 30, name: 'Конденсаторы К52-1', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '31712', costSecond: '28302' },
      { id: 31, name: 'Конденсаторы К52-1БМ; К52-1М', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '182181', costSecond: '161240' },
      { id: 32, name: 'Конденсаторы К52-2', desc: 'Размер: мелкий', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '47', costSecond: '42' },
      { id: 33, name: 'Конденсаторы К52-2С', desc: 'Размер: мелкий; Черная крышка', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '336', costSecond: '293' },
      { id: 34, name: 'Конденсаторы К52-2; К52-5', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '223', costSecond: '198' },
      { id: 35, name: 'Конденсаторы К52-2', desc: 'Размер: крупный; Чёрная крышка', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '112', costSecond: '100' },
      { id: 36, name: 'Конденсаторы К52-2', desc: 'Размер: крупный; Цвет: салатовый', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '112', costSecond: '100' },
      { id: 37, name: 'Конденсаторы К52-2', desc: 'Размер: крупный; Чёрная крышка', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '993', costSecond: '893' },
      { id: 38, name: 'Конденсаторы К52-7', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '811', costSecond: '721' },
      { id: 39, name: 'Конденсаторы К52-9; К52-11; К52-17; К52-18', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '9620', costSecond: '8501' },
      { id: 40, name: 'Линия задержки МЛЗ', desc: 'Любой номинал', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '0', costSecond: '15' },
      { id: 41, name: 'Конденсаторы ЭТ; ЭТН', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '6199', costSecond: '5478' },
      { id: 42, name: 'Конденсаторы ЭТО', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '50', costSecond: '45' },
      { id: 43, name: 'Конденсаторы ЭТО', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'шт', costFirst: '245', costSecond: '216' },
      { id: 44, name: 'Конденсаторы К53-1; К53-7; К53-18', desc: 'Размер: крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'кг', costFirst: '4114', costSecond: '3580' },
      { id: 45, name: 'Конденсаторы керамические К10-7', desc: 'Размер: мелкий, средний, крупный; Цвет: красный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'от кг', costFirst: '362', costSecond: '344' },
      { id: 46, name: 'Конденсаторы керамические К15-5 и подобные', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'от кг', costFirst: '0', costSecond: '344' },
      { id: 47, name: 'Конденсаторы подстроечные', desc: 'Размер: средний', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'от кг', costFirst: '0', costSecond: '344' },
      { id: 48, name: 'Конденсаторы трубчатые КД-2, КТ-1, КТ-2, КТ-3 и подобные', desc: 'Размер: мелкий, средний, крупный', image: 'https://i.ibb.co/tqrCbSt/testing.png', countType: 'от кг', costFirst: '0', costSecond: '344' },
    ],
  },

  // Add more categories
];