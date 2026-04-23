import type { TStepPhoto } from '~/types/types';

export function scrollActivation(
  ref: HTMLElement | null,
  activated: Ref<boolean>,
  PERCENT = 0.45,
  always: boolean = false,
) {
  if (activated.value === true) return;
  if (ref === null) return;

  const doc = document.documentElement;
  if (doc.clientWidth > 768 && !always) return;

  const needScroll = doc.clientHeight * PERCENT + doc.scrollTop;
  const elementTop = ref?.offsetTop;

  if (elementTop <= needScroll) activated.value = true;
}

export function scrollActivationLeft(
  ref: HTMLElement | null,
  parent: HTMLElement | null,
  activated: Ref<boolean>,
  PERCENT = 0.45,
) {
  if (activated.value === true) return;
  if (ref === null) return;
  if (parent === null) return;

  const doc = document.documentElement;
  if (doc.clientWidth > 768) return;

  const needScroll = doc.clientHeight * PERCENT + doc.scrollTop;
  const elementTop = parent?.offsetTop;

  const needScrollLeft = ref.offsetLeft - ref.clientWidth * PERCENT;
  const elementLeft = parent?.scrollLeft as number;

  if (elementTop <= needScroll && needScrollLeft <= elementLeft)
    activated.value = true;
}

export function getRandomColor() {
  const number = Math.random();
  return number > 0.75
    ? 'var(--color-pink)'
    : number > 0.5
      ? 'var(--color-green)'
      : number > 0.25
        ? 'var(--color-blue)'
        : 'var(--color-orange)';
}

export const loadingValue = ref(false);

export const setLoading = () => {
  loadingValue.value = true;
  setTimeout(() => (loadingValue.value = false), 2000);
};

export const getHrefContacts = (label: string, value: string) => {
  if (label === 'Телефон') return `tel:+${value.replace(/\D/g, '')}`;
  if (label === 'E-mail') return `mailto:${value}`;
  if (label === 'Юридический адрес')
    return `https://yandex.ru/maps/?whatshere[point]=37.996122,48.306559&whatshere[zoom]=17`;
  return '';
};

export const getAllPhoto = (photos: { [key: string]: TStepPhoto[] }) => {
  const allArrays = Object.entries(photos);
  const endArrays: TStepPhoto[] = [];
  allArrays.forEach((step) => endArrays.push(...step[1]));
  return endArrays;
};

export function formatWashinOrderNumber(number: string | undefined) {
  if (!number) return '';
  return `${number.slice(0, 3)}-${number.slice(3, 6)}`;
}
