export interface GameParams {
    id: string;
    title: string;
    bannerURL: string;
}


export declare global{
    namespace ReactNavigation{
        interface RootParamlist{
            home: undefined;
            game: GameParams;
        }
    }
}