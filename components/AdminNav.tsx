"use client";

import { signOut, useSession } from "next-auth/react";
import { LogOut, User } from "lucide-react";

export default function AdminNav() {
    const { data: session } = useSession();

    return (
        <nav className="bg-white/5 border-b border-white/10 px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold font-heading">BuildIQ Admin</h1>
                    <p className="text-sm text-muted-foreground">Contact Submissions Dashboard</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <User className="w-4 h-4" />
                        <span>{session?.user?.email}</span>
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}
