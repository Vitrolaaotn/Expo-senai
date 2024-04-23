import { useColorScheme } from "react-native";

interface Cores {
  bgprimaryvariant: string;
  bgPrimary: string;
  bgSecondary: string;
  bgInfo?: string;
  textColor: string;
  bgPrimaryVariant: string; 
  textcolorvariant: string;
}

const lightTheme: Cores = {
    bgPrimary: "#ffffff",
    bgSecondary: "#ff0000",
    bgInfo: "#f5f5f5",
    textColor: "#000000",
    bgprimaryvariant: "#F5F5F5",
    textcolorvariant: "#595959",
    bgPrimaryVariant: ""
};

const darkTheme: Cores = {
    bgPrimary: "#240707",
    bgSecondary: "#ff0000",
    textColor: "#ffffff",
    bgPrimaryVariant: "#3A2828",
    textcolorvariant: "#CBCBCB",
    bgprimaryvariant: ""
};

export default function useTheme(): Cores {
  const scheme = useColorScheme();

  return scheme === "dark" ? darkTheme : lightTheme;
}