'use strict';

const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const COUNT_WIZARD = 4;

const setup = document.querySelector(`.setup`);

setup.classList.remove(`hidden`);

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
