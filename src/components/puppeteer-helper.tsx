"use client";

import { useEffect } from "react";

export function PuppeteerHelper() {
  useEffect(() => {
    if (window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).toggleJpeg = function toggleJpeg() {
        // Find all elements with class 'jpeg'
        const jpegElements = document.getElementsByClassName("jpeg");

        // Convert HTMLCollection to Array and iterate through each element
        Array.from(jpegElements).forEach((element) => {
          // Toggle the 'hidden' class
          element.classList.toggle("hidden");
        });
      };
    }
  }, []);
  return <></>;
}
