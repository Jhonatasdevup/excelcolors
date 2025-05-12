"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { Modal, Box, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import styles from "./styles.module.css"

interface ServicesGalleryProps {
  dataImgs: StaticImageData[] | string[]
}

export default function ServicesGallery({ dataImgs }: ServicesGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const openModal = (imgSrc: string | StaticImageData) => {
    setSelectedImage(imgSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  if (!isClient) return null

  return (
    <section className={styles.gallerySection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Nossos serviços</h2>
        <div className={styles.titleUnderline}></div>
      </div>

      <div className={styles.galleryGrid}>
        {dataImgs.map((item, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => openModal(item)}
          >
            <Image
              alt={`Serviço Excel Colors ${index + 1}`}
              src={item}
              fill
              className={styles.galleryImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <Modal open={!!selectedImage} onClose={closeModal}>
        <Box
          sx={{
            position: "relative", // necessário para o Image fill
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "600px",
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <IconButton
            onClick={closeModal}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.6)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedImage && (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                alt="Imagem ampliada"
                src={selectedImage}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </Box>
      </Modal>
    </section>
  )
}
