// types.ts
export type RootStackParamList = {
    SplashPage: undefined;
    SplashPageButtons: undefined;
    LoginPage: undefined;
    RegistrationPage: undefined;
    Birthday: { fullName: string };
    Gender: { fullName: string, date: Date };
    Username: {fullName: string, date: Date, gender: string};
    Email: {fullName: string, date: Date, gender: string, username: string};
    Password: {fullName: string, date: Date, gender: string, username: string, email: string};
    MainTabs: undefined;
};
