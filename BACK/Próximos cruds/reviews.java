package com.itb.inf2fm.innova.model.entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;


@Entity
@Table(name = "reviews")
public class reviews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long users_id;
    @Column(nullable = false)
    private Long store_id;
    @Column(nullable = true)
    private int rating;
    @Column(length = 500, nullable = true)
    private String comment;
    @Column(nullable = false)
    private LocalDateTime created_at;


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getUsers_id() {
        return users_id;
    }
    public void setUsers_id(Long users_id) {
        this.users_id = users_id;
    }
    public Long getStore_id() {
        return store_id;
    }
    public void setStore_id(Long store_id) {
        this.store_id = store_id;
    }
    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    public LocalDateTime getCreated_at() {
        return created_at;
    }
    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }
    

}
