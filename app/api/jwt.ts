import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { NextRequest } from "next/server";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET); // Secret key

export const generateAccessToken = async (login: string) => {
  if (!JWT_SECRET) return null;

  const jwt = await new SignJWT({ login })
    .setProtectedHeader({ alg: "HS256" }) // Set the algorithm to HS256
    .setIssuedAt() // Set "iat" claim
    .setExpirationTime("1h") // Set "exp" claim to expire in 1 hour
    .sign(JWT_SECRET); // Sign the token with the secret key

  return jwt;
};

export const decodeAccessToken = async (
  req: NextRequest
): Promise<JWTPayload | null> => {
  if (!JWT_SECRET) return null;

  try {
    const access_token = req.nextUrl.searchParams.get("access_token");
    const authorization = req.headers.get("authorization");
    let accessToken = (access_token as string) || authorization || "";
    if (accessToken.startsWith("Bearer")) {
      accessToken = accessToken.replace("Bearer ", "");
    }

    console.log("accessToken", accessToken);

    const decoded = await jwtVerify(accessToken, JWT_SECRET);

    console.log("decoded payload", decoded.payload);
    return decoded.payload;
    // eslint-disable-next-line
  } catch (error) {
    console.error(error);
    return null;
  }
};
