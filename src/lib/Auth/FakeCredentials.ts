import type { Provider } from "@auth/core/providers";
import Credentials from "@auth/core/providers/credentials";
import type { User } from "@auth/core/types";

export default function FakeProvider(): Provider {
    return Credentials({
        credentials: {
            username: { label: "Username" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials, request): Promise<User | null> {
            const username: string = credentials.username as string ?? "test";
            return {
                id: "-1",
                name: username,
                email: `${username}@test.com`,
            };
        }
    })
};