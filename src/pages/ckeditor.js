import React, { useState, useEffect, useRef } from "react";

import styles from "./editor.module.scss";

export default function CKEditor() {
	const editorRef = useRef();
	const [editorLoaded, setEditorLoaded] = useState(false);
	const { CKEditor, ClassicEditor } = editorRef.current || {};

	useEffect(() => {
		editorRef.current = {
			CKEditor: require("@ckeditor/ckeditor5-react"),
			ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
		};
		setEditorLoaded(true);
	}, []);

	return editorLoaded ? (
		<>
			<div className={styles.container}>
				<div className={styles.editor}>
					<CKEditor
						editor={ClassicEditor}
						data="<p>Draft your ZunderZump document...</p>"
						onInit={(editor) => {
							// You can store the "editor" and use when it is needed.
							console.log("Editor is ready to use!", editor);
						}}
						onChange={(event, editor) => {
							const data = editor.getData();
							console.log({ event, editor, data });
						}}
					/>
				</div>
			</div>
			{/* <div className={styles.container}>
    <h2>HTML Preview</h2>
    <p>{editorRef}</p>
    </div> */}
		</>
	) : (
		<div>Editor loading</div>
	);
}
