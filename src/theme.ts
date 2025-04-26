import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { defineTextStyles } from "@chakra-ui/react";

const preahvihearTextStyle = defineTextStyles({
  preahvihear: {
    description: "The body text style - used in paragraphs",
    value: {
      fontFamily: "Preahvihear",
      fontWeight: "400",
    },
  },
});

const config = defineConfig({
  theme: {
    textStyles: preahvihearTextStyle,
    tokens: {
      colors: {
        "blueSky.100": { value: "#D6F0FE" },
        "blueSky.200": { value: "#ADE0FD" },
        "blueSky.300": { value: "#85D0FC" },
        "blueSky.400": { value: "#5CC0FB" },
        "blueSky.500": { value: "#1A9BF8" },
        "blueSky.600": { value: "#157DCA" },
        "blueSky.700": { value: "#10609B" },
        "blueSky.800": { value: "#0B426D" },
        primary: {
          50: { value: "#EEEAF5" }, // lightest
          100: { value: "#D2C9E3" },
          200: { value: "#B3A6D2" },
          300: { value: "#927EC0" },
          400: { value: "#745DB0" },
          500: { value: "#1A0B2E" }, // base
          600: { value: "#150926" },
          700: { value: "#11071E" },
          800: { value: "#0C0517" },
          900: { value: "#080311" }, // darkest
        },
        background: {
          50: { value: "#F2EEF6" }, // lightest
          100: { value: "#D8D0E4" },
          200: { value: "#B8ADD0" },
          300: { value: "#9687BB" },
          400: { value: "#7563A7" },
          500: { value: "#11071F" }, // base
          600: { value: "#0E0619" },
          700: { value: "#0A0513" },
          800: { value: "#07030D" },
          900: { value: "#040208" }, // darkest
        },
      },
      fonts: {
        body: { value: "Poppins, sans-serif" },
      },
    },
    layerStyles: {
      glass: {
        bg: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "xl",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
