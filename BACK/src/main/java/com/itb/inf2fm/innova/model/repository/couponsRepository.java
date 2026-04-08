package com.itb.inf2fm.innova.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.itb.inf2fm.innova.model.entity.coupons;

@Repository
public interface couponsRepository extends JpaRepository<coupons, Long> {
    
}