'use strict';

const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const COUNT_WIZARD = 4;

const setup = document.querySelector(`.setup`);

const generationWizard = function () {
  const wizardData = {
    name: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)] + ` ` + LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)],
    coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
  };

  return wizardData;
};

const generationWizards = function () {
  const wizardsArr = [];

  for (let i = 0; i < COUNT_WIZARD; i++) {
    wizardsArr.push(generationWizard());
  }

  return wizardsArr;
};

const wizards = generationWizards();

const similarListElement = setup.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const renderWizards = function (wizardsArr) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizardsArr.length; i++) {
    fragment.appendChild(renderWizard(wizardsArr[i]));
  }

  return fragment;
};

similarListElement.appendChild(renderWizards(wizards));

setup.querySelector(`.setup-similar`).classList.remove(`hidden`);

// module4-task1

const setupOpen = document.querySelector('.setup-open');
const setupClose = setup.querySelector('.setup-close');
const userName = setup.querySelector(`.setup-user-name`);

const onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && evt.target !== userName) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

// color

const userCoat = setup.querySelector(`.setup-wizard .wizard-coat`);
const userEye = setup.querySelector(`.setup-wizard .wizard-eyes`);
const fireball = setup.querySelector(`.setup-fireball-wrap`);
const coatInput = setup.querySelector(`input[name="coat-color"]`);
const eyesInput = setup.querySelector(`input[name="eyes-color"]`);
const fireballInput = setup.querySelector(`input[name="fireball-color"]`);

const getRandomColor = function (colors, exceptColor) {
  const rangeOfColors = colors.filter(x => x !== exceptColor);
  const newColor = rangeOfColors[Math.floor(Math.random() * rangeOfColors.length)];

  return newColor;
};

let oldCoatColor = null;
let oldEyesColor = null;
let oldFireballColor = null

userCoat.addEventListener(`click`, function () {
  const color = getRandomColor(COAT_COLORS, oldCoatColor);
  userCoat.style.fill = color;
  coatInput.value = color;
  oldCoatColor = color;
});

userEye.addEventListener(`click`, function () {
  const color = getRandomColor(EYES_COLORS, oldEyesColor);
  userEye.style.fill = color;
  eyesInput.value = color;
  oldEyesColor = color;
});

fireball.addEventListener(`click`, function () {
  const color = getRandomColor(FIREBALL_COLORS, oldFireballColor);
  fireball.style.backgroundColor = color;
  fireballInput.value = color;
  oldFireballColor = color;
});
