export const purple = "#292477"
export const gray = "#545454"
export const white = "#fff"
export const red = "#b71845"
export const orange = "#f26f28"
export const blue = "#4e4cb8"
export const lightPurp = "#7c53c3"
export const pink = "#b93fb3"
export const green = "#558b2f"

const pickRandomProperty = obj => {
  var result
  var count = 0
  for (var prop in obj) if (Math.random() < 1 / ++count) result = prop
  return result
}

export const materialColor = () => {
  // colors from https://github.com/egoist/color-lib/blob/master/color.json
  var colors = {
    red: {
      "50": "#ffebee",
      "100": "#ffcdd2",
      "200": "#ef9a9a"
    },
    pink: {
      "50": "#fce4ec",
      "100": "#f8bbd0",
      "200": "#f48fb1"
    },
    purple: {
      "50": "#f3e5f5",
      "100": "#e1bee7",
      "200": "#ce93d8"
    },
    deepPurple: {
      "50": "#ede7f6",
      "100": "#d1c4e9",
      "200": "#b39ddb"
    },
    indigo: {
      "50": "#e8eaf6",
      "100": "#c5cae9",
      "200": "#9fa8da"
    },
    blue: {
      "50": "#e3f2fd",
      "100": "#bbdefb",
      "200": "#90caf9"
    },
    lightBlue: {
      "50": "#e1f5fe",
      "100": "#b3e5fc",
      "200": "#81d4fa"
    },
    cyan: {
      "50": "#e0f7fa",
      "100": "#b2ebf2",
      "200": "#80deea"
    },
    teal: {
      "50": "#e0f2f1",
      "100": "#b2dfdb",
      "200": "#80cbc4"
    },
    green: {
      "50": "#e8f5e9",
      "100": "#c8e6c9",
      "200": "#a5d6a7"
    },
    lightGreen: {
      "50": "#f1f8e9",
      "100": "#dcedc8",
      "200": "#c5e1a5"
    },
    lime: {
      "50": "#f9fbe7",
      "100": "#f0f4c3",
      "200": "#e6ee9c"
    },
    yellow: {
      "50": "#fffde7",
      "100": "#fff9c4",
      "200": "#fff59d"
    },
    amber: {
      "50": "#fff8e1",
      "100": "#ffecb3",
      "200": "#ffe082"
    },
    orange: {
      "50": "#fff3e0",
      "100": "#ffe0b2",
      "200": "#ffcc80"
    },
    deepOrange: {
      "50": "#fbe9e7",
      "100": "#ffccbc",
      "200": "#ffab91"
    },
    brown: {
      "50": "#efebe9",
      "100": "#d7ccc8",
      "200": "#bcaaa4"
    },
    grey: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee"
    },
    blueGrey: {
      "50": "#eceff1",
      "100": "#cfd8dc",
      "200": "#b0bec5"
    }
  }
  var colorList = colors[pickRandomProperty(colors)]
  var newColorKey = pickRandomProperty(colorList)
  var newColor = colorList[newColorKey]
  return newColor
}
