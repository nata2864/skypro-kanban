export const RoutesApp = {
  MAIN: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  NOT_FOUND: "/*",
  NEWCARD: "card/add",
  BROWSE: "card/:id",
  EXIT: "/exit",
};

export const buttonSizes = {
  user: "72px",
  exit: "153px",
  new: "178px",
  newTask: "132px",
};

export const buttonMargins = {
  exit: "10px",
  new: "20px",
};

export const categorieColor = {
  "Web Design": {
    background: "#ffe4c2",
    color: "#ff6d00",
  },
  Research: {
    background: "#b4fdd1",
    color: "#06b16e",
  },
  Copywriting: {
    background: "#e9d4ff",
    color: "#9a48f1",
  },
  grey: {
    background: "#94a6be",
    color: "#ffffff",
  },
};

export const categories = ["Web Design", "Research", "Copywriting"];

export const colorPageTheme = {
  light: "#EAEEF6",
  dark: "#EAEEF6",
  // grey: "#EAEEF6",
};

export const theme = {
  light: "#EAEEF6",
  dark: "#EAEEF6",
  // grey: "#EAEEF6",
};

export const lightTheme = {
  body: "#F1F1F1",
  text: "#000000",

  modalOverlay: "rgba(0, 0, 0, 0.4)",
  modalBackground: "#FFFFFF",
  modalBorder: "#D4DBE5",
  // buttonText: '#565EEF',
  // buttonBorder: '#565EEF',
  // buttonLink: '#565EEF',

  header: {
    background: "#FFFFFF",
    textColor: "#565EEF",
    arrowBorder: "#565EEF",
  },

  popUserModal: {
    border: "rgba(148, 166, 190, 0.4)",
    shadow: "0px 10px 39px 0px rgba(26, 56, 101, 0.21)",
    checkboxCircle: "#94A6BE",
  },

  badge: {
    orange: {
      background: "#FFE4C2",
      text: "#FF6D00",
    },
    green: {
      background: "#B4FDD1",
      text: "#06B16E",
    },
    purple: {
      background: "#E9D4FF",
      text: "#9A48F1",
    },
    gray: {
      background: "#94A6BE",
      text: "#FFFFFF",
    },
  },
};

export const darkTheme = {
  body: "#151419",
  text: "#FFFFFF",

  modalOverlay: "rgba(0, 0, 0, 0.8)",
  modalBackground: "#20202C",
  modalBorder: "#4E5566",
  // buttonText: '#FFFFFF',
  // buttonBorder: '#FFFFFF',
  // buttonLink: '#FFFFFF',

  header: {
    background: "#20202C",
    textColor: "#FFFFFF",
    arrowBorder: "#FFFFFF",
  },

  popUserModal: {
    border: "#4E5566",
    shadow: "0px 10px 39px 0px rgba(148, 166, 190, 0.4)",
    checkboxCircle: "#565EEF",
  },

  badge: {
    orange: {
      background: "#FF6D00",
      text: "#FFE4C2",
    },
    green: {
      background: "#06B16E",
      text: "#B4FDD1",
    },
    purple: {
      background: "#9A48F1",
      text: "#E9D4FF",
    },
    gray: {
      background: "#94A6BE",
      text: "#FFFFFF",
    },
  },
};
