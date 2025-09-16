import React, { useEffect, useState } from "react";

function GradientSelector({ onSelect }) {
  const gradients = [
    { name: "Sunset", value: "linear-gradient(90deg, #ff7e5f, #feb47b)" },
    { name: "Ocean Blue", value: "linear-gradient(90deg, #00c6ff, #0072ff)" },
    { name: "Purple Dream", value: "linear-gradient(90deg, #a18cd1, #fbc2eb)" },
    { name: "Green Fresh", value: "linear-gradient(90deg, #56ab2f, #a8e063)" }
  ];

  const [topOffset, setTopOffset] = useState(92); // default fallback

  useEffect(() => {
    function updateOffset() {
      const hdr = document.querySelector(".site-header");
      const hdrHeight = hdr ? Math.ceil(hdr.getBoundingClientRect().height) : 0;
      // Add a small gap (12px)
      setTopOffset(hdrHeight ? hdrHeight + 12 : 92);
    }

    updateOffset();
    window.addEventListener("resize", updateOffset);
    // If layout changes dynamically, observe header size too
    const hdrEl = document.querySelector(".site-header");
    let ro;
    if (hdrEl && window.ResizeObserver) {
      ro = new ResizeObserver(updateOffset);
      ro.observe(hdrEl);
    }

    return () => {
      window.removeEventListener("resize", updateOffset);
      if (ro && hdrEl) ro.unobserve(hdrEl);
    };
  }, []);

  // inline style for top only when fixed
  const fixedStyle = {
    top: `${topOffset}px`
  };

  return (
    <div
      className="gradient-selector"
      style={fixedStyle}
      aria-label="Gradient selector"
    >
      <label style={{ display: "block", color: "#222", marginBottom: 8, fontWeight: 600 }}>
        Select Website Gradient
      </label>

      <select
        onChange={(e) => onSelect && onSelect(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid rgba(0,0,0,0.12)",
          fontSize: 15,
          background: "#fff"
        }}
        defaultValue={gradients[0].value}
      >
        {gradients.map((g, i) => (
          <option key={i} value={g.value}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GradientSelector;
