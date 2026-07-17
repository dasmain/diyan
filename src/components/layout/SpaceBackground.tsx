import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function SpaceBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      <div className="nebula-glow absolute inset-0" />
      <StarsBackground
        starDensity={0.00018}
        className="opacity-80"
      />
      <ShootingStars
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        minDelay={2000}
        maxDelay={6000}
      />
    </div>
  );
}
