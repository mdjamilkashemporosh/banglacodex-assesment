type Role = "admin" | "member" | "viewer" | string;

export interface User {
    name: string;
    role: Role;
}