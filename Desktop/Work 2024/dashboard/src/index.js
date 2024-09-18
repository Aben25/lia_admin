import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  SisenseContextProvider,
  ThemeProvider,
  ThemeSettings,
} from "@sisense/sdk-ui";
import { AiContextProvider } from "@sisense/sdk-ui/ai";
const sisenseContextProps = {
  url: "https://artba.sisense.com",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWQ1YzBjZmRkYWQxZGE5MTUxYjNjOTE5IiwiYXBpU2VjcmV0IjoiMTYxNmQxYWUtOGFiMS03YzcxLTAxZjYtZTViMmY5M2Y1YmZlIiwic3NvVG9rZW4iOiIwNTQ0NzI0YS05YTI0LTQ0ZDItMjEyOC1hNGM4NWY2OGUzY2MiLCJhbGxvd2VkVGVuYW50cyI6WyI2MzA4NzAyNTEwN2M0YjAwMWJkYmNkOWIiXSwidGVuYW50SWQiOiI2MzA4NzAyNTEwN2M0YjAwMWJkYmNkOWIifQ.0YggGIMxLaK6VmmSvtWFLkNlDL7CjodAWxV6MAN2qFU",
};

const theme: ThemeSettings = {
  // aiChat: {
  //   backgroundColor: "#FFFFFF",
  //   primaryTextColor: "#333333",
  //   secondaryTextColor: "#666666",
  //   primaryFontSize: ["14px", "20px"],
  //   body: {
  //     gapBetweenMessages: "10px",
  //     paddingBottom: "20px",
  //     paddingLeft: "20px",
  //     paddingRight: "20px",
  //     paddingTop: "20px",
  //   },
  //   border: "1px solid #E0E0E0",
  //   borderRadius: "8px",
  //   clickableMessages: {
  //     backgroundColor: "#F5F5F5",
  //     border: "1px solid #E0E0E0",
  //     borderGradient: ["#E0E0E0", "#F0F0F0"],
  //     textColor: "#333333",
  //     hover: {
  //       backgroundColor: "#E0E0E0",
  //       textColor: "#000000",
  //     },
  //   },
  //   dataTopics: {
  //     backgroundColor: "#F5F5F5",
  //     items: {
  //       backgroundColor: "#FFFFFF",
  //       textColor: "#333333",
  //     },
  //   },
  //   dropup: {
  //     backgroundColor: "#FFFFFF",
  //     borderRadius: "8px",
  //     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  //     headers: {
  //       textColor: "#333333",
  //       hover: {
  //         backgroundColor: "#F5F5F5",
  //       },
  //     },
  //     items: {
  //       textColor: "#333333",
  //       hover: {
  //         backgroundColor: "#F5F5F5",
  //       },
  //     },
  //   },
  //   footer: {
  //     paddingBottom: "10px",
  //     paddingLeft: "10px",
  //     paddingRight: "10px",
  //     paddingTop: "10px",
  //   },
  //   header: {
  //     backgroundColor: "#F5F5F5",
  //     textColor: "#333333",
  //   },
  //   icons: {
  //     color: "#333333",
  //     feedbackIcons: {
  //       hoverColor: "#000000",
  //     },
  //   },
  //   input: {
  //     backgroundColor: "#FFFFFF",
  //     focus: {
  //       outlineColor: "#2196f3",
  //     },
  //   },
  //   suggestions: {
  //     backgroundColor: "#FFFFFF",
  //     border: "1px solid #E0E0E0",
  //     borderGradient: ["#E0E0E0", "#F0F0F0"],
  //     borderRadius: "8px",
  //     gap: "10px",
  //     textColor: "#333333",
  //     hover: {
  //       backgroundColor: "#F5F5F5",
  //       textColor: "#000000",
  //     },
  //     loadingGradient: ["#E0E0E0", "#F0F0F0"],
  //   },
  //   systemMessages: {
  //     backgroundColor: "#F5F5F5",
  //   },
  //   tooltips: {
  //     backgroundColor: "#FFFFFF",
  //     boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  //     textColor: "#333333",
  //   },
  //   userMessages: {
  //     backgroundColor: "#F5F5F5",
  //   },
  // },
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    panelBackgroundColor: "rgba(255, 255, 255, 0)",
    textColor: "#333333",
  },
  general: {
    brandColor: "#2196f3",
    backgroundColor: "#FFFFFF",
    primaryButtonTextColor: "white",
  },
  palette: {
    variantColors: ["#2196f3", "#0d47a1", "#050A30", "#7EC8E3"],
  },
 
  typography: {
    fontFamily: "sans-serif",
  },
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SisenseContextProvider {...sisenseContextProps}>
    <AiContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AiContextProvider>{" "}
  </SisenseContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
