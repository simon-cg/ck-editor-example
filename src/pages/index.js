import React from "react";

import styles from "./index.module.scss";
import Uploader from "../components/uploader";

const index = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
			<Uploader /></div>
		</div>
	);
};

export default index;
