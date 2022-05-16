import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function Rapport_template() {
  const docs = [
    { uri: require("../../../src/a.pdf") },
    
  ];

  return (
    <div className="aa">
      <h1>elee</h1>
      <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false
          }
        }}
        style={{ height: 1000 }}
      />
    </div>
  );
}
