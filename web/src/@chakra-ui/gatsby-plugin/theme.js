import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Brygada 1918', serif",
  },
  colors: {
    default: '#00D66F',
    brand: {
      50: '#BDFFDF',
      100: '#A3FFD3',
      200: '#70FFBA',
      300: '#3DFFA2',
      400: '#0AFF89',
      500: '#00D66F',
      600: '#00A355',
      700: '#00703A',
      800: '#003D20',
      900: '#000A05',
    },
  },
  styles: {
    global: {
      body: {
        color: "brand.900",
        bg: "white",
        a: {
          color: "brand.600",
          _hover: {
            color: "brand.500"
          }
        }
      }
    }
  }
})

export default theme;
