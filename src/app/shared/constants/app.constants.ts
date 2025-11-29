// Application-wide constants
export const APP_CONSTANTS = {
  // Storage keys
  STORAGE_KEYS: {
    TOKEN: 'omni-planner-token',
    REFRESH_TOKEN: 'omni-planner-refresh-token',
    USER: 'omni-planner-user',
    SETTINGS: 'omni-planner-settings',
    THEME: 'omni-planner-theme'
  },
  
  // Toast default timeouts (in milliseconds)
  TOAST_TIMEOUTS: {
    SUCCESS: 3000,
    ERROR: 5000,
    INFO: 3500,
    WARNING: 4000
  },
  
  // Pagination defaults
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [5, 10, 20, 50, 100]
  },
  
  // Date formats
  DATE_FORMATS: {
    DISPLAY: 'MMM dd, yyyy',
    DISPLAY_WITH_TIME: 'MMM dd, yyyy hh:mm a',
    API: 'yyyy-MM-dd',
    API_WITH_TIME: 'yyyy-MM-dd HH:mm:ss'
  },
  
  // Validation
  VALIDATION: {
    MIN_PASSWORD_LENGTH: 8,
    MAX_TITLE_LENGTH: 200,
    MAX_DESCRIPTION_LENGTH: 2000
  }
};

