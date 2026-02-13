export interface FieldState {
  value: string;
  touched: boolean;
  error: boolean;
}

export type FormElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

// Component base classes
export const baseFieldClasses = `flex flex-row items-center px-6 py-3.5 gap-2.5
  max-w-[400px] w-full h-[50px]
  border rounded-[15px]
  text-[var(--color-base-black)] placeholder-[var(--color-neutral-400)]
  flex-auto self-stretch
  focus:outline-none transition-all duration-200 ease-in-out bg-[var(--color-base-white)]
`;

export const baseLabelClasses =
  'h-[22px] font-medium text-base leading-[135%] tracking-[-0.01em]';
export const regularText = 'text-[var(--color-base-white)]';
export const errorLabelText = 'text-[var(--color-red-500)]';

// Static border class
export const staticBorderClass = 'border-[var(--color-neutral-500)]';

// Border classes in selected/typed/complete
export const activeBorderClass = 'border-[var(--color-main-blue-500)]';
export const activeBorderAndShadowClass =
  'focus:border-[var(--color-main-blue-500)] focus:shadow-[0px_0px_0px_3px_var(--color-main-blue-200)]';

// Border clases in error
export const errorBorderAndShadowClasses =
  'border-[var(--color-red-500)] focus:shadow-[0px_0px_0px_3px_var(--color-red-200)]';

/**
 * @param {FormElement} element
 * @returns {boolean}
 */
export function validateField(element: FormElement): boolean {
  const value = element.value.trim();
  let error = false;

  if (element.required && value === '') {
    error = true;
  } else if (element instanceof HTMLInputElement) {
    if (element.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = true;
    } else if (element.type === 'password' && value.length < 6) {
      error = true;
    }
  } else if (element instanceof HTMLTextAreaElement) {
    if (value.length < 10) {
      error = true;
    }
  }

  return error;
}

/**
 * @param {FormElement} element
 * @param {FieldState} state
 * @param {boolean} shouldDisplayError
 */

export function updateUI(
  element: FormElement,
  state: FieldState,
  shouldDisplayError: boolean
): void {
  const container = element.closest('.field-container');
  if (!container) return;

  const labelElement = container.querySelector('label');
  const errorParagraph = container.querySelector('p.input-error-space');

  element.classList.remove(
    staticBorderClass,
    activeBorderClass,
    ...activeBorderAndShadowClass.split(' '),
    ...errorBorderAndShadowClasses.split(' ')
  );
  if (labelElement) labelElement.classList.remove(regularText, errorLabelText);

  if (shouldDisplayError) {
    element.classList.add(...errorBorderAndShadowClasses.split(' '));
    if (labelElement) labelElement.classList.add(errorLabelText);
    if (errorParagraph) errorParagraph.classList.add('is-visible');
    element.setAttribute('aria-invalid', 'true');
  } else {
    if (element === document.activeElement || state.touched) {
      element.classList.add(
        activeBorderClass,
        ...activeBorderAndShadowClass.split(' ')
      );
    } else if (element.value.trim() !== '') {
      element.classList.add(activeBorderClass);
    } else {
      element.classList.add(staticBorderClass);
    }

    if (labelElement) labelElement.classList.add(regularText);
    if (errorParagraph) errorParagraph.classList.remove('is-visible');
    element.setAttribute('aria-invalid', 'false');
  }
}

export function initValidation(element: FormElement): void {
  const fieldState: FieldState = {
    value: element.value,
    touched: false,
    error: false,
  };

  function updateStateAndUI() {
    fieldState.value = element.value.trim();
    fieldState.error = validateField(element);
    const shouldDisplayError = fieldState.error && fieldState.touched;
    element.dataset.invalid = shouldDisplayError ? 'true' : 'false';
    updateUI(element, fieldState, shouldDisplayError);
  }

  element.addEventListener('focus', () => {
    updateStateAndUI();
  });

  element.addEventListener('input', () => {
    fieldState.touched = true;
    updateStateAndUI();
  });

  element.addEventListener('blur', () => {
    fieldState.touched = true;
    updateStateAndUI();
  });

  if (element.value.trim() !== '') {
    fieldState.touched = true;
    updateStateAndUI();
  }
}

export function attachValidationToForm(): void {
  const fieldContainers = document.querySelectorAll('.field-container');

  fieldContainers.forEach((container) => {
    const inputElement = container.querySelector('input, textarea') as
      | HTMLInputElement
      | HTMLTextAreaElement;

    if (inputElement) {
      initValidation(inputElement);
    }
  });
}
