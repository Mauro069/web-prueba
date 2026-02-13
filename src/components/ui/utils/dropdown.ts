export const dropdownButtonClasses = `flex flex-row items-center px-6 py-3.5 gap-2.5
      w-[400px] h-[50px] border rounded-[15px] flex-none
      self-stretch flex-grow-0 focus:outline-none transition-all
      duration-200 ease-in-out appearance-none justify-between cursor-pointer custom-select-button`;

export const optionsListClasses = `custom-options relative z-10 w-[400px] mt-1 
bg-[var(--color-base-white)] border-[var(--color-base-white)] rounded-[15px] hidden`;

export const optionItemClasses = `h-[50px] hover:bg-[var(--color-blue-500)] 
hover:text-[var(--color-base-white)] cursor-pointer text-start px-6 py-3.5`;

/**.
 * @param container
 */

export function attachDropdownLogic(container: HTMLElement) {
  const button = container.querySelector(
    '.custom-select-button'
  ) as HTMLElement | null;
  const optionsList = container.querySelector(
    '.custom-options'
  ) as HTMLElement | null;
  const nativeSelect = container.querySelector(
    'select'
  ) as HTMLSelectElement | null;
  const buttonText = button?.querySelector('span') as HTMLElement | null;

  if (!button || !optionsList || !nativeSelect || !buttonText) return;

  const placeholderText = button.dataset.placeholderText;
  const neutralBorderClass = button.dataset.neutralBorderClass;
  const blueBorderClass = button.dataset.blueBorderClass;
  const placeholderColorClass = button.dataset.placeholderColor;
  const selectedColorClass = button.dataset.selectedColor;
  const completedProp = button.dataset.completed === 'true';

  const toggleArrowRotation = (isOpen: boolean) => {
    const arrowIcon = button.querySelector('svg');
    if (!arrowIcon) return;
    arrowIcon.style.transform = `rotate(${isOpen ? '180deg' : '0deg'})`;
  };

  const updateButtonStyles = (selectedValue: string) => {
    button.classList.remove(neutralBorderClass!, blueBorderClass!);
    buttonText.classList.remove(placeholderColorClass!, selectedColorClass!);

    const isPlaceholder =
      (selectedValue === '' || selectedValue === undefined) && !completedProp;
    if (isPlaceholder) {
      button.classList.add(neutralBorderClass!);
      buttonText.classList.add(placeholderColorClass!);
    } else {
      button.classList.add(blueBorderClass!);
      buttonText.classList.add(selectedColorClass!);
    }
  };

  button.addEventListener('click', () => {
    const isOpen = !optionsList.classList.toggle('hidden');
    toggleArrowRotation(isOpen);

    updateButtonStyles(isOpen ? 'prefilled' : nativeSelect.value);
  });

  optionsList.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'LI') {
      const selectedValue = target.dataset.value;
      const selectedLabel = target.textContent;

      if (selectedValue) {
        nativeSelect.value = selectedValue;
        buttonText.textContent = selectedLabel;

        updateButtonStyles(selectedValue);
        nativeSelect.dispatchEvent(new Event('change'));
      }

      optionsList.classList.add('hidden');
      toggleArrowRotation(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (!container.contains(event.target as Node)) {
      optionsList.classList.add('hidden');
      toggleArrowRotation(false);
      updateButtonStyles(nativeSelect.value);
    }
  });

  const initialSelectedOption = nativeSelect.value;
  const isInitialPlaceholder =
    initialSelectedOption === '' ||
    initialSelectedOption === nativeSelect.options[0]?.value;

  if (completedProp || !isInitialPlaceholder) {
    updateButtonStyles('prefilled');
  } else {
    updateButtonStyles('');
  }

  if (isInitialPlaceholder) {
    buttonText.textContent = placeholderText ?? '';
  } else {
    const selectedOption = nativeSelect.querySelector(
      `option[value="${initialSelectedOption}"]`
    );
    if (selectedOption) {
      buttonText.textContent = selectedOption.textContent;
    }
  }

  toggleArrowRotation(false);
}
