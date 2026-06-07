// app/clients/page.jsx — Server Component
import ClientsContent from "@/components/sections/clients/ClientsContent";

export const metadata = {
    title: "Our Clients",
    description: "Amit Steel & Cement — trusted by 6 Karnataka government bodies and India's top private builders. The steel behind Karnataka's most ambitious projects.",
};

export default function ClientsPage() {
    return <ClientsContent />;
}