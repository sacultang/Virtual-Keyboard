// export class Keyboard {
//
//   #switchEl; // # 을 붙이면 private class 필드로 선언
//   constructor() {
//     this.#assignElement();
//     this.#addEvent();
//   }

//   #assignElement() {
//     this.#switchEl = document.getElementById('switch');
//   }

//   #addEvent() {
//     this.#switchEl.addEventListener('change', (event) => {
//       document.documentElement.setAttribute(
//         'theme',
//         event.target.checked ? 'dark-mode' : ''
//       );
//       console.log(event.target.checked);
//     });
//   }
// }
const switchEl = document.getElementById('switch');
export const Keyboard = () => {
  switchEl.addEventListener('change', (event) => {
    document.documentElement.setAttribute(
      'theme',
      event.target.checked ? 'dark-mode' : ''
    );
  });
};
