export type IJwtPayload = {
    user: IUserJWT;
    iat: number;
    exp: number;
};

export type IUserJWT = {
    email: string;
    role: string;
    id: string;
};
