"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/AdminNav";
import { Mail, Building2, DollarSign, Calendar, Trash2, Eye, EyeOff, Search } from "lucide-react";

interface ContactSubmission {
    id: string;
    name: string;
    email: string;
    businessName: string;
    budget: string;
    message: string;
    read: boolean;
    createdAt: string;
}

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login");
        }
    }, [status, router]);

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            const response = await fetch("/api/admin/submissions");
            if (response.ok) {
                const data = await response.json();
                setSubmissions(data);
            }
        } catch (error) {
            console.error("Error fetching submissions:", error);
        } finally {
            setLoading(false);
        }
    };

    const toggleRead = async (id: string, currentReadStatus: boolean) => {
        try {
            const response = await fetch("/api/admin/submissions", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, read: !currentReadStatus }),
            });

            if (response.ok) {
                setSubmissions(
                    submissions.map((sub) =>
                        sub.id === id ? { ...sub, read: !currentReadStatus } : sub
                    )
                );
            }
        } catch (error) {
            console.error("Error updating submission:", error);
        }
    };

    const deleteSubmission = async (id: string) => {
        if (!confirm("Are you sure you want to delete this submission?")) return;

        try {
            const response = await fetch(`/api/admin/submissions?id=${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setSubmissions(submissions.filter((sub) => sub.id !== id));
                setSelectedSubmission(null);
            }
        } catch (error) {
            console.error("Error deleting submission:", error);
        }
    };

    const filteredSubmissions = submissions.filter(
        (sub) =>
            sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.businessName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (status === "loading" || loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <div className="min-h-screen bg-background">
            <AdminNav />

            <div className="container mx-auto px-6 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-sm text-muted-foreground mb-2">Total Submissions</h3>
                        <p className="text-3xl font-bold">{submissions.length}</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-sm text-muted-foreground mb-2">Unread</h3>
                        <p className="text-3xl font-bold text-primary">
                            {submissions.filter((s) => !s.read).length}
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-sm text-muted-foreground mb-2">Read</h3>
                        <p className="text-3xl font-bold text-green-500">
                            {submissions.filter((s) => s.read).length}
                        </p>
                    </div>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or business..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                {/* Submissions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Submissions List */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold mb-4">
                            Submissions ({filteredSubmissions.length})
                        </h2>
                        {filteredSubmissions.length === 0 ? (
                            <div className="bg-white/5 p-8 rounded-xl border border-white/10 text-center">
                                <p className="text-muted-foreground">No submissions found</p>
                            </div>
                        ) : (
                            filteredSubmissions.map((submission) => (
                                <div
                                    key={submission.id}
                                    onClick={() => setSelectedSubmission(submission)}
                                    className={`bg-white/5 p-6 rounded-xl border cursor-pointer transition-all ${selectedSubmission?.id === submission.id
                                            ? "border-primary"
                                            : "border-white/10 hover:border-white/20"
                                        } ${!submission.read ? "bg-primary/5" : ""}`}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="font-bold text-lg">{submission.name}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {submission.businessName}
                                            </p>
                                        </div>
                                        {!submission.read && (
                                            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                                                New
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Mail className="w-4 h-4" />
                                            {submission.email}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DollarSign className="w-4 h-4" />
                                            {submission.budget}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                        {submission.message}
                                    </p>
                                    <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(submission.createdAt).toLocaleDateString()} at{" "}
                                        {new Date(submission.createdAt).toLocaleTimeString()}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Submission Detail */}
                    <div className="sticky top-8">
                        {selectedSubmission ? (
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <div className="flex items-start justify-between mb-6">
                                    <h2 className="text-2xl font-bold">Submission Details</h2>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() =>
                                                toggleRead(selectedSubmission.id, selectedSubmission.read)
                                            }
                                            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                                            title={selectedSubmission.read ? "Mark as unread" : "Mark as read"}
                                        >
                                            {selectedSubmission.read ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </button>
                                        <button
                                            onClick={() => deleteSubmission(selectedSubmission.id)}
                                            className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors text-red-500"
                                            title="Delete submission"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="text-sm text-muted-foreground">Name</label>
                                        <p className="text-lg font-semibold">{selectedSubmission.name}</p>
                                    </div>

                                    <div>
                                        <label className="text-sm text-muted-foreground">Email</label>
                                        <a
                                            href={`mailto:${selectedSubmission.email}`}
                                            className="text-lg font-semibold text-primary hover:underline block"
                                        >
                                            {selectedSubmission.email}
                                        </a>
                                    </div>

                                    <div>
                                        <label className="text-sm text-muted-foreground">Business Name</label>
                                        <p className="text-lg font-semibold">
                                            {selectedSubmission.businessName}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="text-sm text-muted-foreground">Budget Range</label>
                                        <p className="text-lg font-semibold">{selectedSubmission.budget}</p>
                                    </div>

                                    <div>
                                        <label className="text-sm text-muted-foreground">Message</label>
                                        <p className="text-base leading-relaxed mt-2 whitespace-pre-wrap">
                                            {selectedSubmission.message}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="text-sm text-muted-foreground">Submitted</label>
                                        <p className="text-base">
                                            {new Date(selectedSubmission.createdAt).toLocaleDateString("en-GB", {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}{" "}
                                            at {new Date(selectedSubmission.createdAt).toLocaleTimeString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white/5 p-12 rounded-xl border border-white/10 text-center">
                                <Mail className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                                <p className="text-muted-foreground">
                                    Select a submission to view details
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
