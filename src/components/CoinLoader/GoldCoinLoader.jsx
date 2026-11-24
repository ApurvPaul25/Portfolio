
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./GoldCoinLoader.css";

export default function GoldCoinLoader() {
  const rootRef = useRef(null);
  const coinRef = useRef(null);
  const backpackRef = useRef(null);
  const sparkleRef = useRef(null);
  const tooltipRef = useRef(null);

  const [visitor, setVisitor] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function registerVisitor() {
      try {
        const response = await fetch("/api/visitor/coin-drop", {
          method: "POST",
          credentials: "include",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Visitor API request failed");
        }

        const data = await response.json();

        if (data.isNewVisitor) {
          setVisitor(data.visitorNumber);
          setShowAnimation(true);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Visitor registration failed:", error);
        }
      }
    }

    registerVisitor();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!showAnimation || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const coin = coinRef.current;
      const backpack = backpackRef.current;
      const sparkle = sparkleRef.current;

      gsap.set(coin, {
        x: 0,
        y: -18,
        scale: 1,
        rotationY: 0,
        rotationZ: -12,
        opacity: 1,
        transformPerspective: 500,
        transformOrigin: "50% 50%",
      });

      gsap.set(backpack, {
        y: 0,
        rotation: 0,
        scale: 1,
      });

      gsap.set(sparkle, {
        opacity: 0,
        scale: 0.3,
      });

      const timeline = gsap.timeline({
        onComplete: () => {
          setShowTooltip(true);
        },
      });

      timeline.to(coin, {
        x: 22,
        y: 48,
        scale: 0.65,
        rotationY: 1080,
        rotationZ: 20,
        duration: 1.15,
        ease: "power2.in",
      });

      timeline.to(
        coin,
        {
          y: 58,
          scale: 0.15,
          opacity: 0,
          duration: 0.18,
          ease: "power2.in",
        },
        "-=0.12"
      );


      timeline.to(
        backpack,
        {
          y: -5,
          rotation: -3,
          duration: 0.12,
          ease: "power2.out",
        },
        "-=0.12"
      );

      timeline.to(backpack, {
        y: 0,
        rotation: 0,
        duration: 0.38,
        ease: "elastic.out(1, 0.4)",
      });

      timeline.to(
        sparkle,
        {
          opacity: 1,
          scale: 1.2,
          duration: 0.16,
          ease: "back.out(2)",
        },
        "-=0.3"
      );

      timeline.to(sparkle, {
        opacity: 0,
        scale: 0.7,
        duration: 0.35,
      });
    }, rootRef);

    return () => ctx.revert();
  }, [showAnimation]);


  useEffect(() => {
    if (!showTooltip || !tooltipRef.current) return;

    const tooltip = tooltipRef.current;

    const moveX = gsap.quickTo(tooltip, "x", {
      duration: 0.16,
      ease: "power2.out",
    });

    const moveY = gsap.quickTo(tooltip, "y", {
      duration: 0.16,
      ease: "power2.out",
    });

    const handleMouseMove = (event) => {
      const offset = 18;
      const maxX = window.innerWidth - tooltip.offsetWidth - 8;
      const maxY = window.innerHeight - tooltip.offsetHeight - 8;

      const x = Math.max(8, Math.min(event.clientX + offset, maxX));
      const y = Math.max(8, Math.min(event.clientY + offset, maxY));

      moveX(x);
      moveY(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    moveX(Math.min(24, window.innerWidth - 180));
    moveY(Math.min(24, window.innerHeight - 50));

    gsap.fromTo(
      tooltip,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );

    const hideTimer = gsap.delayedCall(5, () => {
      gsap.to(tooltip, {
        opacity: 0,
        scale: 0.96,
        duration: 0.3,
        onComplete: () => setShowTooltip(false),
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hideTimer.kill();
      moveX.tween.kill();
      moveY.tween.kill();
    };
  }, [showTooltip]);

  if (!showAnimation) return null;

  return (
    <>
      <div
        ref={rootRef}
        className="gold-loader"
        aria-hidden="true"
      >
        <div ref={backpackRef} className="gold-loader__backpack">
          <img src="/bebas/public/backpack.png" alt="" />
        </div>

        <div className="gold-loader__coin-path">
          <div ref={coinRef} className="gold-loader__coin">
            <span>₹</span>
          </div>
        </div>

        <span ref={sparkleRef} className="gold-loader__shine">
          ✦
        </span>
      </div>

      {showTooltip && (
        <div
          ref={tooltipRef}
          className="visitor-cursor-tooltip"
          role="status"
        >
          You are visitor #{visitor?.toLocaleString("en-IN")}
        </div>
      )}
    </>
  );
}
