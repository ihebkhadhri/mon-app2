import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function App() {
  const docs = [
    { uri: require("./a.pdf") },
    
  ];

  return (
    <div className="App">
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
