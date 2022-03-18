import { useState, useEffect } from "react";

const useHashRouteToggle = (modalHash) => {
  const [isOpen, toggleOpen] = useState(false);

  const toggleOpenModal = (open) => {
    if (open) {
      window.location.assign(modalHash); // navigate to same url but with the specified hash
    } else {
      window.location.replace("#"); // remove the hash
    }
  };

  useEffect(() => {
    // function for handling hash change in browser, toggling modal open
    const handleOnHashChange = () => {
      const isHashMatch = window.location.hash === modalHash;
      toggleOpen(isHashMatch);
    };

    // event listener for hashchange event
    window.addEventListener("hashchange", handleOnHashChange);

    return () => window.removeEventListener("hashchange", handleOnHashChange);
  }, [modalHash]);

  return [isOpen, toggleOpenModal];
};

export default useHashRouteToggle;
