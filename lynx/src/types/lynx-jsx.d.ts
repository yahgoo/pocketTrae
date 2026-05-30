// Type declarations for Lynx JSX elements
// These augment the JSX namespace to support Lynx-specific elements

declare namespace LynxJSX {
  interface IntrinsicElements {
    // Layout container - equivalent to div
    view: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      style?: React.CSSProperties | Record<string, any>;
    };
    
    // Text element - equivalent to span/p
    text: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      style?: React.CSSProperties | Record<string, any>;
    };
    
    // Image element
    image: React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    > & {
      style?: React.CSSProperties | Record<string, any>;
    };
    
    // Input element for text entry
    input: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > & {
      style?: React.CSSProperties | Record<string, any>;
    };
    
    // Scroll view for scrolling content
    'scroll-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      style?: React.CSSProperties | Record<string, any>;
      'scroll-x'?: boolean;
      'scroll-y'?: boolean;
    };
    
    // List view for long lists
    'list-view': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      style?: React.CSSProperties | Record<string, any>;
    };
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends LynxJSX.IntrinsicElements {}
  }
}

// Make this file a module
export {};
