import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "00fd27dd-f884-489d-92ae-f9bbadd3e88e",
    authority: "https://login.microsoftonline.com/8413142d-08df-49ec-853f-a5beded88db9",
    redirectUri: "https://unityazureconnect.azurewebsites.net/",
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);