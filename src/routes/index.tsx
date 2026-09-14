import { createFileRoute } from "@tanstack/react-router";
import { LinkInBio } from "@/components/link-in-bio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <LinkInBio />;
}
