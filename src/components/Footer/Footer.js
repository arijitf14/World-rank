import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>© Arijit Bose</div>
      <div className={styles.title}>You may look deeper into who i am!!</div>
      <div className={styles.container}>
        <div className={styles.footer}>
          <Link href="https://www.facebook.com/campaign/landing.php?&campaign_id=973072061&extra_1=s%7Cc%7C256741341320%7Ce%7Cfacebook%7C&placement&creative=256741341320&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D973072061%26adgroupid%3D54006406691%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-297690534863%26loc_physical_ms%3D1007828%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=EAIaIQobChMIkq7Wm-aC8AIVqodLBR0LzAlgEAAYASAAEgJvl_D_BwE">
            <img src={"/icons/fb.png"} alt="Facebook" />
          </Link>
        </div>
        <div className={styles.footer}>
          <Link href="#">
            <img src={"/icons/ig.png"} alt="Instagram" />
          </Link>
        </div>
        <div className={styles.footer}>
          <Link href="#">
            <img src={"/icons/li.png"} alt="LinkedIn" />
          </Link>
        </div>
        <div className={styles.footer}>
          <Link href="#">
            <img src={"/icons/tw.png"} alt="Twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
