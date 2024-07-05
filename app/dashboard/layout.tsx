import React from "react";
import SideNav from "../ui/dashboard/sidenav";
import styles from "../Styles/Views/Dashboard/dashboard.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.page_container}>
            <div className={styles.menu_container}>
                <SideNav />
            </div>
            <div>
                {children}
            </div>
        </div>

    )
}