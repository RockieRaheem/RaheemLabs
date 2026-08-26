"use client";

import { useEffect, useRef, useState } from "react";

export function ExperienceLayer() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const items = document.querySelectorAll<HTMLElement>(
      ".section, .project-card, .case-section, .about-block",
    );
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );
    items.forEach((item) => observer.observe(item));

    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--page-progress", String(distance > 0 ? window.scrollY / distance : 0));
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      root.classList.remove("motion-ready");
      if (timer.current) clearInterval(timer.current);
      void audioContext.current?.close();
    };
  }, []);

  const playBeat = (context: AudioContext) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(180, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(72, context.currentTime + 0.12);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.06, context.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.18);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
  };

  const toggleSound = async () => {
    if (soundEnabled) {
      if (timer.current) clearInterval(timer.current);
      timer.current = null;
      setSoundEnabled(false);
      return;
    }
    const context = audioContext.current ?? new AudioContext();
    audioContext.current = context;
    await context.resume();
    playBeat(context);
    timer.current = setInterval(() => playBeat(context), 1800);
    setSoundEnabled(true);
  };

  return (
    <div className="experience-controls" aria-label="Experience controls">
      <button type="button" onClick={toggleSound} aria-pressed={soundEnabled}>
        <span className={soundEnabled ? "sound-wave is-playing" : "sound-wave"} aria-hidden="true">
          <i /><i /><i /><i />
        </span>
        Sound {soundEnabled ? "on" : "off"}
      </button>
      <span className="experience-controls__progress" aria-hidden="true" />
    </div>
  );
}

