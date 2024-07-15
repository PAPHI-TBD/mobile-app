// types.ts
export type RootStackParamList = {
    SplashPage: undefined;
    SplashPageButtons: undefined;
    LoginPage: undefined;
    RegistrationPage: { fullName?: string };
    Birthday: { fullName: string, date?: Date };
    Gender: { fullName: string, date: Date, gender?: string };
    Username: { fullName: string, date: Date, gender: string, username?: string };
    Email: { fullName: string, date: Date, gender: string, username: string, email?: string };
    Password: { fullName: string, date: Date, gender: string, username: string, email: string, password?: string };
    MainTabs: undefined;
    Attendees: undefined; // fix
    EventPage: {data ?: any}; // fix
    Message: { user: any }
};
