// strings.js
export const strings = {
  // Названия кнопок
  buttons: {
    profile: "Профиль",
    newCase: "Новое дело",
    homePage: "Домашняя страница",
    allCases: "Все дела",
    search: "Поиск",
    logout: "Выход"
  },

   // Пути к изображениям для иконок
  iconPaths: {
    profile: "/images/user.png",
    newCase: "/images/plus.png",
    homePage: "/images/home.png",
    allCases: "/images/bookmark.png",
    search: "/images/search.png",
    logout: "/images/exit.png",
  },

  // Общие тексты
  appName: "BankroCheck",
  homePageSubtitle: "Загрузите необходимые документы для быстрого и эффективного анализа",
  newCaseButton: "Новое дело",
  newWinPageSubtitle: "Загрузите документ или архив",
  saveADraft: "Сохранить черновик",
  uploadDocuments: "Загрузить документы",
  download: "Загрузить",

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
