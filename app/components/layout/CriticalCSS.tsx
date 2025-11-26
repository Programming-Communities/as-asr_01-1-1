export function CriticalCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical Above-the-Fold CSS */
          :root {
            --background: #ffffff;
            --foreground: #171717;
            --header-bg: #991b1b;
            --header-text: #ffffff;
          }
          
          [data-theme="dark"] {
            --background: #1a1a1a;
            --foreground: #f5f5f5;
            --header-bg: #2d2d2d;
            --header-text: #f5f5f5;
          }
          
          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          
          body {
            font-family: system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 0;
            background: var(--background);
            color: var(--foreground);
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100vh;
          }
          
          .lcp-optimize {
            content-visibility: auto;
            contain-intrinsic-size: 400px;
          }
          
          /* Your existing critical CSS */
        `
      }}
    />
  );
}