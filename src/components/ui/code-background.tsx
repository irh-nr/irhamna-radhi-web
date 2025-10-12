"use client";

export function CodeBackground() {
  return (
    <div className="flex inset-0 -z-1 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 text-muted-foreground/10 font-mono text-sm">
        <pre>{`const Developer = "Irhamna Radhi";`}</pre>
      </div>
      <div className="absolute top-40 right-20 text-muted-foreground/10 font-mono text-sm">
        <pre>{`function buildAmazingThings() {`}</pre>
      </div>
      <div className="absolute bottom-40 left-20 text-muted-foreground/5 font-mono text-sm">
        <pre>{`  return creativity + code;`}</pre>
      </div>
      <div className="absolute bottom-20 right-10 text-muted-foreground/10 font-mono text-sm">
        <pre>{`}`}</pre>
      </div>
    </div>
  );
}
