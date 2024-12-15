import { motion } from "framer-motion";

export default function Parent(props) {
  const className = props.className;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div style={{ backgroundColor: "#080f18" }}>
        <div className={className}>{props.children}</div>
      </div>
    </motion.div>
  );
}
