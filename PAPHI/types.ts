
export interface User {
    id: string;
    name: string;
    avatar: any;
  }
  export interface Comment {
    user: User;
    comment: string;
  }
  
  export interface Post {
    id: string;
    communityName: string;
    content: string;
    user: User;
    image?: string;
    timestamp: number;
    likes: number;
    comments: Comment[];
    isLiked: boolean;
  }
  export interface Event {
    image: any;
    title: string;
    date: string;
    location: string;
    isPublic: boolean;
    isFeatured: boolean;
    attendees: User[];
  }
  
  export interface Community {
    image: any;
    name: string;
    isPublic: boolean;
    members: number;
    total: number;
    communityEvents: Event[];
    category: string;
    location: string;
    isRecommended: boolean;
    isTrending: boolean;
    about: string;
  }
  export type RootStackParamList = {
    SplashPage: undefined;
    SplashPageButtons: undefined;
    LoginPage: undefined;
    RegistrationPage: { fullName?: string };
    Birthday: { fullName: string; date?: Date };
    Gender: { fullName: string; date: Date; gender?: string };
    Username: { fullName: string; date: Date; gender: string; username?: string };
    Email: { fullName: string; date: Date; gender: string; username: string; email?: string };
    Password: { fullName: string; date: Date; gender: string; username: string; email: string; password?: string };
    MainTabs: undefined;
    Attendees: undefined; // fix
    EventPage: { data?: any }; // fix
    CommunityDetail: { item: Community };
  };
  