import { useState } from "react";

import Container from "@/components/layout/Container";

import BookButton from "@/components/ui/BookButton";

import AuthModal from "@/components/cards/authModal";

import cta from "@/assets/images/cta.jpeg";

export default function CTA() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <section className="bg-background py-20 overflow-hidden w-full">

        <Container fluid>
          <div className="w-full">

            <div
              className="
                relative overflow-hidden
                rounded-[32px]
                bg-card
                grid lg:grid-cols-2
                items-center
                w-full
              "
            >

              {/* GOLD GLOW */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A24C]/10 blur-[120px] rounded-full pointer-events-none" />

              {/* LEFT CONTENT */}
              <div className="relative z-10 p-10 lg:p-16 space-y-8">

                <p className="text-sm uppercase tracking-[0.3em] text-[#D4A24C]">
                  Book Appointment
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  Ready for a new look?
                  Book your appointment now
                  let us take care of you
                </p>

                {/* CTA BUTTON */}
                <div className="flex flex-col sm:flex-row gap-5">

                  <BookButton
                    className="w-fit"
                    onRequireAuth={() => setShowAuth(true)}
                  >
                    Book Appointment
                  </BookButton>

                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[320px] lg:h-[380px] w-full">

                <img
                  src={cta}
                  alt="Luxury Salon"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

              </div>

            </div>

          </div>
        </Container>

      </section>

      {/* AUTH MODAL */}
      <AuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
      />
    </>
  );
}