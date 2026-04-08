package com.itb.inf2fm.innova.model.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "stores")
public class stores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 100)
    private String name;
    @Column(nullable = true, length = 500)
    private String description;
    @Column(nullable = true, length = 255)
    private String image_url;
    @Column(nullable = true, length = 255)
    private String website_url;
    @Column(nullable = false)
    private LocalDateTime created_at;
    @Column(nullable = true)
    private LocalDateTime updated_at;
    @Column(nullable = false, length = 50)
    private String status;
    @Column
    private Double avaliacao = 0.0;
    @Column
    private Integer total_avaliacoes;
    @Column(nullable = false, length = 100)
    private String cidade;

    public String getCidade() {
        return cidade;
    }
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public Double getAvaliacao() {
        return avaliacao;
    }
    public void setAvaliacao(Double avaliacao) {
        this.avaliacao = avaliacao;
    }

    public Integer getTotalAvaliacoes() {
        return total_avaliacoes;
    }
    public void setTotalAvaliacoes(Integer totalAvaliacoes) {
        this.total_avaliacoes = total_avaliacoes;
    }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage_url() {
        return image_url;
    }
    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public String getWebsite_url() {
        return website_url;
    }
    public void setWebsite_url(String website_url) {
        this.website_url = website_url;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }
    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getUpdated_at() {
        return updated_at;
    }
    public void setUpdated_at(LocalDateTime updated_at) {
        this.updated_at = updated_at;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }


}
