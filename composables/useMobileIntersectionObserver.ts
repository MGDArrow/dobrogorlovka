import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export function useMobileIntersectionObserver(
  target: Ref<HTMLElement | null>,
  threshold = 0.45,
  mobileBreakpoint = 768,
) {
  const isActive = ref(false);
  const isMobile = ref(false); // начальное значение по умолчанию
  let observer: IntersectionObserver | null = null;
  let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

  function setup() {
    observer?.disconnect();
    observer = null;

    if (isMobile.value && target.value) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            isActive.value = true;
          }
        },
        { threshold },
      );
      observer.observe(target.value);
    }
  }

  function handleResize() {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
      resizeTimeout = null;
    }
    resizeTimeout = setTimeout(() => {
      const newMobile = window.innerWidth <= mobileBreakpoint;
      if (newMobile !== isMobile.value) {
        isMobile.value = newMobile;
        setup();
      }
      resizeTimeout = null;
    }, 200);
  }

  onMounted(() => {
    // Инициализация на клиенте
    isMobile.value = window.innerWidth <= mobileBreakpoint;
    setup();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    observer?.disconnect();
    window.removeEventListener('resize', handleResize);
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
      resizeTimeout = null;
    }
  });

  return { isActive };
}
