// darkmode toggle with safe localStorage access and accessibility support
const THEME_KEY = 'darkmode';
const THEME_ENABLED = 'enabled';
const THEME_DISABLED = 'disabled';

const themeSwitch = document.getElementById('theme-switch') || document.querySelector('[data-theme-switch]');

// function to safely get/set LocalStorage items
function safeGet(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        // localStorage may be unavailable in some environments (private mode)
        return null;
    }
}

// function to safely get/set LocalStorage items
function safeSet(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (e) {
        return false;
    }
}

// Apply or remove darkmode class and update toggle state
function enableDarkmode() {
    document.body.classList.add('darkmode');
    safeSet(THEME_KEY, THEME_ENABLED);
    if (themeSwitch) {
        themeSwitch.setAttribute('aria-pressed', 'true');
        themeSwitch.classList.add('active');
    }
}

// Apply or remove darkmode class and update toggle state
function disableDarkmode() {
    document.body.classList.remove('darkmode');
    safeSet(THEME_KEY, THEME_DISABLED);
    if (themeSwitch) {
        themeSwitch.setAttribute('aria-pressed', 'false');
        themeSwitch.classList.remove('active');
    }
}

// apply saved preference if any
function applyPreference() {
    const pref = safeGet(THEME_KEY);
    if (pref === THEME_ENABLED) {
        enableDarkmode();
    } else {
        // explicitly set disabled so the state is persisted when possible
        disableDarkmode();
    }
}

// Apply on load
applyPreference();

// Wire up toggle if element exists
if (themeSwitch) {
    // Add accessible attributes if missing
    if (!themeSwitch.hasAttribute('role')) themeSwitch.setAttribute('role', 'button');
    if (!themeSwitch.hasAttribute('tabindex')) themeSwitch.setAttribute('tabindex', '0');
    if (!themeSwitch.hasAttribute('aria-pressed')) themeSwitch.setAttribute('aria-pressed', document.body.classList.contains('darkmode') ? 'true' : 'false');

    themeSwitch.addEventListener('click', () => {
        if (document.body.classList.contains('darkmode')) {
            disableDarkmode();
        } else {
            enableDarkmode();
        }
    });

    // keyboard support (Enter / Space)
    themeSwitch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            themeSwitch.click();
        }
    });
}