// strings.js
export const strings = {
  // Названия кнопок
  buttons: {
    profile: "Профиль",
    newCase: "Новое дело",
    homePage: "Домашняя страница",
    allCases: "Все дела",
    search: "Поиск",
    logout: "Выход",
  },

  // Общие тексты
  appName: "BankroCheck",
  homePageSubtitle: "Загрузите необходимые документы для быстрого и эффективного анализа",
  newCaseButton: "Новое дело",

  // Тестовые данные
  testUsers: [
    {
      name: "Кошкин Валерий Александрович",
      submissionDate: "11 сентября",
      lastUpdated: "вчера",
    },
    {
      name: "Речкина Юлия Дмитриевна",
      submissionDate: "31 августа",
      lastUpdated: "вчера",
    },
    {
      name: "Новиков Тимофей Юрьевич",
      submissionDate: "14 сентября",
      lastUpdated: "вчера",
    },
  ],
};

// Пример использования:
// import { strings } from './strings';
// <button>{strings.buttons.newCase}</button>
// <h1>{strings.appName}</h1>
// {strings.testUsers.map(user => <div>{user.name}</div>)}
