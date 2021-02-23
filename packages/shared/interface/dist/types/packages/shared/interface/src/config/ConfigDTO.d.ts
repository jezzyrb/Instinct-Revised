export interface ConfigDTO {
    siteName: string;
    siteLink: string;
    siteBeta: boolean;
    emulatorIP: string;
    emulatorPort: string;
    nitroURL: string;
    loadingMessage: string;
    rankBadgeURL: string;
    groupBadgeURL: string;
    sendGridAPIKey: string;
    sendGridAPISender: string;
    sendGridForgotPasswordTemplate: string;
    googleRecaptchaClientKey: string;
    websocketEnabled: boolean;
    websocketIP: string;
    websocketPort: string;
    discordURL: string;
    maintenanceEnabled: boolean;
}
export declare const exampleConfigDTO: ConfigDTO;