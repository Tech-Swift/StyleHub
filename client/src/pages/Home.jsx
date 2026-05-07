import Container from "../components/layout/Container";
import Hero from "@/features/home/Hero";

export default function Home() {
  return (
    <section className="py-20">
      <Container>
        <Hero />
      </Container>
    </section>
  );
}