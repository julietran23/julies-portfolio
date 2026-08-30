import { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M6 11L12 5L18 11" />
      </svg>
    </button>
  );
}

export default ScrollToTop;