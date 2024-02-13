import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { IJwtPayload, IUserJWT } from "../common/types/users";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                JwtStrategy.extractJWTFromCookie
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>("secret")
        });
    }

    private static extractJWTFromCookie(req: Request): string | null {
        if (req.cookies && req.cookies.access_token) {
            return req.cookies.access_token;
        }
        return null;
    }

    async validate(payload: IJwtPayload): Promise<IUserJWT> {
        return { ...payload.user };
    }
}
