<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out will-change-[opacity]"
    :class="[
      headerClasses,
      {
        '-translate-y-full opacity-0': isScrollingDown,
        'translate-y-0 opacity-100': !isScrollingDown,
      },
    ]"
  >
    <!-- Countdown Banner at the very top -->
    <SectionsCountdownBanner v-if="beforeWedding" />

    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink class="flex-shrink-0" to="/info">
          <img src="/logo.svg" alt="Logo" :class="logoSizeClass" />
        </NuxtLink>

        <!-- Desktop navigatie -->
        <div v-if="!isMobile" class="hidden md:flex items-center space-x-6">
          <HeaderLink to="/info#nieuws"> Laatste nieuws </HeaderLink>
          <HeaderLink to="/info#avond-gasten"> Avondgasten </HeaderLink>
          <HeaderLink to="/daggasten"> Daggasten </HeaderLink>
          <HeaderLink to="/help" :isRightSide="true">
            Belangrijke informatie
          </HeaderLink>
        </div>

        <!-- Mobile hamburger menu -->
        <div v-if="isMobile" class="md:hidden">
          <HamburgerMenu
            :isOpen="isMobileMenuOpen"
            @toggle="toggleMobileMenu"
          />
        </div>
      </div>
    </nav>
  </header>

  <!-- Mobile Navigation Modal - Outside header so it's always visible -->
  <MobileNavigation :isOpen="isMobileMenuOpen" @close="closeMobileMenu" />
</template>

<script setup lang="ts">
const { isSmallScreen, isMobile } = useBreakpoint();

// Mobile menu state
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const isScrollingDown = ref(false);

// Scroll direction tracking
let lastScrollY = 0;
const headerHeight = 120; // Header height including countdown banner

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Body scroll lock when mobile menu is open
let scrollPosition = 0;

const lockBodyScroll = () => {
  if (process.client) {
    // Store current scroll position
    scrollPosition = window.pageYOffset;

    // Add styles to prevent scrolling
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    // Prevent scrollbar jump
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }
};

const unlockBodyScroll = () => {
  if (process.client) {
    // Restore body styles
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.paddingRight = "";

    // Restore scroll position
    window.scrollTo(0, scrollPosition);
  }
};

// Prevent touch scroll on mobile when menu is open
const preventTouchMove = (e: TouchEvent) => {
  if (isMobileMenuOpen.value) {
    e.preventDefault();
  }
};

// Watch mobile menu state and toggle body scroll
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    lockBodyScroll();
    // Add touch event listener for mobile devices
    if (process.client) {
      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    }
  } else {
    unlockBodyScroll();
    // Remove touch event listener
    if (process.client) {
      document.removeEventListener("touchmove", preventTouchMove);
    }
  }
});

// Enhanced scroll detection voor glasmorphism en hide/show
const handleScroll = () => {
  if (process.client) {
    const currentScrollY = window.scrollY;

    // Glasmorphism effect
    isScrolled.value = currentScrollY > 20;

    // Header hide/show logic
    // Only hide the header if scrolled past the header height
    if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
      isScrollingDown.value = true;
    } else {
      isScrollingDown.value = false;
    }

    lastScrollY = currentScrollY;
  }
};

onMounted(() => {
  if (process.client) {
    lastScrollY = window.scrollY;
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
    // Remove touch event listener if still active
    document.removeEventListener("touchmove", preventTouchMove);
    // Ensure body scroll is restored when component is unmounted
    unlockBodyScroll();
  }
});

// Responsive logo size
const logoSizeClass = computed(() => {
  return isSmallScreen.value ? "h-8 w-auto" : "h-10 w-auto";
});

// Header glasmorphism classes
const headerClasses = computed(() => {
  return isScrolled.value
    ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
    : "bg-transparent";
});

const beforeWedding = ref(true);

onMounted(() => {
  const weddingDate = new Date("2025-10-11T08:00:00");
  const now = new Date();

  beforeWedding.value = now < weddingDate;
});
</script>
