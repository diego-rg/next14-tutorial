import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

export default function Links() {
    const session = true;
    const isAdmin = true;

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    return (
        <div className={styles.links}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
        </div>
    );
};
