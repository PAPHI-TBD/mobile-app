// types.ts
export type RootStackParamList = {
    SplashPage: undefined;
    SplashPageButtons: undefined;
    LoginPage: undefined;
    RegistrationPage: undefined;
    Birthday: { fullName: string };
    Gender: { fullName: string, date: Date };
    Password: { fullName: string, date: Date };
    MainTabs: undefined;
};
