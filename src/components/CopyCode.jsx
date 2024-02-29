import { useState, useEffect } from "react";

function CopyCode(props) {
  const [code, setCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setCode(props.code.toString());
  }, []);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
  };

  return (
    <div className="flex gap-4 mt-4">
      <button className="bg-[#DCEF64] h-10 w-10 rounded-lg text-[#1A1A1C]" onClick={ handleCopyClick }>
        { isCopied ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-copy"></i> }
      </button>
      <pre className="flex items-center">
        <code>{ code }</code>
      </pre>
    </div>
  );
}

export default CopyCode;
