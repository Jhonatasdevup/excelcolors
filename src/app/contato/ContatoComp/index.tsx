"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import CircularProgress from '@mui/material/CircularProgress';

export default function ContactForm() {
  const [send, setSend] = useState(false)
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    problema: "",
    termos: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value } = target;
  
    const newValue =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : value;
  
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    
    if (!formData.termos) {
      alert("Você precisa aceitar os termos da LGPD.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSend(true)
        setFormData({
            nome: "",
            whatsapp: "",
            email: "",
            problema: "",
            termos: false,
          })
      } else {
        alert("Erro ao enviar solicitação.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro inesperado ao enviar solicitação.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <section className={styles.section}>
      <div className={styles.formContainer}>
        <div className={styles.formImage}>
          <Image 
            src="/contatoPage.png" 
            alt="Atendimento ao cliente" 
            fill
            className={styles.image}
            priority
          />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.logoContainer}>
            <Image 
              src="/logo.png" 
              alt="Logo ExcelColors" 
              width={120}
              height={120}
              className={styles.logo}
              priority
            />
          </div>

          <h2 className={styles.title}>Solicite seu atendimento</h2>
          <p className={styles.subtitle}>Preencha o formulário abaixo e entraremos em contato</p>

          <div className={styles.formGroup}>
            <label className={styles.label}>Nome ou Razão social*</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Informe seu nome ou o nome da sua empresa."
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>WhatsApp*</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="seu@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Mensagem</label>
            <textarea
              name="problema"
              value={formData.problema}
              onChange={handleChange}
              rows={4}
              className={styles.textarea}
            />
          </div>

          <div className={styles.termsGroup}>
            <input
              type="checkbox"
              id="terms"
              name="termos"
              checked={formData.termos}
              onChange={handleChange}
              className={styles.checkbox}
              required
            />
            <label htmlFor="terms" className={styles.termsLabel}>
              Aceito os <a href="/politicadeprivacidade" className={styles.termsLink}>termos e condições</a> conforme a LGPD
            </label>
          </div>

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Enviar Solicitação"
            )}
          </button>
        {send? <p style={{color:'green', marginTop:15}}>Menssagem enviada!</p> : ""}
        </form>
      </div>
    </section>
  );
}