import Image from "next/image";
import styles from "./page.module.css";
// import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="black text-foreground bg-background">
      <section className={styles.landingSection}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src="/media.png"
            alt="Logo"
            width={1500}
            height={1500}
            className={styles.logo}
          />
        </div>
      </section>
      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <h1>About Us</h1>
        <p>Welcome to our site! Here is more information about us.</p>
      </section>
    </div>
  );
}
