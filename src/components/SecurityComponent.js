// SecurityComponent.js
import { useEffect } from 'react';

const SecurityComponent = () => {
  useEffect(() => {
    // Disable right click
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Disable keyboard shortcuts for developer tools
    document.addEventListener('keydown', (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U') ||
        (e.ctrlKey && e.key === 'S') ||
        (e.metaKey && e.altKey && e.key === 'I')
      ) {
        e.preventDefault();
      }
    });

    // Prevent opening dev tools by other methods
    (function() {
      const devtools = /./;
      devtools.toString = function() {
        document.body.innerHTML = '<h1 style="text-align:center;margin-top:20%">Developer Tools Disabled</h1>';
        return '';
      }
      console.log('%c', devtools);
    })();

    // Detect devtools opening
    let devtoolsOpen = false;
    const threshold = 160;
    const emitEvent = (state) => {
      if (state !== devtoolsOpen) {
        devtoolsOpen = state;
        if (devtoolsOpen) {
          document.body.innerHTML = '<h1 style="text-align:center;margin-top:20%">Developer Tools Disabled</h1>';
        }
      }
    };
    
    setInterval(() => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      emitEvent(widthThreshold || heightThreshold);
    }, 1000);

  }, []);

  return null;
};

export default SecurityComponent;