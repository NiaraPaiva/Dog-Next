"use client";

import { PhotoData } from "@/actions/photo-get";
import PhotoContent from "../photo/photo-content";
import styles from "./feed-modal.module.css";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function FeedModal({ photo }: { photo: PhotoData }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes("foto")) {
    return null;
  }

  function handleOutsudeClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back();
  }
  return (
    <div className={styles.modal} onClick={handleOutsudeClick}>
      <PhotoContent data={photo} single={false} />
    </div>
  );
}
