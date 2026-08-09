import { motion } from "framer-motion";

// Splits text into words that rise from behind a clip mask, staggered.
// Use for headings. `as` picks the wrapper tag; children must be a string.
export default function TextReveal({
  text,
  as = "span",
  className = "",
  delay = 0,
  once = true,
}) {
  const words = String(text).split(" ");
  const Tag = motion[as] ?? motion.span;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.12em" }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "115%" },
              show: {
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
