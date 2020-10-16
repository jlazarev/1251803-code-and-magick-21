'use strict';

const FIRSTNAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const setup = document.querySelector(`.setup`);

setup.classList.remove(`hidden`);

const wizards = [];

const generationData = function (firstnames, surnames, coatColors, eyesColors) {
  const wizardData = {
    name: firstnames[Math.floor(Math.random() * firstnames.length)] + ` ` + surnames[Math.floor(Math.random() * surnames.length)],
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)]
  };

  return wizardData;
};

for (let i = 0; i < 4; i++) {
  wizards.push(generationData(FIRSTNAMES, SURNAMES, COAT_COLORS, EYES_COLORS));
}

const similarListElement = setup.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fillingBlock = function (wizardsArr) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizardsArr.length; i++) {
    fragment.appendChild(renderWizard(wizardsArr[i]));
  }

  return fragment;
};

similarListElement.appendChild(fillingBlock(wizards));

setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
